export function buildPrompt(pack, messages, context = {}) {

    return {

        system: {

            pack: pack?.manifest?.name || "Unknown",

            timeline: context.timeline || null,

            location: context.location || null,

            scenario: context.scenario || null

        },

        messages

    };

}
