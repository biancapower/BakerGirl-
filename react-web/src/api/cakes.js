import { token } from './auth'

const CAKES_API_URL=`${process.env.REACT_APP_API_URL}cakes`

export function all() {
  return fetch(CAKES_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'applicaton/json',
      'Authorization': `Bearer ${token()}`
    }
  })
    .then(res => res.json())
    .catch(error => { console.log(error) })
}

export function save(cake) {
  return fetch(CAKES_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`
    },
    body: JSON.stringify(cake)
  })
    .then(res => res.json())
    .catch(error => { console.log(error) })
}
