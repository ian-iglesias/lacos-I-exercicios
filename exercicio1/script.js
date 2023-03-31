// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let conta = 0;
let querMais = true;

while (querMais) {
  let resposta = prompt("Deseja comer mais coxinhas? (S/N)");

  if (resposta.toUpperCase() === "S") {
    conta += 2.5; // adiciona R$2.50
  } else if (resposta.toUpperCase() === "N") {
    querMais = false;
    alert(`Valor total da conta: R$${conta.toFixed(2)}.`); // exibe o valor total formatado com duas casas decimais
  }
}
