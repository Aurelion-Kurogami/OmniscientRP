class RelationshipEngine {

    constructor() {

        this.relationships = new Map();

    }

    get(a, b) {

        const key = `${a}:${b}`;

        return this.relationships.get(key) || {

            trust: 50,

            respect: 50,

            affection: 50,

            fear: 0,

            rivalry: 0

        };

    }

    set(a, b, data) {

        const key = `${a}:${b}`;

        this.relationships.set(key, data);

    }

}

const RELATIONSHIP = new RelationshipEngine();
