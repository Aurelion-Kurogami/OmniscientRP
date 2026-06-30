class DirectorEngine {

    constructor() {
        this.scene = {};
    }

    prepare(userMessage) {

        return {

            canon: CANON.get(userMessage),

            memory: MEMORY.get(),

            world: WORLD,

            behavior: BEHAVIOR.decide({
                world: WORLD,
                memory: MEMORY.get(),
                message: userMessage
            })

        };

    }

    async run(userMessage) {

        return this.prepare(userMessage);

    }

}

const DIRECTOR = new DirectorEngine();
