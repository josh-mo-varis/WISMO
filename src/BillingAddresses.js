import React from 'react'

export default function BillingAddresses({ billingAddresses }) {

  return (
    <div class='billingaddresses card'>
      <div class='title'>Billing Addresses</div>
      <div class='body'>
        <div class='addressid'>Address ID: {billingAddresses.addressid}</div>
        <div class='name'>Name: {billingAddresses.name}</div>
        <div class='workname'>Work Name: {billingAddresses.workName}</div>
        <div class='streetname1'>Streetname 1: {billingAddresses.streetName1}</div>
        <div class='streetname2'>Streetname 2: {billingAddresses.streetName2}</div>
        <div class='city'>City: {billingAddresses.city}</div>
        <div class='state'>State: {billingAddresses.state}</div>
        <div class='country'>Country: {billingAddresses.country}</div>
        <div class='email'>Email: {billingAddresses.email}</div>
        <div class='phonenumber'>Phone Number: {billingAddresses.phoneNumber}</div>
      </div>
    </div>
  )
}
