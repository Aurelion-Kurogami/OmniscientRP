export class Director {

    update(context, memory, events) {

        const world = context.get("world") || {};

        world.turn = (world.turn || 0) + 1;

        world.lastUpdate = Date.now();

        context.set("world", world);

        const latest = memory.latest(1)[0];

        if (!latest) {

            return;

        }

        events.emit(

            "turn_started",

            {

                turn: world.turn,

                actor: latest.type,

                message: latest.content

            }

        );

    }

    beginScene(context, location) {

        const world = context.get("world") || {};

        world.location = location;

        context.set("world", world);

    }

    endScene(context) {

        const world = context.get("world") || {};

        world.sceneFinished = true;

        context.set("world", world);

    }

}
