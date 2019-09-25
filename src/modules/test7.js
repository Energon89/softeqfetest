function genAlphabetArray() {
  const arr = [];
  let i = 65;
  const j = 90;
  for (i; i <= j; ++i) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}
console.log(genAlphabetArray());
