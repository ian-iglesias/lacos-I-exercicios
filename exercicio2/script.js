// # Exercício 2

// Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.


const numero = parseInt(prompt("Digite um número: "));

// Itera de 1 a 10 e imprime a tabuada do número fornecido
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}

