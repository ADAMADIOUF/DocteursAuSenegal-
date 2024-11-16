import React from 'react'
import { usePayForBookingCashMutation } from '../slices/doctorApiSlice'

const PayBooking = ({ bookingId }) => {
  const [payForBookingCash, { isLoading, error, data }] =
    usePayForBookingCashMutation()

  const handlePayment = async () => {
    try {
      await payForBookingCash(bookingId).unwrap()
      alert('Payment successful (Cash on Delivery)')
    } catch (err) {
      console.error('Payment failed:', err)
      alert('Error processing payment. Please try again.')
    }
  }

  return (
    <div>
      <button onClick={handlePayment} disabled={isLoading}>
        {isLoading ? 'Processing Payment...' : 'Pay Cash on Delivery'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {data && <p>{data.message}</p>}
    </div>
  )
}

export default PayBooking
