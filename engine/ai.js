class AIEngine {

    async reply(data) {

        const prompt = PROMPT.build(data);

        return prompt;

    }

}

const AI = new AIEngine();
