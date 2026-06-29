class SaveEngine {

    constructor() {
        this.player = {};
        this.world = {};
        this.characters = [];
        this.history = [];
    }

    load(save) {
        this.player = save.player;
        this.world = save.world;
        this.characters = save.characters;
        this.history = save.history;
    }

    reset() {
        this.player = {};
        this.world = {};
        this.characters = [];
        this.history = [];
    }

}

const SAVE = new SaveEngine();
