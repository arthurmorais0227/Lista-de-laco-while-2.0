let soma = 1;
let quantidadeTentativas = 0;
let numerossomados = 0;

while (soma <= 30) {
    soma += numerossomados;
    numerossomados++;
    quantidadeTentativas++;
    console.log(`${soma} + ${numerossomados} = ${soma + numerossomados}. Foram utilizados ${quantidadeTentativas} números.`);
}
console.log(`Soma final: ${soma + numerossomados}.`);