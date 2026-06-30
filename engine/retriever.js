class Retriever {

    retrieve(result) {

        if (!result)
            return null;

        switch (result.type) {

            case "character":
                return CHARACTER.get(result.id);

            default:
                return null;

        }

    }

}

const RETRIEVER = new Retriever();
