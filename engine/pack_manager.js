export async function loadPack(name) {
  const base = `packs/${name}`;

  async function read(file) {
    const res = await fetch(`${base}/${file}`);

    if (!res.ok) {
      console.warn(`${file} not found.`);
      return [];
    }

    return await res.json();
  }

  return {
    manifest: await read("manifest.json"),
    searchIndex: await read("search_index.json"),

    characters: await read("characters.json"),
    stories: await read("stories.json"),

    items: await read("items.json"),
    organizations: await read("organizations.json"),
    places: await read("places.json"),

    constellations: await read("constellations.json"),
    exclusiveSkills: await read("exclusive_skills.json"),
    stigmas: await read("stigmas.json"),
    attributes: await read("attributes.json"),

    scenarios: await read("scenarios.json"),
    timeline: await read("timeline.json"),
    rules: await read("rules.json"),

    monsters: await read("monsters.json"),
    dokkaebis: await read("dokkaebis.json"),
    nebulae: await read("nebulae.json"),
    incarnations: await read("incarnations.json"),
    outerGods: await read("outer_gods.json"),
    probability: await read("probability.json"),
    coins: await read("coins.json")
  };
      }
