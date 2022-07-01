import React from 'react'

import OrderInfo from './OrderInfo'
import UserInfo from './UserInfo'
import OrderSummary from './OrderSummary'
import ContactSummary from './ContactSummary'
import BillingAddresses from './BillingAddresses'
import ShippingAddresses from './ShippingAddresses'
import OrderDetails from './OrderDetails'

export default function Content() {
  return (
    <div class='content'>
        <OrderInfo />
        <UserInfo />
        <OrderSummary />
        <ContactSummary />
        <BillingAddresses />
        <ShippingAddresses />
        <OrderDetails />
    </div>
  )
}
