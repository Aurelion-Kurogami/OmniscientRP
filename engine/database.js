export class Database {

    constructor(pack) {

        this.pack = pack;

    }

    get(type) {

        return this.pack[type] || [];

    }

    find(type, id) {

        return this.get(type).find(
            entry => entry.id === id
        ) || null;

    }

    filter(type, callback) {

        return this.get(type).filter(callback);

    }

    exists(type, id) {

        return this.find(type, id) !== null;

    }

}
