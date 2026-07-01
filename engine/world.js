export class World {

    constructor() {

        this.state = {

            turn: 0,

            scenario: null,

            location: null,

            weather: "Unknown",

            probability: 100,

            participants: [],

            activeEvents: []

        };

    }

    get(key) {

        return this.state[key];

    }

    set(key, value) {

        this.state[key] = value;

    }

    nextTurn() {

        this.state.turn++;

    }

    export() {

        return structuredClone(this.state);

    }

}
