function inverterString(stringOriginal) {
    var stringInvertida = '';

    // Percorre a string original da direita para a esquerda
    for (var i = stringOriginal.length - 1; i >= 0; i--) {
        // Concatena cada caractere na string invertida
        stringInvertida += stringOriginal[i];
    }

    return stringInvertida;
}

// Exemplo de uso:
var stringOriginal = prompt('Digite uma palavra');
var stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);

var stringNormalTexto = document.querySelector('.string-normal')
stringNormalTexto.innerHTML = (stringOriginal)
var stringInvertidaTexto = document.querySelector('.string-invertida')
stringInvertidaTexto.innerHTML = (stringInvertida)