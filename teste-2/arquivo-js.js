function isFibonacci(number) {
    let a = 0;
    let b = 1;
    while (b < number) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === number;
}
function main() {
    let numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "));
    if (isFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
        alert(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
        alert(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }
}
main();