class Router {

    constructor() {
        this.provider = "auto";
    }

    setProvider(provider) {
        this.provider = provider;
    }

    getProvider() {
        return this.provider;
    }

}

const ROUTER = new Router();
