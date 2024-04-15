// Função para mostrar o preço do picolé
function mostrarPrecoPicole(sabor) {
  switch (sabor.toLowerCase()) {
    case "a":
    case "chocolate":
      document.write(`O preço do picolé de chocolate é R$ 1,50.<br>`);
      break;
    case "b":
    case "morango":
      document.write(`O preço do picolé de morango é R$ 2,50.<br>`);
      break;
    case "c":
    case "creme":
      document.write(`O preço do picolé de creme é R$ 2,50.<br>`);
      break;
    case "d":
    case "manga":
      document.write(`O preço do picolé de manga é R$ 3,20.<br>`);
      break;
    case "e":
    case "melancia":
      document.write(`O preço do picolé de melancia é R$ 3,40.<br>`);
      break;
    case "f":
    case "vanilla ice":
      document.write(`O preço do picolé Vanilla Ice é R$ 3,00.<br>`);
      break;
    case "g":
    case "céu azul":
      document.write(`O preço do picolé Céu Azul é R$ 3,60.<br>`);
      break;
    case "h":
    case "brownie":
      document.write(`O preço do picolé Brownie é R$ 4,00.<br>`);
      break;
    case "i":
    case "hawaiano":
      document.write(`O preço do picolé Hawaiano é R$ 5,00.<br>`);
      break;
    default:
      document.write("Sabor inválido. Por favor, escolha entre as opções disponíveis.<br>");
  }
}

// Solicitar o sabor do picolé
const saborEscolhido = prompt("Escolha o sabor do picolé (a/chocolate, b/morango, c/creme, d/manga, e/melancia, f/vanilla ice, g/céu azul, h/brownie, i/hawaiano): ").toLowerCase();

// Mostrar o preço do sabor selecionado
mostrarPrecoPicole(saborEscolhido);
