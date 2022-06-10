const alunos = [
    {
        nome: 'Sofia',
        nota: 8,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 4,
        turma: '2C',
    },
    {
        nome: 'Marlon',
        nota: 10,
        turma: 'Dio',
    },
    ];

function alunosAprovados(arr, media){
    let aprovados = [];
    for(let i = 0; i < arr.length; i++){
        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(' ' + nome);
        }
    }

    return 'Os alunos aprovados foram: ' + aprovados;
}


console.log(alunosAprovados(alunos, 5));
