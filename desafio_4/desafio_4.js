var faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};
function calcularPercentuais(faturamento) {
    var totalFaturamento = 0;
    for (var estado in faturamento) {
        totalFaturamento += faturamento[estado];
    }
    console.log("Total de faturamento: R$ ".concat(totalFaturamento.toFixed(2)));
    var percentuais = {};
    for (var estado in faturamento) {
        var percentual = (faturamento[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual.toFixed(2) + '%';
    }
    return percentuais;
}
var percentuais = calcularPercentuais(faturamentoEstados);
console.log('Percentual de representação de cada estado:');
for (var estado in percentuais) {
    console.log("".concat(estado, ": ").concat(percentuais[estado]));
}
