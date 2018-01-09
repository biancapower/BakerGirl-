export function all() {
  return fetch('/cakes')
    .then(res => res.json())
    .catch(error => { console.log(error) })
}

export function save(cake) {
  return fetch('/cakes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cake)
  })
  .then(res => res.json())
  .catch(error => { console.log(error) })
}
