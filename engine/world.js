class WorldEngine {

    constructor() {
        this.currentPack = "";
        this.currentScenario = 1;
    }

    loadPack(pack) {
        this.currentPack = pack;
    }

    setScenario(id) {
        this.currentScenario = id;
    }

    getScenario() {
        return this.currentScenario;
    }

}

const WORLD = new WorldEngine();
