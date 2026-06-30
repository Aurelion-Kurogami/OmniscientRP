export class RelationshipEngine {

    constructor() {

        this.relationships = new Map();

    }

    get(a, b) {

        const key = `${a}:${b}`;

        return this.relationships.get(key) || {

            affinity: 0,

            trust: 0,

            hostility: 0

        };

    }

    set(a, b, value) {

        const key = `${a}:${b}`;

        this.relationships.set(key, value);

    }

    change(a, b, changes) {

        const current = this.get(a, b);

        this.set(a, b, {

            affinity: current.affinity + (changes.affinity || 0),

            trust: current.trust + (changes.trust || 0),

            hostility: current.hostility + (changes.hostility || 0)

        });

    }

}
