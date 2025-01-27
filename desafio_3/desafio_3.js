"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var calcularFaturamento = function (dados) {
    var faturamentoDiario = dados.filter(function (faturamento) { return faturamento.valor >= 0; });
    var menorFaturamento = Math.min.apply(Math, faturamentoDiario.map(function (f) { return f.valor; }));
    var maiorFaturamento = Math.max.apply(Math, faturamentoDiario.map(function (f) { return f.valor; }));
    var somaFaturamento = faturamentoDiario.reduce(function (acc, curr) { return acc + curr.valor; }, 0);
    var mediaFaturamento = somaFaturamento / faturamentoDiario.length;
    var diasAcimaMedia = faturamentoDiario.filter(function (f) { return f.valor > mediaFaturamento; }).length;
    return {
        menorFaturamento: menorFaturamento,
        maiorFaturamento: maiorFaturamento,
        diasAcimaMedia: diasAcimaMedia,
        mediaFaturamento: mediaFaturamento
    };
};
fs.readFile('faturamento.json', 'utf8', function (err, data) {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    var dadosFaturamento = JSON.parse(data);
    var resultado = calcularFaturamento(dadosFaturamento);
    console.log("Menor Faturamento: R$ ".concat(resultado.menorFaturamento));
    console.log("Maior Faturamento: R$ ".concat(resultado.maiorFaturamento));
    console.log("M\u00E9dia de Faturamento: R$ ".concat(resultado.mediaFaturamento.toFixed(2)));
    console.log("N\u00FAmero de dias com faturamento acima da m\u00E9dia: ".concat(resultado.diasAcimaMedia));
});
