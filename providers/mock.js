export class MockProvider {

    async generate(prompt) {

        console.log("Mock Prompt:", prompt);

        return {

            role: "assistant",

            content: "This is a mock AI response. OpenRouter is not connected yet."

        };

    }

}
