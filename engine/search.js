class SearchEngine {

    search(keyword) {

        keyword = keyword.toLowerCase();

        const index = DB.get("search_index");

        return index.filter(entry =>
            entry.keywords.some(k =>
                k.toLowerCase().includes(keyword)
            )
        );

    }

}

const SEARCH = new SearchEngine();
