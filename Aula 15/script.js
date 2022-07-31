// typeof

// let m = 2;

// // console.log( typeof m);

// if( typeof m === 'number') {
//     console.log(`O dado informado é um number ${m}`);
// } else {
//     console.log(`O dado informado não é um number: ${m} : ${typeof m}`);
// }


// DOM

window.onload = function(){ 
    const botao = document.getElementById('btn');
    const txtBox = document.querySelector('#txtBox');
    const caixa = document.querySelector('#caixa');


    // console.log(botao);
    // botao.addEventListener('click', function(){
    //     caixa.innerHTML += ' ' + txtBox.value + ' '; 


// resposta do exercício na aula 16.
    function tabuada(numero){

        let tabuada=0;
        if (typeof numero !== 'number') {
            alert("Digite um valor numérico válido")
        } else {
            if (numero < 1 || numero >10 ){
                alert("Digite um valor entre 1 e 10")
            } else {
                console.log(`Tabuada do ${numero}`);
                while(tabuada <= 10) {

                    console.log(botao);
                    botao.addEventListener('click', function(){
                    caixa.innerHTML += (`${numero} x ${txtBox.value} = ${numero * txtBox.value}`);
                        txtBox.value ++;;
                    })
                      
                }
            }
        }
    } 
             
}


