export class World {

    constructor() {

        this.state = {

            turn: 0,

            scenario: null,

            location: null,

            weather: null,

            participants: [],

            activeEvents: []

        };

    }

    update(data) {

        Object.assign(
            this.state,
            data
        );

    }

    nextTurn() {

        this.state.turn++;

    }

    get() {

        return structuredClone(
            this.state
        );

    }

}
