const resMock = {
  token: 'mytoken'
};

export function getCakes() {
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
