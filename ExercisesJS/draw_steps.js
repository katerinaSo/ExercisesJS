function draw_steps(n) {
  // n lines with n characters each line
  // returning drawing of lines in a console
  // return array of strings representing each line for steps
  steps = [];
  for (let line = 0; line < n; line++) {
    steps[line] = [];
    for (let place = 0; place < n; place++) {
      place <= line ? (steps[line][place] = "#") : (steps[line][place] = " ");
    }
    steps[line] = steps[line].join("");
    console.log(steps[line]);
  }
  return steps;
}

