var numeros;
do {numeros = prompt ("Digite um numero entre 1 e 10;");
    } while ( numeros < 1 || numeros > 10);
console.log(`Você digitou o numero ${numeros}.`);