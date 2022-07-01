import React from 'react'

export default function OrderSummary() {
  return (
    <div class='ordersummary card'>
        <div class='title'>Order Summary</div>
        <div class='body'>
            <div class='currencycode'>Currency Code:</div>
            <div class='pretotal'>Pre-Total:</div>
            <div class='shipcharge'>Ship Charge:</div>
            <div class='estimatetax'>Esimate Tax:</div>
            <div class='ordertotal'>Order Total:</div>
        </div>
    </div>
  )
}
