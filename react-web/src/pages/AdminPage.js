import React from 'react'
import CakeList from '../components/CakeList'
import { Route, Switch } from 'react-router-dom'
import Cake from '../components/Cake'
import { Container } from 'reactstrap';




export default ({ cakes, token }) => {
  try {
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
            <Container className="admin-pg-container">
              <CakeList cakes={cakes} />
            </Container>
          )
        } />
      </Switch>

    ) : ("loading..")
  )
  } catch (err) {
  return null
  }
}
