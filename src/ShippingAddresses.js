import React from 'react'

export default function ShippingAddresses({ shippingAddresses }) {
  return (
    <div className='shippingaddresses card'>
        <div class='title'>Shipping Addresses</div>
        <div class='body'>
            <div class='addressid'>Address ID: {shippingAddresses.addressID}</div>
            <div class='name'>Name: {shippingAddresses.name}</div>
            <div class='workname'>Work Name: {shippingAddresses.workName}</div>
            <div class='streetname1'>Street Name 1: {shippingAddresses.streetName1}</div>
            <div class='streetname2'>Street Name 2: {shippingAddresses.streetName2}</div>
            <div class='city'>City: {shippingAddresses.city}</div>
            <div class='state'>State: {shippingAddresses.state}</div>
            <div class='country'>Country: {shippingAddresses.country}</div>
            <div class='email'>Email: {shippingAddresses.email}</div>
            <div class='phonenumber'>Phone Number: {shippingAddresses.phoneNumber}</div>
        </div>
    </div>
  )
}
