import React from 'react';
import Comment from './Comment'

export default function Cake(props) {
  const { layers, tiers, flavours, fillings, style, custName, contactNumber, email, eventDate, eventType, servings, delivery, deliveryAddress, referral } = props;
  return (
    <div className="cake mt-5">
      <div>
        Layers: {layers}
      </div>
      <div>
        Tiers: {tiers}
      </div>
      <div>
        Flavours: {flavours}
      </div>
      <div>
        Fillings: {fillings}
      </div>
      <div>
        Style: {style}        
      </div>
      <div>
        Customer Name: {custName}
      </div>
      <div>
        Contact Number: {contactNumber}
      </div>
      <div>
        Email Address: {email}
      </div>
      <div>
        Event Date: {eventDate}
      </div>
      <div>
        Event Type: {eventType}
      </div>
      <div>
        Number of Servings: {servings}
      </div>
      <div>
        Delivery Required?: {delivery ? "yes" : "no"}
      </div>
      <div>
        Delivery Address: {deliveryAddress}
      </div>
      <div>
        Where heard about BG: {referral}
      </div>

    </div>
  )
}
