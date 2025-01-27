function isFibonacci(num) {
    var a = 0;
    var b = 1;
    if (num === a || num === b) {
        return "O n\u00FAmero ".concat(num, " pertence \u00E0 sequ\u00EAncia de Fibonacci.");
    }
    var next = a + b;
    while (next <= num) {
        if (next === num) {
            return "O n\u00FAmero ".concat(num, " pertence \u00E0 sequ\u00EAncia de Fibonacci.");
        }
        a = b;
        b = next;
        next = a + b;
    }
    return "O n\u00FAmero ".concat(num, " N\u00C3O pertence \u00E0 sequ\u00EAncia de Fibonacci.");
}
var number = 2584;
var numberTwo = 328;
console.log(isFibonacci(number));
console.log(isFibonacci(numberTwo));
