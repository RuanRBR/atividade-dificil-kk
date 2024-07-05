function calcularMedia(nota1, nota2, nota3) {
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
    return media;
}

const nota1 = 7.5;
const nota2 = 8.0;
const nota3 = 6.5;

const mediaFinal = calcularMedia(nota1, nota2, nota3);

console.log(`A média das notas é: ${mediaFinal.toFixed(2)}`);