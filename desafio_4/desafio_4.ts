const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

function calcularPercentuais(faturamento: { [key: string]: number }): { [key: string]: string } {
  let totalFaturamento = 0;

  for (const estado in faturamento) {
    totalFaturamento += faturamento[estado];
  }

  console.log(`Total de faturamento: R$ ${totalFaturamento.toFixed(2)}`); 

  const percentuais: { [key: string]: string } = {};

  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / totalFaturamento) * 100;
    percentuais[estado] = percentual.toFixed(2) + '%'; 
  }

  return percentuais;
}

const percentuais = calcularPercentuais(faturamentoEstados);

console.log('Percentual de representação de cada estado:');
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado]}`);
}
