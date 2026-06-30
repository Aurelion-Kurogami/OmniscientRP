export class Router {

    constructor(engine) {
        this.engine = engine;
    }

    async send(userMessage) {

        this.engine.memory.add("user", userMessage);

        const reply = await this.engine.reply(
            this.engine.memory.history()
        );

        this.engine.memory.add("assistant", reply);

        return reply;

    }

}
