function getPromise (opts = {}) {
  return new Promise((resolve, reject) => {
    if (opts.reject) {
      return reject('😰')
    }

    return resolve('👍👍')
  })
}

module.exports = {
  getPromise,
}
