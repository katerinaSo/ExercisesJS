function reverse_string(str) {
  const string = str
    .split("")
    .reverse()
    .join("");
  return string;
}



reverse_string("hen");

function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character+reversed
  }
  return reversed;
}
reverse('neh')