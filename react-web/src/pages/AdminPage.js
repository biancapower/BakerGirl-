import React from 'react'
import CakeList from '../components/CakeList'
import { Route, Switch } from 'react-router-dom'
import Cake from '../components/Cake'


export default ({ cakes }) => {
  return (

    cakes ? (

      <Switch>
        <Route path='/cakes/:id' render={
          ({ match }) => {
            const id = match.params.id
            const cake = cakes.find((cake) => cake._id === id)
            return (<Cake {...cake} />)
          }
        } />
        <Route path='/admin' render={
          () => (
            <div>
              <CakeList cakes={cakes} />
            </div>
          )
        } />
      </Switch>

    ) : ("loading..")
  )
}
