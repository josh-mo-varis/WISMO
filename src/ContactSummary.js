import React from 'react'

export default function ContactSummary({ contactSummary}) {
  return (
    <div class='contactsummary card'>
        <div class='title'>Contact Summary</div>
        <div class='body'>
            <div class='firstname'>First Name: {contactSummary.firstName}</div>
            <div class='lastname'>Last Name: {contactSummary.lastName}</div>
            <div class='role'>Role: {contactSummary.role}</div>
            <div class='email'>Email: {contactSummary.email}</div>
            <div class='phone'>Phone: {contactSummary.phone}</div>
        </div>
    </div>
  )
}
