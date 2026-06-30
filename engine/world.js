class WorldEngine {

    constructor() {

        this.state = {

            location: null,

            scenario: null,

            weather: null,

            time: null,

            participants: [],

            activeEvents: []

        };

    }

    get() {

        return this.state;

    }

    update(data) {

        this.state = {

            ...this.state,

            ...data

        };

    }

    reset() {

        this.state = {

            location: null,

            scenario: null,

            weather: null,

            time: null,

            participants: [],

            activeEvents: []

        };

    }

}

const WORLD = new WorldEngine();
