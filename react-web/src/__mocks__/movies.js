const resMock = {
  token: 'mytoken'
};

export function getMovies() {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () =>
        resMock[token]
          ? resolve(resMock[token])
          : reject({
              error: 'Error: token not found in mock response'
            })
    );
  });
}
