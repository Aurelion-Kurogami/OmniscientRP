export class EventEngine {

    constructor() {

        this.events = [];

    }

    emit(type, payload = {}) {

        const event = {

            id: crypto.randomUUID(),

            type,

            payload,

            created: Date.now()

        };

        this.events.push(event);

        return event;

    }

    latest(type = null) {

        if (!type) {

            return this.events.at(-1) || null;

        }

        for (let i = this.events.length - 1; i >= 0; i--) {

            if (this.events[i].type === type) {

                return this.events[i];

            }

        }

        return null;

    }

    all() {

        return [...this.events];

    }

    clear() {

        this.events = [];

    }

}
