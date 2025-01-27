function inverterString(str) {
    var resultado = '';
    for (var i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}
var minhaString = "Inverter essa string";
var stringInvertida = inverterString(minhaString);
console.log("String original: ".concat(minhaString));
console.log("String invertida: ".concat(stringInvertida));
