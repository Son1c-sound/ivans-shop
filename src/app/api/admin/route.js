import { MongoClient } from "mongodb"
import { v2 as cloudinary } from "cloudinary"
import stream from "stream"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uri = process.env.MONGO_URI
const dbName = process.env.AUTH_DB_NAME

const uploadToCloudinary = (fileBuffer, resourceType) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: resourceType },
      (error, result) => {
        if (error) {
          console.error("Cloudinary Upload Error: ", error)
          return reject(error)
        }
        resolve(result)
      }
    )

    const readableStream = new stream.PassThrough()
    readableStream.end(fileBuffer)
    readableStream.pipe(uploadStream)
  })
}

export async function POST(request) {
  const mongoClient = new MongoClient(uri)

  try {
    const formData = await request.formData()
    const files = formData.getAll("file")

    const mediaUrls = await Promise.all(
      files.map(async (file) => {
        const fileBuffer = Buffer.from(await file.arrayBuffer())
        const fileType = file.type

        if (fileType.includes("image") || fileType.includes("video")) {
          const resourceType = fileType.includes("image") ? "image" : "video"
          const uploadResult = await uploadToCloudinary(fileBuffer, resourceType)
          return uploadResult.secure_url
        }

        return null
      })
    )

    const validMediaUrls = mediaUrls.filter((url) => url !== null)

    const data = {
      ...Object.fromEntries(formData.entries()),
      fileUrls: validMediaUrls,
    }

    await mongoClient.connect()
    const db = mongoClient.db(dbName)
    const result = await db.collection("ecom").insertOne(data)

    return new Response(
      JSON.stringify({ message: "Item created", id: result.insertedId, fileUrls: data.fileUrls }),
      { status: 201 }
    )
  } catch (error) {
    console.error("Error during POST request: ", error)
    return new Response(
      JSON.stringify({ message: "Failed to create item", error: error.message }),
      { status: 500 }
    )
  } finally {
    await mongoClient.close()
  }
}
