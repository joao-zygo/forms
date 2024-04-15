// Função para ordenar os valores em ordem decrescente
function ordenarDecrescente(valores) {
  for (let i = 0; i < valores.length; i++) {
    for (let j = i + 1; j < valores.length; j++) {
      if (valores[i] < valores[j]) {
        const aux = valores[i];
        valores[i] = valores[j];
        valores[j] = aux;
      }
    }
  }
  return valores;
}

// Solicitar os valores do usuário
const valores = [];
for (let i = 0; i < 4; i++) {
  const valor = parseInt(prompt(`Digite o valor ${i + 1}: `));
  valores.push(valor);
}

// Ordenar os valores em ordem decrescente
const valoresOrdenados = ordenarDecrescente(valores);

// Mostrar os valores ordenados
document.write("Valores em ordem decrescente: <br>");
for (const valor of valoresOrdenados) {
  document.write(`${valor} <br>`);
}
