import FluxApp from '../utils/FluxApp'

class GlobalActions {
    constructor() {
        this.generateActions(
            'inc',
            'dec'
        )
    }
}

export default FluxApp.instance.createActions(GlobalActions)
