import React from 'react';


export default function Cake(props) {
  const { layers, tiers, flavours, fillings, style, custName, contactNumber, email, eventDate, eventType, servings, delivery, deliveryAddress, referral } = props;
  return (
    <table className="cake admin-table mt-5 mb-5">
      <tr>
        <th className="admin-pg-q">Customer Name:</th>
        <th className="admin-pg-a">{custName}</th>
      </tr>
      <tr>
        <td className="admin-pg-q">Contact Number:</td>
        <td className="admin-pg-a">{contactNumber}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Email Address:</td>
        <td className="admin-pg-a">{email}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Event Date:</td>
        <td className="admin-pg-a">{eventDate}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Event Type:</td>
        <td className="admin-pg-a">{eventType}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Layers:</td>
        <td className="admin-pg-a">{layers}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Tiers:</td>
        <td className="admin-pg-a">{tiers}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Flavours:</td>
        <td className="admin-pg-a">{flavours}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Fillings:</td>
        <td className="admin-pg-a">{fillings}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Style:</td>
        <td className="admin-pg-a">{style}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Number of Servings:</td>
        <td className="admin-pg-a">{servings}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Delivery Required?:</td>
        <td className="admin-pg-a">{delivery ? "yes" : "no"}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Delivery Address:</td>
        <td className="admin-pg-a">{deliveryAddress}</td>
      </tr>
      <tr>
        <td className="admin-pg-q">Where heard about BG:</td>
        <td className="admin-pg-a">{referral}</td>
      </tr>

    </table>
  )
}
