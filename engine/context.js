class ContextEngine {

    build(userMessage) {

        return {

            userMessage,

            memory: MEMORY.get(),

            world: WORLD,

            canon: CANON.get(userMessage),

            director: DIRECTOR.update({

                userMessage,

                world: WORLD,

                memory: MEMORY.get()

            })

        };

    }

}

const CONTEXT = new ContextEngine();
