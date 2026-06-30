import { Loader } from "./loader.js";
import { Memory } from "./memory.js";
import { Context } from "./context.js";
import { buildPrompt } from "./prompt.js";
import { judge } from "./judge.js";
import { buildSave } from "./save.js";

export class AIEngine {

    constructor(provider) {

        this.provider = provider;

        this.loader = new Loader();

        this.memory = new Memory();

        this.context = new Context();

        this.pack = null;

    }

    async initialize(packName) {

        this.pack = await this.loader.initialize(packName);

        this.context.set("pack", packName);

    }

    async reply(messages) {

        const prompt = buildPrompt(
            this.pack,
            messages
        );

        const raw = await this.provider.generate(prompt);

        const checked = judge(raw);

        const save = buildSave(
            this.memory,
            this.context
        );

        console.log(save);

        return checked.reply;

    }

}
