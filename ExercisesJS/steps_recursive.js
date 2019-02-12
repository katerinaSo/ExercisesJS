function steps(n, row = 0, line = "") {
  // base case
  if (row === n) {
    return;
  }
  if (line.length === n) {
    console.log(line);
    return steps(n, row + 1, (line = ""));
  }
  line.length <= row ? (line += "#") : (line += " ");
  steps(n, row, line);
}

