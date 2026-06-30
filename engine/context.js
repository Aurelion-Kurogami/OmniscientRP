export class Context {

    constructor() {
        this.state = {
            pack: null,
            timeline: null,
            location: null,
            scenario: null,
            participants: [],
            world: {}
        };
    }

    set(key, value) {
        this.state[key] = value;
    }

    get(key) {
        return this.state[key];
    }

    export() {
        return structuredClone(this.state);
    }

}
