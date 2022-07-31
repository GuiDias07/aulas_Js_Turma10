// match() => o método match procuma uma letra/palavra em uma string.

// let nome = "Guilherme Gonçalves Dias";

// console.log( nome.match ('D') );

// search() => procura pela ocorrência, retornando a posição na cadeia da String

// let nome = "Guilherme Gonçalves Dias";
// console.log(nome.search(/G/));
// console.log(nome[0]);

//replace => esse método substitui uma string por outra.

// let str = 'lorem ipsum dolor sit amet consectetur elit'

// let outraStr = str.replace(/dolor/gi, 'doritos');

// console.log(outraStr);

// localcompare => Compara uma string com outra, se for igual retorna a mensagem 0, diferente 1.

// let str1 = "gato";

// let str2 = "gado";

// console.log(str1.localeCompare(str2));

//toString () => converte qualquer valor em uma string.

// let num = Number('1');

// console.log(num.toString());

//toLowerCase() => Faz a conversão de uma string inteira para caractéres minúsculos (Caixa Baixa).

// let str = 'Lorem, Ipsum Dolor Sit Amet consectetur adipisicing elit. Illum, excepturi minima dolorum'; 

// console.log(str.toLowerCase());

//toUpperCase => Faz a conversão de uma string inteira para caractéres maiúsculos (Caixa Alta)

// let str = 'Lorem, Ipsum Dolor Sit Amet consectetur adipisicing elit. Illum, excepturi minima dolorum'; 

// console.log(str.toUpperCase());

//trim() => faz a remoção de espaços antes e depois da string especificada.

// let str1 = "        Lorem, Ipsum Dolor Sit Amet consectetur adipisicing elit. Illum, excepturi         ";

// console.log(str1.trim());

// let str2 = '        Lorem, Ipsum Dolor Sit Amet consectetur adipisicing elit. Illum, excepturi'         ;
// console.log(str2);

//NaN => esse erro aparece quando o sistema percebe que o código que está tentando ser impresso
// não é um número (Not a Number).

// let num = Number("t");

// console.log(num);


// if(isNaN(num)) {
//     console.log("esse não é um número");
// } else {
//     console.log("esse é um número");
//}

// toFixed analisa o valor flutuante e retorna uma string conforme foi definido para o parãmetro de casas.

// let valor = 2.568958

// console.log(valor.toFixed(3));

//toLocaleString() essa função irá representar uma string com padrões monetários, de acordo com
// a origem que foi definido.

// let valor = 2.568958
// console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

//exercicio 12

let desafio12 = "Guilherme Gonçalves Dias"

console.log("A quantidade de caractéres é " + desafio12.length);
console.log(desafio12.toUpperCase());
console.log(desafio12.match(/o/gi));
console.log(desafio12.replace(/Gonçalves/gi, 'Donald'));
