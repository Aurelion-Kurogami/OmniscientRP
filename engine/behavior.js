export class BehaviorEngine {

    constructor() {

        this.rules = [];

    }

    register(rule) {

        this.rules.push(rule);

    }

    decide(context) {

        for (const rule of this.rules) {

            const result = rule(context);

            if (result) {

                return result;

            }

        }

        return null;

    }

}
