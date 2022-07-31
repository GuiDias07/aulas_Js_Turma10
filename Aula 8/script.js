// let str = `qualquer conteudo`;

// let str2 = `uma outras string ${str}`;

// console.log(str2);


// //Arrays - uma coleção de dados

// const frutas = ["Uva", "Banana", "Laranja", "Melancia"];

// let euGosto = `Eu gosto de ${frutas[0]}`

// console.log(euGosto);

const Pessoa = [
    "José",
    25,
    "Aposentado",
    1.55,
    cores = ["Azul", "Rosa", "Verde", "Preto"] // array bidimensional.
];

(function(Pessoa){
    const jose = `Meu nome é ${Pessoa[0]}, tenho ${Pessoa[1]}, sou ${Pessoa[2]},
     e tenho ${Pessoa[3]} de altura, sua cor preferida é ${Pessoa[4][1]}`
     document.write( jose);
})(Pessoa);