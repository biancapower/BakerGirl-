import decodeJWT from 'jwt-decode'

const AUTH_API_URL=`${process.env.REACT_APP_API_URL}/auth`
const TOKEN_KEY = 'token'

function setToken(token) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token)
  } else {
    localStorage.removeItem(TOKEN_KEY)
  }
}


export const decodeToken = () => {
  if (isSignedIn()) {
    return decodeJWT(token())
  }
}


export function token() {
  return localStorage.getItem(TOKEN_KEY)
}

export function signIn({ email, password }) {
  const SIGNIN_URL = `${AUTH_API_URL}/signin`

  return fetch(SIGNIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(json => {
    if (json) { setToken(json["token"]) }
    return json
  })
  .catch(error => { console.log(error) })
}

//returns truthy value into true or falste !! toekn is expecting true.
export function isSignedIn() {
  return !!token()
}

export function signOut() {
  setToken()
}
