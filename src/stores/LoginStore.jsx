import FluxApp from '../utils/FluxApp'
import GlobalActions from '../actions/GlobalActions'
import CloudApi from '../utils/CloudApi'

export class LoginStore {
    constructor() {
        console.log("LoginStore contructor")
        this.cloudApi = new CloudApi()
        this.value = 0
        this.pingRes = null
        window.loginStore = this

        this.bindActions(GlobalActions)
    }

    onInc() {
        this.value++
    }

    onDec() {
        this.value--
    }

    onPingRequest() {
        this.cloudApi.pingCloud()
    }

    onPingResponse(response) {
        console.log(response)
        this.pingRes = JSON.stringify(response)
    }
}

export default FluxApp.instance.createStore(LoginStore, 'LoginStore')
