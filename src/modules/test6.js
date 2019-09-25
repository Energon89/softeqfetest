const regex = new RegExp("(?=.*\\b[S|s]ofteq\\b)(?=.*#\\brules\\b).*", "g");
const text1 = "Softeq cool company. The company has its own #rules.";
const text2 = "Write a regular expression to match strings containing both.";
const text3 = "Our #rules are simple - 'Softeq'";
const text4 = "Our rules are simple - 'Softeq'";

function checkText(text, regex) {
  return regex.test(text);
}

console.log(text1, checkText(text1, regex));
console.log(text2, checkText(text2, regex));
console.log(text3, checkText(text3, regex));
console.log(text4, checkText(text4, regex));
