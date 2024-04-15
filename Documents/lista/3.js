// Função para calcular o saldo de um mês
function calcularSaldo(ganhoBruto, gastos) {
  return ganhoBruto - gastos;
}

// Função para verificar se há lucro ou prejuízo
function verificarLucroPrejuizo(saldoAnual) {
  if (saldoAnual > 0) {
    return "Lucro";
  } else if (saldoAnual < 0) {
    return "Prejuízo";
  } else {
    return "Empate";
  }
}

// Armazenar os valores mensais em arrays
const ganhoBrutoMensal = [];
const gastosMensais = [];

// Solicitar os valores para cada mês
for (let i = 0; i < 12; i++) {
  const mes = i + 1; // Converter de 0 a 11 para 1 a 12
  const ganhoBruto = parseFloat(prompt(`Informe o ganho bruto do mês ${mes}: `));
  const gastos = parseFloat(prompt(`Informe os gastos do mês ${mes}: `));

  ganhoBrutoMensal.push(ganhoBruto);
  gastosMensais.push(gastos);
}

// Calcular o ganho bruto anual, o gasto anual e o saldo anual
let ganhoBrutoAnual = 0;
let gastoAnual = 0;
let saldoAnual = 0;

for (let i = 0; i < 12; i++) {
  ganhoBrutoAnual += ganhoBrutoMensal[i];
  gastoAnual += gastosMensais[i];
  saldoAnual += calcularSaldo(ganhoBrutoMensal[i], gastosMensais[i]);
}

// Apresentar os resultados
document.write("---------------------------------- <br>");
document.write("Balanço Financeiro Anual da Mawer <br>");
document.write("---------------------------------- <br>");
document.write(`Ganho bruto anual: R$ ${ganhoBrutoAnual.toFixed(2)} <br>`);
document.write(`Gasto anual: R$ ${gastoAnual.toFixed(2)} <br>`);
document.write(`Saldo financeiro anual: R$ ${saldoAnual.toFixed(2)} <br>`);
document.write(`Resultado: ${verificarLucroPrejuizo(saldoAnual)} <br>`);
document.write("---------------------------------- <br>");
