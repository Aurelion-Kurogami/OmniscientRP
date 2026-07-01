export class Director {

    update(context, memory, events = null) {

        const latest = memory.latest();

        if (!latest) {

            return;

        }

        const world = context.get("world") || {};

        world.turn = (world.turn || 0) + 1;

        world.last_actor = latest.role;

        world.last_update = Date.now();

        context.set("world", world);

        context.set("last_message", latest.content);

        if (events) {

            events.emit("turn_started", {

                turn: world.turn,

                actor: latest.role,

                content: latest.content

            });

        }

    }

    beginScene(context, location) {

        const world = context.get("world") || {};

        world.location = location;

        world.scene_active = true;

        context.set("world", world);

    }

    endScene(context) {

        const world = context.get("world") || {};

        world.scene_active = false;

        context.set("world", world);

    }

}
