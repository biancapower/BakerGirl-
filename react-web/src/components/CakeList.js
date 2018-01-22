import React from 'react';
import Cake from './Cake'

export default function CakeList({ cakes }) {
  return (
    <div>
      <h1><strong>Cake Orders</strong></h1>
      {
        cakes.map(cake => {
          console.log(cake)
          return <Cake key={cake._id}
            {...cake} />
        })
      }
    </div>
  )
}
