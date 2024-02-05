function fatorial(num) {
  let fat = num;
  if (num % 1 != 0) return gamma(num + 1);
  if (num == 0 || num == 1) return 1;

  for (let i = num - 1; i >= 1; i--) {
    fat *= i;
    if (fat == Infinity) return Infinity;
  }

  return fat;
}


console.log(eval("Math.sqrt((Math.pow(Math.cos(30)),2))"));
