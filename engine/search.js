export class Search {

    constructor(database) {

        this.database = database;

    }

    byId(type, id) {

        return this.database.find(type, id);

    }

    byName(type, name) {

        return this.database
            .get(type)
            .find(entry =>
                entry.name?.toLowerCase() ===
                name.toLowerCase()
            ) || null;

    }

    byAlias(type, alias) {

        return this.database
            .get(type)
            .find(entry =>
                (entry.aliases || []).some(
                    value =>
                        value.toLowerCase() ===
                        alias.toLowerCase()
                )
            ) || null;

    }

    filter(type, callback) {

        return this.database
            .get(type)
            .filter(callback);

    }

}
