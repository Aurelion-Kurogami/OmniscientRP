export class EventEngine {

    constructor() {

        this.events = [];

    }

    emit(type, payload = {}) {

        this.events.push({

            type,

            payload,

            time: Date.now()

        });

    }

    latest(type) {

        for (let i = this.events.length - 1; i >= 0; i--) {

            if (this.events[i].type === type) {

                return this.events[i];

            }

        }

        return null;

    }

    history() {

        return [...this.events];

    }

    clear() {

        this.events = [];

    }

}
