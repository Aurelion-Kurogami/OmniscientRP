export function buildSave(memory, context) {

    return {

        created: Date.now(),

        context: context.export(),

        messages: memory.history()

    };

}
