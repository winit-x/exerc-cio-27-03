const pesos = [2, 3, 4, 1, 2];
const notas = [8, 7, 9, 6, 8];


let somaPonderada = 0;
for (let i = 0; i < pesos.length; i++) {
    somaPonderada += pesos[i] * notas[i];
}


const pesoTotal = pesos.reduce((acc, curr) => acc + curr, 0);


const mediaPonderada = somaPonderada / pesoTotal;

console.log(`A média ponderada das 5 avaliações é: ${mediaPonderada.toFixed(2)}`);