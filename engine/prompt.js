build(data) {

    return `

SYSTEM
${data.systemPrompt}

CANON
${JSON.stringify(data.canon, null, 2)}

MEMORY
${JSON.stringify(data.memory, null, 2)}

WORLD
${JSON.stringify(data.world, null, 2)}

DIRECTOR
${JSON.stringify(data.direction, null, 2)}

USER
${data.userMessage}

`;

}
