import { loadPack } from "./pack_manager.js";

export class Loader {
  constructor() {
    this.currentPack = null;
  }

  async initialize(packName) {
    this.currentPack = await loadPack(packName);
    return this.currentPack;
  }

  getPack() {
    return this.currentPack;
  }
}
