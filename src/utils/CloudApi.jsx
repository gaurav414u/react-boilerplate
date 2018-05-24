import request from 'superagent'

class CloudApi {
  static instance
  constructor() {
    if (CloudApi.instance) {
      return CloudApi.instance
    }
    this.apiUrl = process.env.REACT_APP_API_URL
    CloudApi.instance = this
  }

  pingCloud(cb) {
    let url = this.apiUrl + '/ping'
    request.get(url)
      .accept('json')
      .then(res => {
        if (cb) {
          cb(res.body)
        }
      })
      .catch(error => {
        console.log(error)
        if (cb) {
          cb(null, error)
        }
      })
  }
}

export default CloudApi