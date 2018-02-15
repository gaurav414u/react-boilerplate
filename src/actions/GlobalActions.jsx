import FluxApp from '../utils/FluxApp'

class GlobalActions {
    constructor() {
        this.generateActions(
            'inc',
            'dec',
            'pingRequest',
            'pingResponse'
        )
    }
}

export default FluxApp.instance.createActions(GlobalActions)
