function spiral_martrix(n) {
  let result = [];
  let col_start = 0;
  let row_start = 0;
  let col_end = n - 1;
  let row_end = n - 1;
  let value_generator = 1;

  // populate result array with proper sizes of empty arrays
  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  // while loop containing four loops, one for each direction:
  // RIGHT,DOWN,LEFT,UP

  while (col_start <= col_end && row_start <= row_end) {
    // loop for going RIGHT and placing incrementing values starting from 1.
    for (let i = col_start; i <= col_end; i++) {
      result[row_start][i] = value_generator;
      value_generator += 1;
    }

    // moving row down (increasing the number) once we populated the previous row
    row_start += 1;

    // loop for going DOWN continue placing incrementing by 1 values into result
    for (let i = row_start; i <= row_end; i++) {
      result[i][col_end] = value_generator;
      value_generator += 1;
    }

    // moving column to the left since we already populated the previous column
    col_end -= 1;

    // loop for going LEFT continue placing values 
    for (let i = col_end; i >= col_start; i--) {
      result[row_end][i] = value_generator;
      value_generator += 1;
    }

    // moving end row up because we already populated the previous row
    row_end -= 1;

    // loop for going UP and continue placing values
    for (let i = row_end; i >= row_start; i--) {
      result[i][col_start] = value_generator;
      value_generator += 1;
    }

    // moving first column to the right since we have populated it with values in a previous loop
    col_start += 1;
  }

  return result;
}
spiral_martrix(6);
