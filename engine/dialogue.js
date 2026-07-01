export class DialogueEngine {

    constructor() {

        this.queue = [];

    }

    push(character, text) {

        this.queue.push({

            character,

            text,

            timestamp: Date.now()

        });

    }

    next() {

        return this.queue.shift() || null;

    }

    hasDialogue() {

        return this.queue.length > 0;

    }

    clear() {

        this.queue = [];

    }

}
