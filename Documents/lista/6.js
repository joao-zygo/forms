function verificarVogalConsoante(letra) {
  // Converter a letra para minúscula para comparação maiúsculas/minúsculas
  const letraMinuscula = letra.toLowerCase();

  // Vogais minúsculas
  const vogais = ["a", "e", "i", "o", "u"];
  const consoante = ["b","c", "d", "f", "g"," h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "w", "z"];
  // Verificar se a letra está no array de vogais
  if (vogais.includes(letraMinuscula) ){
    return "Vogal";
  if (consoante.includes(letraMinuscula) ){
    return "Consoante";
  }
}}


// Solicitar a letra do usuário
const letraUsuario = prompt("Digite uma letra: ");

// Verificar se é vogal ou consoante e mostrar o resultado
const resultado = verificarVogalConsoante(letraUsuario);
document.write(`A letra ${letraUsuario} é uma ${resultado}.<br>`);
