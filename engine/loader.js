export class Loader {

    constructor(packManager) {

        this.packManager = packManager;

        this.cache = new Map();

    }

    async load(packName) {

        if (this.cache.has(packName)) {

            return this.cache.get(packName);

        }

        const pack = await this.packManager.load(packName);

        this.cache.set(packName, pack);

        return pack;

    }

    unload(packName) {

        this.cache.delete(packName);

    }

    clear() {

        this.cache.clear();

    }

}
