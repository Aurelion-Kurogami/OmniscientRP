export class Memory {

    constructor(limit = 30) {
        this.limit = limit;
        this.messages = [];
    }

    add(role, content) {

        this.messages.push({
            role,
            content,
            timestamp: Date.now()
        });

        if (this.messages.length > this.limit) {
            this.messages.shift();
        }

    }

    history() {
        return [...this.messages];
    }

    clear() {
        this.messages = [];
    }

    latest() {
        return this.messages.at(-1) || null;
    }

}
