function calcularAreaTrapezio(base1, base2, altura) {
    return ((base1 + base2) * altura) / 2;
}

function calcularAreaLosango(diagonal1, diagonal2) {
    return (diagonal1 * diagonal2) / 2;
}


function calcularAreaRetangulo(comprimento, largura) {
    return comprimento * largura;
}

const base1 = 10; 
const base2 = 6; 
const altura = 4; 
const diagonal1 = 8; 
const diagonal2 = 6; 
const comprimento = 12; 
const largura = 8; 

const areaTrapezio = calcularAreaTrapezio(base1, base2, altura);
const areaLosango = calcularAreaLosango(diagonal1, diagonal2);
const areaRetangulo = calcularAreaRetangulo(comprimento, largura);

console.log(`Área do trapézio: ${areaTrapezio}`);
console.log(`Área do losango: ${areaLosango}`);
console.log(`Área do retângulo: ${areaRetangulo}`);


if (areaTrapezio > areaLosango && areaTrapezio > areaRetangulo) {
    console.log("O trapézio tem a maior área.");
} else if (areaLosango > areaRetangulo) {
    console.log("O losango tem a maior área.");
} else {
    console.log("O retângulo tem a maior área.");
}