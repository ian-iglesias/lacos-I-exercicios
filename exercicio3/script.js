// # Exercício 3

// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

//entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

//saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"

// Criar array com 5 strings
const arrayStrings = ["Maçã", "Banana", "Abacaxi", "Pera", "Laranja"];

// Ordenar o array em ordem alfabética
arrayStrings.sort();

// Percorrer o array e imprimir as strings em formato de ranking
for (let i = 0; i < arrayStrings.length; i++) {
  console.log(`${i + 1}º lugar: ${arrayStrings[i]}`);
}
