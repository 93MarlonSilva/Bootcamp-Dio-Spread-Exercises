//filter

const car = {modelo: 'Corola', cor: 'Prata', ano: 2019, quantidade: 2};
const nums = [1, 2];
const saldo = [300];
const lista = [5, 10, 15, 20];
const cars = [
    {
        modelo: 'Mustang',
        ano: 2020,
        preco: 250,
    },
    {
        modelo: 'uno',
        ano: 2010,
        preco: 20,
    },
];


function somaNumeros(arr) {        //soma todos numeros do array
   return arr.reduce(function(prev, current){
       console.log({prev});
       console.log({current});
        return prev + current});
}
console.log('Total: ' + somaNumeros(nums));


function subtraiPreco(saldoInicial, valores){   //subtrai valor de um array com um valor inicial.
    console.log('Saldo Inicial: ' + saldoInicial);
    return valores.reduce(function(prev, current) {
    console.log('Saldo: ' + prev);
    console.log(current);
    return prev - current.preco;
  }, saldoInicial);
};

console.log('Saldo Final: ' + subtraiPreco(saldo, cars));