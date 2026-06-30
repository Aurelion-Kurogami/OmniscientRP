class Router {

    async process(userMessage) {

        const context = CONTEXT.build(userMessage);

        const prompt = PROMPT.build({

            systemPrompt: "",

            ...context

        });

        const reply = await AI.reply({

            systemPrompt: "",

            ...context

        });

        return reply;

    }

}

const ROUTER = new Router();
