class Router {

    async process(userMessage) {

        // Canon
        const canon = CANON.get(userMessage);

        // Memory
        const memory = MEMORY.get();

        // World
        const world = WORLD;

        // Director decides world events
        const direction = DIRECTOR.update({
            canon,
            memory,
            world,
            userMessage
        });

        // Build prompt
        const prompt = PROMPT.build({

            systemPrompt: "",

            canon,

            memory,

            world,

            direction,

            userMessage

        });

        // AI response
        const reply = await AI.reply({

            systemPrompt: "",

            canon,

            memory,

            world,

            direction,

            userMessage

        });

        return reply;

    }

}

const ROUTER = new Router();
