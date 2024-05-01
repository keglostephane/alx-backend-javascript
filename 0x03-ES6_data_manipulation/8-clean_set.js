export default function cleanSet(set, startString) {
  const stringArray = [];

  set.forEach((value) => {
    if (value.startsWith(startString) && startString !== '') {
      stringArray.push(value.slice(startString.length));
    }
  });

  return stringArray.join('-');
}
