window.onload = function(){
    
    let produtos = [
        {descrição:'Bolacha Mirabel', preço:2.20 },
        {descrição:'Marmelada', preço:3.20 },
        {descrição:'Sabonete', preço:4.20 },
        {descrição:'Pamnonha', preço:12.20 }
    ]


const listaProdutos = document.querySelector("#listaProdutos");
const Total = document.querySelector("#total");
( ()=>{
    let totalzinho = 0;

    for (let pro of produtos){
        const filhoLi = document.createElement('li');

        for (listaP in pro){
            if ( listaP == 'preço') {
                listaProdutos.appendChild(filhoLi).setAttribute('data-preço', pro[listaP]) ;
                totalzinho += pro[listaP];
            } else {
                listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}` 
            }
        
            //console.log(pro[listaP]); 
        }
    }
    Total.value = totalzinho.toFixed(2);
} )( produtos)


}