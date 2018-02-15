import FluxApp from '../utils/FluxApp'
import GlobalActions from '../actions/GlobalActions'

export class LoginStore {
    constructor() {
        console.log("LoginStore contructor")
        this.bindActions(GlobalActions)
        this.value = 0
    }

    onInc() {
        this.value++
    }

    onDec() {
        this.value--
    }
}

export default FluxApp.instance.createStore(LoginStore, 'LoginStore')
