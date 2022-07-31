 // Crie uma função para verificar se um número é maior que o outro.

//  function verificaNumeroMaior(num1, num2) {

//     if( num1 > num2){
//     console.log(" O número "+num1+" é maior que o número "+num2)

//     } else {
//     console.log(" O número "+num1+" é menor que o número "+num2);  
//     }
//     }

//     verificaNumeroMaior(1,3);

// //function

// function teste(){
//     let nome = "Guilherme";
//     return nome;
// }

// console.log(teste());

//Arrow function
// let msg = (nome) => { return nome};

// console.log( msg("Cleide") );

// Autoexecutáveis

// (function(produto,preço){
//     alert("O produto é " +produto+" e o preço é de R$ "+preço);
// })("Bolacha", 2.50);


let v1 = prompt("Digite o valor 1");
let v2 = prompt("Digite o valor 2");

const soma = (valor1, valor2)=> {
    let resultado = Number(valor1) + Number(valor2);
    console.log(resultado);
}

soma(v1,v2);


