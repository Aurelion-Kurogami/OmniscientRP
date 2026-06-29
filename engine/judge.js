class JudgeEngine {

    constructor() {
        this.errors = [];
    }

    addError(error) {
        this.errors.push(error);
    }

    clear() {
        this.errors = [];
    }

    hasErrors() {
        return this.errors.length > 0;
    }

    getErrors() {
        return this.errors;
    }

}

const JUDGE = new JudgeEngine();
