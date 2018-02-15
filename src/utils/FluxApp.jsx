import Alt from 'alt'

/**
 * A Singleton class having app level utils like the Alt instance
 */
class FluxApp {
    static instance
    constructor() {
        if (FluxApp.instance) {
            return FluxApp.instance
        }

        this.alt = new Alt()
        FluxApp.instance = this
    }

    createStore(storeClass, storeName) {
        return this.alt.createStore(storeClass, storeName)
    }

    createActions(actionsClass) {
        return this.alt.createActions(actionsClass)
    }
}

export default FluxApp