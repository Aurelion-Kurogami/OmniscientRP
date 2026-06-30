export class Memory {

    constructor(limit = 100) {

        this.limit = limit;

        this.entries = [];

    }

    add(type, content) {

        this.entries.push({

            type,

            content,

            timestamp: Date.now()

        });

        if (this.entries.length > this.limit) {

            this.entries.shift();

        }

    }

    latest(count = 10) {

        return this.entries.slice(-count);

    }

    filter(type) {

        return this.entries.filter(

            entry => entry.type === type

        );

    }

    clear() {

        this.entries = [];

    }

}
