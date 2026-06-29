class EntityEngine {

    constructor() {
        this.entities = [];
    }

    add(entity) {
        this.entities.push(entity);
    }

    all() {
        return this.entities;
    }

    clear() {
        this.entities = [];
    }

}

const ENTITY = new EntityEngine();
