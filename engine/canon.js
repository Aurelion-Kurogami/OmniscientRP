class CanonEngine {

    get(name) {

        const results = SEARCH.search(name);

        if (results.length === 0) {

            return null;

        }

        return RETRIEVER.retrieve(results[0]);

    }

    exists(name) {

        return this.get(name) !== null;

    }

    verify(name) {

        return {

            exists: this.exists(name),

            data: this.get(name)

        };

    }

}

const CANON = new CanonEngine();
