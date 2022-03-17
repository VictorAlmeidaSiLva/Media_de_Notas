const prompt = require(`prompt-sync`)();
console.log (`****************************`)
console.log ("")
console.log(`Calculando a media de um aluno`)
console.log ("")
console.log (`*****************************`)

var nota1 = +prompt("Digite a primeira nota:");
var nota2 = +prompt("Digite a segunda nota:");

function calculomedia(nota1, nota2) {
    let nota12 = nota1 + nota2;
    let totalnota = nota12 / 2;

    if (totalnota == 10) {
        console.log(`Parabéns você tirou a nota maxima 10`)
    }
    else if (nota1 > 10 || nota2 > 10) {
        console.log(`Digite numeros validos`)
    }

    else if (totalnota < 7) {
        console.log(`Você foi reprovado com ${totalnota}`)
    }
    else if (totalnota >= 7) {
        console.log(`Você foi aprovado com ${totalnota}`)
    }



};

calculomedia(nota1, nota2)