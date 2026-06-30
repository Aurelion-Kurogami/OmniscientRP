class Entity {

    constructor(data = {}) {

        this.id = data.id || "";

        this.type = data.type || "";

        this.name = data.name || "";

        this.tags = data.tags || [];

        this.data = data;

    }

    hasTag(tag) {

        return this.tags.includes(tag);

    }

}

const ENTITY = {

    create(data) {

        return new Entity(data);

    }

};
