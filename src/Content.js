import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import OrderInfo from './OrderInfo'
import UserInfo from './UserInfo'
import OrderSummary from './OrderSummary'
import ContactSummary from './ContactSummary'
import BillingAddresses from './BillingAddresses'
import ShippingAddresses from './ShippingAddresses'
import OrderDetails from './OrderDetails'

export default function Content() {
  const [orderInfo, setOrderInfo] = useState({ orderID:uuid(), orderDate:'01-01-2022', requisitionID:uuid(), correlationID:uuid() })
  const [userInfo, setUserInfo] = useState({ userID:uuid(), buyerPartnerID:uuid(), marketplaceID:uuid() })
  const [orderSummary, setOrderSummary] = useState({ currencyCode:uuid(), preTotal:100.04, shipCharge:32.12, estimatedTax:8.08, orderTotal:140.24})
  const [contactSummary, setContactSummary] = useState({ firstName:'Jane', lastName:'doe', role:'some role', email:'someEmail@email.com', phone:'123-456-7890'})
  const [billingAddresses, setBillingAddresses] = useState({ addressid:uuid(), name:"john doe", workName:'jonathan doe', streetName1:"some address", streetName2:'some second address', city:'some city', state:'some state', country:'some country', email:'someEmail@email.com', phoneNumber:'123-456-7890'})
  const [shippingAddresses, setShippingAddresses] = useState({ addressid:uuid(), name:"john doe", workName:'jonathan doe', streetName1:"some address", streetName2:'some second address', city:'some city', state:'some state', country:'some country', email:'someEmail@email.com', phoneNumber:'987-654-3210'})

  //TODO: connect to REST api and fill above consts with the relevant info to be passed down into components

  return (
    <div class='content'>
        <OrderInfo orderInfo={orderInfo}/>
        <UserInfo userInfo={userInfo}/>
        <OrderSummary orderSummary={orderSummary}/>
        <ContactSummary contactSummary={contactSummary}/>
        <BillingAddresses billingAddresses={billingAddresses}/>
        <ShippingAddresses shippingAddresses={shippingAddresses}/>
        <OrderDetails />
    </div>
  )
}
