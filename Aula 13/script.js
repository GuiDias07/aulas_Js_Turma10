// let v = 3;

// for( i = 0; i<= 10; i++) {
//    console.log(`O número de iterações é ${i} e o número da variável v é ${v++}`);
// }

// let herois = [
//    {
//       identidadeSecreta: "Steven Roger",
//       heroi: "Capitão América",
//    },
//    {
//       identidadeSecreta:  "Tony Stark",
//       heroi: "Homem de Ferro",
//    }
// ];

// herois.push({identidadeSecreta: "Powder", heroi: "Jinx"});

// for( let marvel of herois) {
//    for (let m in marvel) {
//       console.log(`${m} -> ${marvel[m]}`);
//    }
// }

//EXERCÍCIO 14

let frutas = [
   {
      nome: "Kiwi",
      preço: "5.50",
   },
   {
      nome: "Maça",
      preço: "3.50",
   },
   {
      nome: "Uva",
      preço: "8.50",
   },
]
 
   function listaFrutas(f){
for( let propriedades of f) {
   for( let p in propriedades) {
      console.log(` ${p} -> ${propriedades[p]}`);
      
   }
 }
}

listaFrutas(frutas);