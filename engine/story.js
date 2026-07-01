class StoryEngine {

    constructor() {

        this.activeStories = [];

    }

    equip(story) {

        if (!this.activeStories.find(

            value => value.id === story.id

        )) {

            this.activeStories.push(story);

        }

    }

    unequip(id) {

        this.activeStories = this.activeStories.filter(

            story => story.id !== id

        );

    }

    active() {

        return [...this.activeStories];

    }

    has(id) {

        return this.activeStories.some(

            story => story.id === id

        );

    }

    clear() {

        this.activeStories = [];

    }

}

const STORY = new StoryEngine();
