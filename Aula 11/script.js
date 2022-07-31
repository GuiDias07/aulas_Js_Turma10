// function Pessoa(nome) {

//     this.nome = nome;

    
// }

// Pessoa.prototype.msg = function(){
//     alert("Olá " + this.nome);
// }

// let novaPessoa = new Pessoa ("Guilherme");
// let outraPessoa = new Pessoa ("Millena");

// novaPessoa.msg();
// console.log(novaPessoa.nome);

// let Pessoa2 = {
//     'nome' : '',
//     'idade' : '',

// }

// Pessoa2.__proto__.msg = function () {
//     alert ("Olá " + this.nome);
// }

// let p = Pessoa2;
// p.nome = "Marcelo";
// p.msg();
// console.log(p);

let Pessoas = [
    {   'nome' : 'Marcelo',
        'idade' : 23,
        'sexo' : 'M',
        'Posição' : 'MID',

    },
    {   'nome' : 'Marta',
        'idade' : 23,
        'sexo' : 'F',
        'Posição' : 'ADC', 
    }, 
    {   'nome' : 'Juarez',
        'idade' : 27,
        'sexo' : 'M',
        'Posição' : 'SUP',   
} ]

let NPessoa = Pessoas;

console.log(`Existem ${Pessoas.length} pessoas cadastradas no banco de dados`); 
console.log(NPessoa [1].nome);

