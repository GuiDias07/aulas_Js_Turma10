

let m = '';

    try {
        if(typeof m != 'number') throw new Error("Digite um número");
        if(m < 0) throw new Error("O número não pode ser negativo");
        if(m % 1 != 0 ) throw new Error("Digite um número inteiro");
    }  catch(erro) {
        console.log(`O erro é: ${erro};`)
    } finally {
        console.log("Cheguei no Finally");
    }