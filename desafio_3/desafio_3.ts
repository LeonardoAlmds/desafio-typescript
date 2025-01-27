import * as fs from 'fs';

interface Faturamento {
  dia: number;
  valor: number;
}

const calcularFaturamento = (dados: Faturamento[]) => {
  const faturamentoDiario = dados.filter(faturamento => faturamento.valor >= 0);

  const menorFaturamento = Math.min(...faturamentoDiario.map(f => f.valor));

  const maiorFaturamento = Math.max(...faturamentoDiario.map(f => f.valor));

  const somaFaturamento = faturamentoDiario.reduce((acc, curr) => acc + curr.valor, 0);
  const mediaFaturamento = somaFaturamento / faturamentoDiario.length;

  const diasAcimaMedia = faturamentoDiario.filter(f => f.valor > mediaFaturamento).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaMedia,
    mediaFaturamento
  };
};

fs.readFile('faturamento.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  const dadosFaturamento: Faturamento[] = JSON.parse(data);
  const resultado = calcularFaturamento(dadosFaturamento);

  console.log(`Menor Faturamento: R$ ${resultado.menorFaturamento}`);
  console.log(`Maior Faturamento: R$ ${resultado.maiorFaturamento}`);
  console.log(`Média de Faturamento: R$ ${resultado.mediaFaturamento.toFixed(2)}`);
  console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaMedia}`);
});
