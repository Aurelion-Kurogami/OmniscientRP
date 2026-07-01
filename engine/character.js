class CharacterEngine {

    constructor() {

        this.active = [];

    }

    add(character) {

        if (!this.active.includes(character)) {

            this.active.push(character);

        }

    }

    remove(character) {

        this.active = this.active.filter(

            value => value !== character

        );

    }

    has(character) {

        return this.active.includes(character);

    }

    all() {

        return [...this.active];

    }

    clear() {

        this.active = [];

    }

}

const CHARACTER = new CharacterEngine();
