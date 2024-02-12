let listaNumeros = [];

let numLimit = 10

let btn = document.querySelector('.container__botao');

let dica = document.querySelector('#dica');

let numeroAleatorio = gerarNumeroAleatorio();

let reiniciar =  document.getElementById('reiniciar')

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);

    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}
let tentativas = 1;


function gerarNumeroAleatorio(){
   numeroEscolhido = parseInt(Math.random() * numLimit + 1);
   quantidadeNumNaLista = listaNumeros.length

   if(listaNumeros == 10){
    listaNumeros = []
   }

   if(listaNumeros.includes(numeroEscolhido)){

        return gerarNumeroAleatorio();

   }
   else{
        listaNumeros.push(numeroEscolhido)
    
        return numeroEscolhido;
   }
}


exibirTextoNaTela('#titulo', 'Jodo do número Secreto');

exibirTextoNaTela('.texto__paragrafo','Digite um número de 1 a 10');

function verificarChute(){
    let input = document.querySelector('.container__input').value;

    
    if(input == numeroAleatorio){
       exibirTextoNaTela('h1','Você Acertou!!');
       
        let palavraTentativas = tentativas > 1? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        reiniciar.removeAttribute('disabled');
        exibirTextoNaTela('p', mensagemTentativas);
    
    }

    else if(input > numeroAleatorio){
        limparcampo()
        exibirTextoNaTela('h1','Digite um número menor');
    }
    else if(input < numeroAleatorio){
        limparcampo()
        exibirTextoNaTela('h1','Digite um número maior');
        
    }
    tentativas ++;

    function limparcampo(){
         input = document.querySelector('.container__input');
         input.value =''
    }

    reiniciar.addEventListener('click',()=>{
        exibirTextoNaTela('#titulo', 'Jodo do número Secreto');
        numeroAleatorio = gerarNumeroAleatorio()
        exibirTextoNaTela('.texto__paragrafo','Digite um número de 1 a 10');    
        limparcampo()
        tentativas = 1
        reiniciar.setAttribute('disabled', true)
    })
    

}


btn.addEventListener('click', ()=>{
      verificarChute()
})


