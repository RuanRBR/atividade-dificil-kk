function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorio = getRandomIntInclusive(1, 10);
console.log(`Número aleatório entre 1 e 10: ${numeroAleatorio}`);
