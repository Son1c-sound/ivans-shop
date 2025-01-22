import { MongoClient, ObjectId } from "mongodb"


const uri = process.env.MONGO_URI
const dbName = process.env.AUTH_DB_NAME


export async function GET() {
  const mongoClient = new MongoClient(uri)
  
  try {
    await mongoClient.connect()
    const db = mongoClient.db(dbName)
    
    const ecom = await db.collection("ecom").find({}).sort({ _id: -1 }).toArray()
    
    return new Response(JSON.stringify(ecom), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    })
    
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    })
  } finally {
    await mongoClient.close()
  }
}


export async function POST(request) {
  const mongoClient = new MongoClient(uri)
  
  try {
    const body = await request.json()
    
    await mongoClient.connect()
    const db = mongoClient.db(dbName)
    
    const result = await db.collection("ecom").insertOne(body)
    
    return new Response(JSON.stringify({ 
      message: "product created successfully",
      id: result.insertedId 
    }), {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    })
    
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    })
  } finally {
    await mongoClient.close()
  }
}


export async function PUT(request) {
  const mongoClient = new MongoClient(uri)
  
  try {
    const body = await request.json()
    const { _id, ...updateData } = body
    
    if (!_id) {
      return new Response(JSON.stringify({ error: "ID is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      })
    }
    
    await mongoClient.connect()
    const db = mongoClient.db(dbName)
    
    const result = await db.collection("ecom").updateOne(
      { _id: new ObjectId(_id) },
      { $set: updateData }
    )
    
    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: "product not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      })
    }
    
    return new Response(JSON.stringify({ 
      message: "product updated successfully",
      modifiedCount: result.modifiedCount 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    })
    
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    })
  } finally {
    await mongoClient.close()
  }
}


export async function DELETE(request) {
    const mongoClient = new MongoClient(uri)
    
    try {
      const body = await request.json()
      const id = body.id
  
      if (!id) {
        return new Response(JSON.stringify({ error: "ID is required" }), {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        })
      }
  
      await mongoClient.connect()
      const db = mongoClient.db(dbName)
  
      const result = await db.collection("ecom").deleteOne({
        _id: new ObjectId(id)
      })
  
      if (result.deletedCount === 0) {
        return new Response(JSON.stringify({ error: "product not found" }), {
          status: 404,
          headers: {
            "Content-Type": "application/json"
          }
        })
      }
  
      return new Response(JSON.stringify({
        message: "product deleted successfully",
        deletedCount: result.deletedCount
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      })
  
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      })
    } finally {
      await mongoClient.close()
    }
}