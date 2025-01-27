function inverterString(str: string): string {
  let resultado = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];  
  }
  return resultado;
}

var minhaString = "Inverter essa string";
var stringInvertida = inverterString(minhaString);

console.log(`String original: ${minhaString}`);
console.log(`String invertida: ${stringInvertida}`);
