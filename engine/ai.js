class AIEngine {

    constructor() {

        this.provider = "claude";

    }

    setProvider(provider) {

        this.provider = provider;

    }

    async reply(context) {

        const prompt = PROMPT.build({

            systemPrompt: "",

            ...context

        });

        console.log(prompt);

        // Claude / GPT / Gemini request goes here

        return "";

    }

}

const AI = new AIEngine();
