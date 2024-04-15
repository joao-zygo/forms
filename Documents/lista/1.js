function somarNumeros() {
    let soma = 0;
    let continuar = true;
    // Estou usando let para trabalhar valores no bloco de funcção.
    // Loop para solicitar os números até que o usuário decida parar
    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrar):"));
        // Verifica se o usuário digitou um número válido
        //isNaN utilizamos para saber se o número está vazio.
        if (!isNaN(numero)) {
            // fiquei atento para !
            soma += numero;
        } else {
            alert("Por favor, digite um número válido.");
        }
        // Pergunta ao usuário se deseja continuar
        continuar = confirm("Deseja adicionar mais números?");
        
    }
    // Exibe o resultado da soma
    alert("A soma dos números é: " + soma);
    // de uma olhadinha na tag alert
}
// Chama a função para iniciar o processo de soma somarNumeros();
somarNumeros();