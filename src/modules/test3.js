// Test 3
// Find all children of the container HTML element in the following template using native
// JavaScript functionality.
// <div class="container">
//   <div>A</div>
//   <div>B</div>
//   <div>C</div>
// </div>;
const test3 = document.querySelectorAll(".container *").forEach(elem => {
  elem.classList.add("textblue");
});
