import request from 'superagent'
import GlobalActions from '../actions/GlobalActions'
window.GlobalActions = GlobalActions

class CloudApi {
    static instance
    constructor() {
        if (CloudApi.instance) {
            return CloudApi.instance
        }
        this.apiUrl = process.env.REACT_APP_API_URL
        CloudApi.instance = this
    }

    pingCloud() {
        let url = this.apiUrl + '/ping'
        request.get(url)
            .accept('json')
            .then(res => {
                GlobalActions.pingResponse(res.body)
            })
            .catch(error => {
                console.log(error)
                GlobalActions.pingResponse(error)
            })
    }
}

export default CloudApi