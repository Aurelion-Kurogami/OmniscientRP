export class EngineConfig {

    constructor() {

        this.settings = {

            pack: "orv",

            provider: "openrouter",

            autoSave: true,

            autoDirector: true,

            autoBehavior: true,

            autoJudge: true,

            autoEvents: true,

            autoEmotion: true,

            debug: false

        };

    }

    get(key) {

        return this.settings[key];

    }

    set(key, value) {

        this.settings[key] = value;

    }

    toggle(key) {

        if (typeof this.settings[key] === "boolean") {

            this.settings[key] = !this.settings[key];

        }

    }

    export() {

        return structuredClone(this.settings);

    }

}
