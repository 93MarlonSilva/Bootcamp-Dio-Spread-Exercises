function comparaNumeros(num1, num2) {
 let soma = num1 + num2;
 let maiorMenor = '';

if (soma < 10){
    maiorMenor = 'que é menor que 10';
}
else if (soma === 10) {
    maiorMenor = 'que é menor que 20';
}
else if ((soma > 10) && (soma < 20)) {
    maiorMenor = 'que é maior que 10 e menor que 20';   
}
else if (soma === 20) {
    maiorMenor = 'que é maior que a 10';
}
else {
    maiorMenor = 'que é maior que 20';
}

if (num1 === num2) {
    console.log(`Os numeros ${num1} e ${num2} são iguais. Sua soma é ${soma}, ${maiorMenor}`);
}

else {
    console.log(`Os numeros ${num1} e ${num2} não são iguais. Sua soma é ${soma}, ${maiorMenor}`);
}
   
}


comparaNumeros(10, 5);

