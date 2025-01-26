import { NextResponse } from 'next/server'
import Stripe from 'stripe'


const stripe = new Stripe('sk_test_51PfDj3HE0HInGjDU7SSQHixOrJRbLqkqpCfRonjhHa5V5YSQitGYHgmkVkeis3m2ioRlds8q0fzwsLRkRDVLwWAb00ECbDB5G5', {
  apiVersion: '2024-12-18.acacia',
})

export async function POST(req) {
  try {
    const { items, successUrl, cancelUrl } = await req.json()

    const lineItems = items.map((item, index) => {
      if (!item.name || !item.price || !item.quantity) {
        console.error(`Error: Missing required fields in item at index ${index}.`, item)
        throw new Error(`Item at index ${index} is missing "name", "price", or "quantity".`)
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: 'Hair, Skin and Nails Essentials.',
            images: item.images || [],
          },
          unit_amount: Math.round(parseFloat(item.price) * 100),
        },
        quantity: item.quantity,
      }
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,

    })


    return NextResponse.json({ sessionId: session.id }, { status: 200 })
  } catch (error) {
    console.error('Error creating Stripe session:', error)
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Stripe error: ${error.message}` },
      )
    }

    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 }
    )
  }
}
