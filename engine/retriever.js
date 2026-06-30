class Retriever {

    findCharacter(id) {

        const characters = DB.get("characters");

        return characters.find(character => character.id === id) || null;

    }

    retrieve(searchResult) {

        if (!searchResult)
            return null;

        switch (searchResult.type) {

            case "character":
                return this.findCharacter(searchResult.id);

            default:
                return null;

        }

    }

}

const RETRIEVER = new Retriever();
