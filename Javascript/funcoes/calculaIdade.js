const pessoa1 = {
        nome: 'Ana',
        idade: 16,
    };

const pessoa2 = {
        nome: 'João',
        idade: 25,
    };

const pessoa3 = {
        nome: 'Lucia',
        idade: 33,
    };

function calculaIDade(anos){
 
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de vida.`;
}

console.log(calculaIDade.call(pessoa1, 25));
console.log(calculaIDade.apply(pessoa1, [25]));