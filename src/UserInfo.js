import React from 'react'

export default function UserInfo({ userInfo }) {
  return (
    <>
        <div class='userinfo card'>
            <div class='title'>User Info</div>
            <div class='body'>
                <div class='userid'>User ID: {userInfo.userID}</div>
                <div class='buyerpartnerid'>Buyer Partner ID: {userInfo.buyerPartnerID}</div>
                <div class='marketplaceid'>Market Place ID: {userInfo.marketplaceID}</div>
            </div>
        </div>
    </>
  )
}
