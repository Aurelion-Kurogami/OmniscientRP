export class PackManager {

    constructor(loader) {

        this.loader = loader;

    }

    async load(name) {

        const files = [

            "attributes",
            "characters",
            "coins",
            "constellations",
            "dokkaebis",
            "exclusive_skills",
            "incarnations",
            "items",
            "manifest",
            "monsters",
            "nebulae",
            "organizations",
            "outer_gods",
            "places",
            "probability",
            "rules",
            "scenarios",
            "search_index",
            "stigmas",
            "stories",
            "timeline"

        ];

        const pack = {};

        for (const file of files) {

            const response = await fetch(
                `packs/${name}/${file}.json`
            );

            pack[file] = await response.json();

        }

        return pack;

    }

}
