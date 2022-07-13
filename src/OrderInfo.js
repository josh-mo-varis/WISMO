import React from 'react'

export default function OrderInfo({ orderInfo }) {
  return (
    <div class='orderinfo card'>
        <div class='title'>Order Info</div>
        <div class='body'>
            <div class='purchaseorderid'>Purchase Order ID: {orderInfo.orderID}</div>
            <div class='orderdate'>Order Date: {orderInfo.orderDate}</div>
            <div class='requisitionid'>Requisition ID: {orderInfo.requisitionID}</div>
            <div class='correlationid'>Correlation ID: {orderInfo.correlationID}</div>
        </div>
    </div>
  )
}
