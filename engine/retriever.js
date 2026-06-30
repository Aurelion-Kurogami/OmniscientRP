import { search } from "./search.js";

export function retrieve(pack, keyword) {
  const matches = search(pack, keyword);

  if (!matches.length) return null;

  const result = {};

  for (const match of matches) {
    const list = pack[match.file];

    if (!Array.isArray(list)) continue;

    const found = list.find(x => x.id === match.id);

    if (found) {
      result[match.file] ??= [];
      result[match.file].push(found);
    }
  }

  return result;
}
