import { World } from "./world.js";

export class Context {

    constructor() {

        this.world = new World();

        this.state = {

            pack: null,

            timeline: null,

            participants: []

        };

    }

    set(key, value) {

        this.state[key] = value;

    }

    get(key) {

        return this.state[key];

    }

    export() {

        return {

            ...structuredClone(this.state),

            world: this.world.get()

        };

    }

}
