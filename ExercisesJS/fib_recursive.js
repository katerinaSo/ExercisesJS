function fib(arr, n) {
  arr[0] = 0;
  arr[1] = 1;
  if (arr.length === n) {
    return arr;
  }
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fib(arr, n);
}

console.log(fib([],1477))
