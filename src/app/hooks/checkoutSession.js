import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PfDj3HE0HInGjDUeHdMZMffSz3ncjDPqdONzb4snIO6qD67gffIhZgtOk6HYHY01gaQbdKtx98vl5jeiIJRoaFc00jgmt0iEw');

export const useCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem('cartItems');
    if (items) {
      setCartItems(JSON.parse(items));
    }
  }, []);

  const createCheckoutSession = async () => {
    setIsLoading(true);

    try {
      const latestCartItems = JSON.parse(localStorage.getItem('cart') || '[]');

      if (!latestCartItems || latestCartItems.length === 0) {
        throw new Error('Cart is empty');
      }

      // Add tax directly to each item's price
      const itemsWithTax = latestCartItems.map((item) => ({
        name: item.name,
        images: [item.image],
        price: (parseFloat(item.price) * 1.07).toFixed(2), // Tax included price
        quantity: item.quantity,
      }));

      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: itemsWithTax,
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/cancel`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });

        if (error) {
          throw new Error(error.message);
        }
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createCheckoutSession, isLoading, cartItems };
};
