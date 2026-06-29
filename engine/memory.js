class MemoryEngine {

    constructor() {
        this.memories = [];
    }

    add(memory) {
        memory.time = Date.now();
        this.memories.push(memory);
    }

    all() {
        return this.memories;
    }

    search(keyword) {

        return this.memories.filter(memory => {

            return JSON.stringify(memory)
                .toLowerCase()
                .includes(keyword.toLowerCase());

        });

    }

    clear() {
        this.memories = [];
    }

}

const MEMORY = new MemoryEngine();
