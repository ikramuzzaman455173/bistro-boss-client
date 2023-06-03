import React from 'react'
import CheckOutForm from './CheckOutForm'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import useCart from '../../Hooks/UseCart'

const Payment = () => {
  //todo provide publishable key
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)
  const [cart] = useCart()
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0)
  const price=parseFloat(totalAmount.toFixed(2))
  const Payment = () => {
  }
  return (
    <div>
      <Elements stripe={stripePromise}>
      <CheckOutForm cart={cart} price={price}></CheckOutForm>
      </Elements>
    </div>
  )
}

export default Payment