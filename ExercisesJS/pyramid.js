function draw_pyramid(n) {
  let row = 1;
  let row_l = 2 * n - 1;
  const mid = Math.floor(row_l / 2);

  while (row <= n) {
    let low = mid - row;
    let high = mid + row;
    let line = "";
    while (line.length < row_l) {
      if (line.length <= low || line.length >= high) {
        line += " ";
      } else {
        line += "#";
      }
    }
    console.log(line, line.length);
    row += 1;
  }
}

