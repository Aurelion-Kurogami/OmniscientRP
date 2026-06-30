export class OpenRouterProvider {

  constructor(apiKey, model) {
    this.apiKey = apiKey;
    this.model = model;
  }

  async generate(prompt) {

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          model: this.model,

          messages: [
            {
              role: "user",
              content: prompt
            }
          ]

        })

      }
    );

    const json = await response.json();

    return json.choices[0].message.content;

  }

}
