export default function cleanSet(set, startString) {
  const stringArray = [];

  if (startString.length === 0) {
    return '';
  }
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      stringArray.push(value.slice(startString.length));
    }
  });

  return stringArray.join('-');
}
