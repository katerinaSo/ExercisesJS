function draw_stairway(n, row = 0, line = "") {
  while (row < n) {
    line += "#";
    console.log(line);
    row += 1;
  }
}


