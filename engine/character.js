class CharacterEngine {

    constructor() {
        this.loadedCharacters = [];
    }

    load(character) {
        this.loadedCharacters.push(character);
    }

    clear() {
        this.loadedCharacters = [];
    }

    all() {
        return this.loadedCharacters;
    }

}

const CHARACTER = new CharacterEngine();
