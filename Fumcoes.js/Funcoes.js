/*function dobrar (num) { valor = num *2;
    return num;
}
var valor = 10;
console.log(dobrar (valor)); //20
console.log(valor); // 10 (valor original não mudou)*/

function saudacao(nome = "visitante") {
    console.log(`Olá, ${nome}!`);
}
saudacao(); // Olá, visitante!
saudacao("Gusttavo"); // Olá, Gusttavo!