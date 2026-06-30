export class EngineConfig {

    constructor() {

        this.settings = {

            pack: "orv",

            provider: "openrouter",

            autoSave: true,

            autoBehavior: true,

            autoDirector: true,

            autoSkillTrigger: true,

            autoJudge: true,

            debug: false

        };

    }

    get(key) {

        return this.settings[key];

    }

    set(key, value) {

        this.settings[key] = value;

    }

    export() {

        return structuredClone(this.settings);

    }

}
