export default function cleanSet(set, startString) {
  const stringArray = [];

  if (startString.length === 0 || startString === undefined) {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      stringArray.push(value.slice(startString.length));
    }
  });

  return stringArray.join('-');
}
