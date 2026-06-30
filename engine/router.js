class Router {

    async process(userMessage) {

        // 1. Search canon
        const canon = CANON.get(userMessage);

        // 2. Read memory
        const memory = MEMORY.get();

        // 3. Read world state
        const world = WORLD;

        // 4. Build prompt
        const prompt = PROMPT.build({
            systemPrompt: "",
            canon,
            memory,
            world,
            userMessage
        });

        // 5. Ask AI
        const reply = await AI.reply({
            systemPrompt: "",
            canon,
            memory,
            world,
            userMessage
        });

        // 6. Judge response
        JUDGE.clear();

        return reply;

    }

}

const ROUTER = new Router();
