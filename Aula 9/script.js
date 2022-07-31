//concat() => Junta dois ou mais Arrays

// let nomes= ["Samanta", "Guilherme", "Millena", "Jorge", "Tiago"];
// let nomes2=["Claudio", "Nanci", "Cleide", "Paulo", "Ronaldo"];

// let todosOsNomes = nomes.concat(nomes2);
// console.log(nomes);
// console.log(nomes2);
// console.log(todosOsNomes);

// let qtdArrayNome = `O array nomes possui ${nomes.length} elementos`;
// console.log(qtdArrayNome);

//indexoff() => Procura um determinado elemento de um array, retorna uma posição
// let nomes= ["Samanta", "Guilherme", "Millena", "Jorge", "Tiago"];   

// console.log(nomes.indexOf("Millena"));

// let buscaNome= "Tiago";

// if(nomes.indexOf(buscaNome) != (-1)) {
//     document.write(`Eu encontrei o  nome ${buscaNome} e está na posição ${nomes.indexOf(buscaNome)}`);

// } else {
//     alert(`Não encontrei o nome ${buscaNome}`);
// }

// Join => transforma elementos de um array em string

// let nomes= ["Samanta", "Guilherme", "Millena", "Jorge", "Tiago"];

// console.log(nomes);
// console.log(nomes.join());

//push => inseri elementos no fim do array

// let frutas = [];

// frutas.push("Maça");

// console.log(frutas);

// pop => remove o ultimo elemento de um array

// let frutas = ["Goiaba", "Melancia", "Laranja"]

// frutas.pop();

// console.log(frutas);

// reverse => inverte a ordem dos elementos de um array

// let nomes= ["Samanta", "Guilherme", "Millena", "Jorge", "Tiago"];

// nomes.reverse();

// console.log(nomes);

// console.log(nomes[1]);

// shift => remove o primeiro elemento de um array

// let nomes= ["Samanta", "Guilherme", "Millena", "Jorge", "Tiago"];

// nomes.shift();

// console.log(nomes);

// sort => Ordena os elementos de um array em ordem crescente ( mais focado no alfabeto)

// let numeros = [ 200, 500, 1 , 3, 1000];

// numeros.sort;

// console.log(numeros);

// let palavras = [ 'Andar', 'Andarilho', 'Amar', ' Avião', 'Abobora'];

// palavras.sort();

// console.log(palavras);

// toString => Converte um array em uma string e retorna uma string

// let frutas = ["Goiaba", "Melancia", "Laranja", "Nevascaranga"];

// console.log( frutas.toString());

// unshift =>  Insere um elemento no inicio do Array

// splice => Corta ou remove um ou uma sequencia de elemtnos de um array

// let frutas = ["Goiaba", "Melancia", "Laranja"]

// let indice = frutas.indexOf("Laranja");
// let novaLista = frutas.splice(indice,1);

// console.log (frutas);

//exercicio 10 - funções]

// function valorImc(nome, altura, peso){

// a = Number(altura);
// p = Number(peso);

// valorImc = p / (a*2);

// console.log(" Nome..", nome);
// console.log("Altura..", altura);
// console.log("Peso", peso  )
// console.log(" IMC ", valorImc);

// }

// nomePessoa=prompt("Digite seu nome")
// pesoPessoa=prompt("Digite seu peso");
// alturaPessoa=prompt("Digite sua altura");

// valorImc=(nomePessoa, pesoPessoa, alturaPessoa);

// Exercício 11 - Arrays

let lista = ["Guilherme", "Millão", "Mariana", "Cleber", "Heitor"];

lista.push("Norberto");
lista.push("Ruan");

console.log(lista);

buscaNome="Mariana";

if(lista.indexOf(buscaNome) != (-1)) {
        document.write(`Eu encontrei o  nome ${buscaNome} e está na posição ${lista.indexOf(buscaNome)}`);
    
    } else {
        alert(`Não encontrei o nome ${buscaNome}`);
    }

