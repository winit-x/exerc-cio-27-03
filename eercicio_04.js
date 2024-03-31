function generateAP(firstTerm, commonDifference, numTerms) {
    const ap = [];
    let currentTerm = firstTerm;

    
    for (let i = 0; i < numTerms; i++) {
        ap.push(currentTerm);
        currentTerm += commonDifference;
    }

    return ap;
}


const firstTerm = 5; 
const commonDifference = 3; 
const numTerms = 10; 

const apResult = generateAP(firstTerm, commonDifference, numTerms);
console.log(`Progressão Aritmética (PA): ${apResult.join(', ')}`);