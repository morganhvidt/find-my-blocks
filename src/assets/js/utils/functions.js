/**
 * Get unique providers from a list of blocks.
 * @param {Array} blocks - The list of blocks.
 * @returns {Array} The unique providers.
 */
export function getUniqueProviders(blocks) {
  return blocks.reduce((uniqueProviders, block) => {
    const provider = block.name.split("/")[0] ?? false;
    if (!uniqueProviders.some((prov) => prov.value === provider)) {
      uniqueProviders.push({ value: provider, label: provider });
    }
    return uniqueProviders;
  }, []);
}
