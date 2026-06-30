class EventEngine {

    constructor() {

        this.events = [];

    }

    trigger(event) {

        this.events.push(event);

    }

    active() {

        return this.events;

    }

    clear() {

        this.events = [];

    }

}

const EVENTS = new EventEngine();
