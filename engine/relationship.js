export class RelationshipEngine {

    constructor() {

        this.relationships = new Map();

    }

    key(a, b) {

        return [a, b].sort().join(":");

    }

    get(a, b) {

        const key = this.key(a, b);

        if (!this.relationships.has(key)) {

            this.relationships.set(key, {

                affinity: 0,

                trust: 0,

                respect: 0,

                hostility: 0

            });

        }

        return this.relationships.get(key);

    }

    change(a, b, changes) {

        const relationship = this.get(a, b);

        Object.keys(changes).forEach(stat => {

            relationship[stat] += changes[stat];

        });

    }

}
