const meuArray = [30, 20, 20, 20, 50, 48, 15, 3045, 2];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));