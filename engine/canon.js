class CanonEngine {

    get(name) {

        const results = SEARCH.search(name);

        if (results.length === 0)
            return null;

        return RETRIEVER.retrieve(results[0]);

    }

}

const CANON = new CanonEngine();
