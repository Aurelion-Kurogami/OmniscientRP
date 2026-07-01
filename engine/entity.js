class EntityEngine {

    constructor() {

        this.entities = new Map();

    }

    register(id, entity) {

        this.entities.set(id, entity);

    }

    get(id) {

        return this.entities.get(id) || null;

    }

    has(id) {

        return this.entities.has(id);

    }

    remove(id) {

        this.entities.delete(id);

    }

    clear() {

        this.entities.clear();

    }

}

const ENTITY = new EntityEngine();
