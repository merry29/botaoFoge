
const pop = document.querySelector(".pop");

let imagemFechada = true

function carregarImagem(){
    
    if(imagemFechada){
        pop.style.display = "flex"
        imagemFechada = false
    }else{
        pop.style.display = "none"
        imagemFechada = true
    }  

}


