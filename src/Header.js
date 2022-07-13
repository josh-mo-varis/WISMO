import React from 'react'

import './Header.css';

export default function header() {
  return (
    <div class='header'>
        <div class='leftSide'>Dashbaord</div>
        <div class='subtext'>Here's the summary for order ...</div>
        <div class='spacer'></div>
        <input type="text" placeholder="Search.."/>
    </div>
  )
}
