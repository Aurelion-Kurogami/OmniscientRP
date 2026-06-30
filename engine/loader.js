class Loader {

    async loadPack(pack) {

        const base = `packs/${pack}`;

        const files = [
            "characters",
            "constellations",
            "exclusive_skills",
            "stories",
            "stigmas",
            "attributes",
            "items",
            "organizations",
            "places",
            "rules",
            "scenarios",
            "timeline",
            "search_index",
            "dokkaebis",
            "nebulae",
            "incarnations",
            "monsters",
            "outer_gods",
            "coins",
            "probability"
        ];

        DB.clear();

        for (const file of files) {

            const response = await fetch(`${base}/${file}.json`);
            const data = await response.json();

            DB.register(file, data);

        }

    }

}

const LOADER = new Loader();
