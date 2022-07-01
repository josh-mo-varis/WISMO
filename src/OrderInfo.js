import React from 'react'

export default function OrderInfo() {
  return (
    <div class='orderinfo card'>
        <div class='title'>Order Info</div>
        <div class='body'>
            <div class='purchaseorderid'>Purchase Order ID:</div>
            <div class='orderdate'>Order Date:</div>
            <div class='requisitionid'>Requisition ID:</div>
            <div class='correlationid'>Correlation ID:</div>
        </div>
    </div>
  )
}
