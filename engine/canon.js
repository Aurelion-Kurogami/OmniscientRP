class CanonEngine {

    find(name) {

        const result = SEARCH.search(name);

        if (result.length === 0)
            return null;

        return result[0];

    }

}

const CANON = new CanonEngine();
