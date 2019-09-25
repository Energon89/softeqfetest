//Test 2

document.querySelector(".btnTest2").addEventListener("click", printNumbers);
document.querySelector(".clearClg").addEventListener("click", () => {
  console.clear();
});

function printNumbers() {
  for (let i = 1; i <= 99; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
      console.log("OpenSource");
    } else if (i % 7 === 0) {
      console.log("Source");
    } else if (i % 3 === 0) {
      console.log("Open");
    } else console.log(i);
  }
}
