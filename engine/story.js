class StoryEngine {

    constructor() {
        this.currentScene = "";
    }

    setScene(scene) {
        this.currentScene = scene;
    }

    getScene() {
        return this.currentScene;
    }

    clear() {
        this.currentScene = "";
    }

}

const STORY = new StoryEngine();
