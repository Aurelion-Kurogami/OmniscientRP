export function search(pack, keyword) {
  if (!pack || !pack.searchIndex) return [];

  keyword = keyword.toLowerCase();

  return pack.searchIndex.filter(entry =>
    entry.name.toLowerCase().includes(keyword) ||
    (entry.aliases || []).some(alias =>
      alias.toLowerCase().includes(keyword)
    )
  );
}
