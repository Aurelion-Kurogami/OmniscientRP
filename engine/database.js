export class Database {

    constructor(pack) {

        this.pack = pack;

    }

    all(type) {

        return this.pack[type] || [];

    }

    find(type, id) {

        return this.all(type).find(

            entry => entry.id === id

        ) || null;

    }

    findByName(type, name) {

        return this.all(type).find(

            entry =>

                entry.name?.toLowerCase() ===

                name.toLowerCase()

        ) || null;

    }

    filter(type, callback) {

        return this.all(type).filter(callback);

    }

    exists(type, id) {

        return this.find(type, id) !== null;

    }

}
