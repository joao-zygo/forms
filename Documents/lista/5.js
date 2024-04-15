function inverterParidade(numero) {
  // Verificar se o número é par
  const par = numero % 2 === 0;

  // Inverter a paridade
  if (par) {
    numero += 1; // Se for par, adicionar 1 para torná-lo ímpar
  } else {
    numero -= 1; // Se for ímpar, subtrair 1 para torná-lo par
  }

  return numero;
}

// Solicitar o número do usuário
const numeroUsuario = parseInt(prompt("Digite um número: "));

// Inverter a paridade e mostrar o resultado
const numeroInvertido = inverterParidade(numeroUsuario);
document.write(`Número original: ${numeroUsuario}<br>`);
document.write(`Número com paridade invertida: ${numeroInvertido}<br>`);
