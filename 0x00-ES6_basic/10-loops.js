export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const key of array.keys()) {
    newArray.push(appendString + array[key]);
  }

  return newArray;
}
