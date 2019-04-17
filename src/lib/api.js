import config from 'config'

let api = {
  trac: config.backend.trac,
  fetch (method, params, id) {
    return fetch(api.backend, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        method: method,
        params: params,
        jsonrpc: '2.0'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then((response) => {
      return response.result
    }).catch((response) => {
      return Promise.reject(response.error || response)
    })
  }
}
export default api
