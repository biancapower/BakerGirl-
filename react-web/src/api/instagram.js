const INSTAGRAM_API_URL=`${process.env.REACT_APP_API_URL}/authorize`

export function all() {
  return fetch(INSTAGRAM_API_URL)
    .then(res => {
      console.log('res: ', res);
      // Redirect the user to the Instagram URL that was generated by the backend
      window.location.href = res.url;

      // res.json()
      //   .then(function(data) {
      //     console.log('Success:', data);
      //
      //     // Redirect the user to the Instagram URL that was generated by the backend
      //     window.location.href = data.url;
      //   })
      //   .catch(error => console.error('Error:', error));
    })
    .catch(error => console.error('Error:', error))
}
