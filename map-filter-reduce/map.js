
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

//map
function mapComThis(arr, thisArg){  //função com map e this 
    return arr.map(function(item){ 
        return item * this.quantidade;
    }, thisArg);
};

console.log(mapComThis(nums, car));

function mapSemThis(arr){          //função com map sem o this
   return arr.map(function(item) {
       return item * 2});
}

console.log(mapSemThis(nums));
