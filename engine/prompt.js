import { retrieve } from "./retriever.js";

export function buildPrompt(pack, messages, settings = {}) {

  const latest =
    messages.length > 0
      ? messages[messages.length - 1].content
      : "";

  const canon = retrieve(pack, latest);

  let prompt = "";

  prompt += `
You are a roleplay AI.

Follow canon with absolute accuracy.

Never contradict loaded canon.

Never invent abilities.

Characters automatically use their own skills, stigmas,
exclusive skills, attributes and powers whenever the situation
naturally calls for them.

Do not wait for the user to remind you.

NPCs think independently.

The world continues moving even when the user does nothing.

`;

  if (settings.extraRules) {
    prompt += settings.extraRules + "\n\n";
  }

  if (canon) {

    prompt += "=== CANON ===\n";

    prompt += JSON.stringify(canon, null, 2);

    prompt += "\n\n";
  }

  prompt += "=== CHAT ===\n";

  for (const msg of messages) {

    prompt += `${msg.role}: ${msg.content}\n`;

  }

  return prompt;
}
