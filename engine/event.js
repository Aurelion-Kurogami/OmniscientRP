export class EventManager {

    constructor() {
        this.events = [];
    }

    add(event) {

        this.events.push({
            ...event,
            created: Date.now()
        });

    }

    active() {
        return [...this.events];
    }

    clear() {
        this.events = [];
    }

    remove(id) {

        this.events = this.events.filter(
            event => event.id !== id
        );

    }

}
