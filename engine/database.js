class Database {

    constructor() {
        this.data = {};
    }

    register(name, data) {
        this.data[name] = data;
    }

    get(name) {
        return this.data[name] || [];
    }

    clear() {
        this.data = {};
    }

}

const DB = new Database();
