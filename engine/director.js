class DirectorEngine {

    constructor() {
        this.scene = {};
    }

    update(context) {

        const result = {

            characters: [],

            events: [],

            weather: null,

            scenario: null,

            recommendations: []

        };

        return result;

    }

}

const DIRECTOR = new DirectorEngine();
