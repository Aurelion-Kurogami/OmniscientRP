class PackManager {

    constructor() {
        this.current = null;
    }

    async use(pack) {

        await LOADER.loadPack(pack);

        this.current = pack;

    }

    getCurrent() {
        return this.current;
    }

}

const PACK_MANAGER = new PackManager();
