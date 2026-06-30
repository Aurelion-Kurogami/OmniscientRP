class JudgeEngine {

    constructor() {
        this.errors = [];
    }

    check(reply) {

        this.errors = [];

        return true;

    }

    getErrors() {
        return this.errors;
    }

}

const JUDGE = new JudgeEngine();
