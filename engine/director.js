export class Director {

    update(context, memory) {

        const latest = memory.latest();

        if (!latest) return;

        context.set("last_message", latest.content);

        const world = context.get("world") || {};

        world.turn = (world.turn || 0) + 1;

        world.last_actor = latest.role;

        context.set("world", world);

    }

}
