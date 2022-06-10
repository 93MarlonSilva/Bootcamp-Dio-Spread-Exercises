
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



function filtraPares(arr) {         //função para filtrar pares do array
    return arr.filter(function(item) {
        return item % 2 === 0});
 }
 
 console.log('Os numeros pares são: ' + filtraPares(nums));
 
 
 function filterPares(arr){        //função filtrar pares com callback
     return arr.filter(callback);
 }
 
 function callback(item) {
     return item % 2 === 0;
 }
 
 console.log(filterPares(nums));