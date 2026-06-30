class CharacterEngine {

    get(id) {

        const characters = DB.get("characters");

        const data = characters.find(c => c.id === id);

        if (!data)
            return null;

        return ENTITY.create({

            ...data,

            type: "character"

        });

    }

}

const CHARACTER = new CharacterEngine();
