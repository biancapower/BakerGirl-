import React from 'react'

function SignInForm({ onSignIn }) {
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={ onSignIn }>
        <label>
          Email
          &nbsp;
          <input type="email" name="email"/>
        </label>

        <label>
          Password
          &nbsp;
          <input type="password" name="password"/>
        </label>

        <button type="submit">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignInForm;
