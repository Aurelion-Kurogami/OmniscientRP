class PromptBuilder {

    build({
        systemPrompt,
        canon,
        memory,
        world,
        userMessage
    }) {

        return `
SYSTEM
${systemPrompt}

CANON
${JSON.stringify(canon, null, 2)}

MEMORY
${JSON.stringify(memory, null, 2)}

WORLD
${JSON.stringify(world, null, 2)}

USER
${userMessage}
`;

    }

}

const PROMPT = new PromptBuilder();
