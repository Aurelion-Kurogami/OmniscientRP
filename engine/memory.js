class MemoryEngine {

    constructor() {
        this.messages = [];
    }

    add(role, content) {

        this.messages.push({
            role,
            content
        });

    }

    get() {
        return this.messages;
    }

    clear() {
        this.messages = [];
    }

}

const MEMORY = new MemoryEngine();
