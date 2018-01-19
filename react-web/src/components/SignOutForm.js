import React from 'react'
import { Redirect } from 'react-router-dom'

//takes a prop
//call the prop
// render a redirect to sign in

export default ({ onSignOut }) => {
  onSignOut()
  return (<Redirect to='/signin'/>)
}
