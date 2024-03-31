function calcularRaizes(a, b, c) {
    
    const discriminante = b ** 2 - 4 * a * c;

    
    if (discriminante > 0) {
        
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [raiz1, raiz2];
    } else if (discriminante === 0) {
        
        const raiz = -b / (2 * a);
        return [raiz];
    } else {
        
        const parteReal = -b / (2 * a);
        const parteImaginaria = Math.sqrt(Math.abs(discriminante)) / (2 * a);
        const raiz1 = `${parteReal} + ${parteImaginaria}i`;
        const raiz2 = `${parteReal} - ${parteImaginaria}i`;
        return [raiz1, raiz2];
    }
}

const a = 1;
const b = -3;
const c = 2;
const raizes = calcularRaizes(a, b, c);

console.log(`As raízes da equação do segundo grau ${a}x^2 + ${b}x + ${c} são:`);
raizes.forEach((raiz, indice) => {
    console.log(`Raiz ${indice + 1}: ${raiz}`);
});