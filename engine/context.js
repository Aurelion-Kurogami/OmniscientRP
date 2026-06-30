export class Context {

    constructor() {

        this.data = {};

    }

    set(key, value) {

        this.data[key] = value;

    }

    get(key) {

        return this.data[key];

    }

    has(key) {

        return key in this.data;

    }

    remove(key) {

        delete this.data[key];

    }

    clear() {

        this.data = {};

    }

    export() {

        return structuredClone(this.data);

    }

}
