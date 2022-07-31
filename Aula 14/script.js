// while

// let loop = 0;
// let cores = [ "Vermelho", "Verde"];

// while( loop < cores.length) {
    
//     console.log(cores[loop]);
//     loop++;
// }


// Do while

let teste = 0;
do {

    teste = Number(prompt("Digite um valor"));

        switch(teste) {
            case 0: 
                alert("Saindo do sistema");
            break;

            case 1: 
                alert("Cadastrando");
            break;

            case 2: 
                alert("consultando");
            break;
            
            default: 
                alert("Opção inválida");
            break;
        }

} while(teste != 0)