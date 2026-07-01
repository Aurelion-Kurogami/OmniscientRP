export function buildSave(memory, context, config = {}) {

    return {

        version: 1,

        created: Date.now(),

        config,

        context: context.export(),

        messages: memory.latest(100)

    };

}
