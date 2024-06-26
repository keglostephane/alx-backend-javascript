export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }

  map.forEach((value, key) => {
    if (map.get(key) === 1) {
      map.set(key, 100);
    }
  });
}
