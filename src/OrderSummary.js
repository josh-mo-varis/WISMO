import React from 'react'

export default function OrderSummary({ orderSummary }) {
  return (
    <div class='ordersummary card'>
        <div class='title'>Order Summary</div>
        <div class='body'>
            <div class='currencycode'>Currency Code: {orderSummary.currencyCode}</div>
            <div class='pretotal'>Pre-Total: ${orderSummary.preTotal}</div>
            <div class='shipcharge'>Ship Charge: ${orderSummary.shipCharge}</div>
            <div class='estimatetax'>Estimated Tax: ${orderSummary.estimatedTax}</div>
            <div class='ordertotal'>Order Total: ${orderSummary.orderTotal}</div>
        </div>
    </div>
  )
}
