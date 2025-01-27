function isFibonacci(num: number): string {
  let a = 0;
  let b = 1;

  if (num === a || num === b) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  let next = a + b;
  while (next <= num) {
    if (next === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
    a = b;
    b = next;
    next = a + b;
  }

  return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

var number = 2584;
var numberTwo = 328;
console.log(isFibonacci(number));
console.log(isFibonacci(numberTwo));
