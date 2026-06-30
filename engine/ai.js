import { Loader } from "./loader.js";
import { buildPrompt } from "./prompt.js";

export class AIEngine {

  constructor(provider) {
    this.provider = provider;
    this.loader = new Loader();
    this.pack = null;
  }

  async initialize(packName) {
    this.pack = await this.loader.initialize(packName);
  }

  async reply(messages, settings = {}) {

    if (!this.pack)
      throw new Error("Pack not loaded.");

    const prompt = buildPrompt(
      this.pack,
      messages,
      settings
    );

    return await this.provider.generate(prompt);
  }

}
