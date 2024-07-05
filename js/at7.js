function contarPalavrasUnicas(frase) {
   
    const palavras = frase.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().split(" ");
    
    // Armazenar
    const palavrasUnicas = {};
    
    // Adiciona ao objeto
    for (const palavra of palavras) {
        palavrasUnicas[palavra] = true;
    }
    
    // Retorna
    return Object.keys(palavrasUnicas).length;
}


const minhaFrase = "O homem é o lobo do homem";
const numeroPalavrasUnicas = contarPalavrasUnicas(minhaFrase);
console.log(`Número de palavras únicas na frase: ${numeroPalavrasUnicas}`);
