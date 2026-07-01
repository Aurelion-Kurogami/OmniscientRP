window.OMNISCIENT_RP = {

    version: "0.1.0-alpha",

    initialized: false,

    init() {

        console.log("=== OmniscientRP Alpha ===");

        console.log("Initializing...");

        this.initialized = true;

        console.log("Ready.");

    },

    feature(name) {

        alert(name + " is coming soon!");

    }

};

window.addEventListener("load", () => {

    window.OMNISCIENT_RP.init();

});
