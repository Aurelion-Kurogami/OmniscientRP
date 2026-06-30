export class Behavior {

    update(context) {

        const world = context.get("world") || {};

        const participants = context.get("participants") || [];

        return participants.map(character => ({

            id: character,

            state: "active",

            action: "observe",

            worldTurn: world.turn || 0

        }));

    }

}
