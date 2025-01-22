import { NextResponse } from 'next/server';
import Stripe from 'stripe';


const stripe = new Stripe('sk_test_51PfDj3HE0HInGjDU7SSQHixOrJRbLqkqpCfRonjhHa5V5YSQitGYHgmkVkeis3m2ioRlds8q0fzwsLRkRDVLwWAb00ECbDB5G5', {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(req) {
  try {
    const { items, successUrl, cancelUrl } = await req.json();

    if (!items || !Array.isArray(items)) {
      console.error('Error: "items" parameter is missing or not an array.');
      return NextResponse.json(
        { error: 'The "items" parameter is required and must be an array.' },
        { status: 400 }
      );
    }

    if (!successUrl) {
      console.error('Error: "successUrl" parameter is missing.');
      return NextResponse.json(
        { error: 'The "successUrl" parameter is required.' },
        { status: 400 }
      );
    }

    if (!cancelUrl) {
      console.error('Error: "cancelUrl" parameter is missing.');
      return NextResponse.json(
        { error: 'The "cancelUrl" parameter is required.' },
        { status: 400 }
      );
    }

    const lineItems = items.map((item, index) => {
      if (!item.name || !item.price || !item.quantity) {
        console.error(`Error: Missing required fields in item at index ${index}.`, item);
        throw new Error(`Item at index ${index} is missing "name", "price", or "quantity".`);
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: item.description || 'No description provided.',
            images: item.images || [],
          },
          unit_amount: Math.round(parseFloat(item.price) * 100),
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    // Respond with the session ID
    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (error) {
    console.error('Error creating Stripe session:', error);

    // Return detailed error messages if available
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Stripe error: ${error.message}` },
        { status: error.statusCode || 500 }
      );
    }

    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 }
    );
  }
}
