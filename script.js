// --------------------aniamção do container 3 - fazendo os texto sumir e só aparecer ao ser selecionado---------------- 

function mostrar(){
    for(var i=1;i<7;i++){
     document.getElementById("b"+i).hidden=true; //Oculta as imagens
    }
    var obj=event.target.dataset.nome; //Captura todo o elemento
    document.getElementById(obj).hidden=false; //Oculta o elemento
   }

   function inicia(){
    for(var i=1; i<7; i++){
     document.getElementById("b"+i).hidden=true; //Oculta as imagens
    }

    document.getElementById("btn-html").addEventListener("click",mostrar);
    document.getElementById("btn-css").addEventListener("click",mostrar);
    document.getElementById("btn-js").addEventListener("click",mostrar);
    document.getElementById("btn-node").addEventListener("click",mostrar);
    document.getElementById("btn-react").addEventListener("click",mostrar);
    document.getElementById("btn-mysql").addEventListener("click",mostrar);
   }

   window.addEventListener("load",inicia);


//------------ aniamção do container 3 - fazendo os texto sumir e só aparecer ao ser selecionado (Mobile)-------------- 

function mostrar2(){
    for(var i=1;i<7;i++){
     document.getElementById("h"+i).hidden=true; //Oculta as imagens
    }
    var obj2=event.target.dataset.nome; //Captura todo o elemento
    document.getElementById(obj2).hidden=false; //Oculta o elemento
   }

   function inicia2(){
    for(var i=1; i<7; i++){
     document.getElementById("h"+i).hidden=true; //Oculta as imagens
    }

    document.getElementById("btn-html-mobile").addEventListener("click",mostrar2);
    document.getElementById("btn-css-mobile").addEventListener("click",mostrar2);
    document.getElementById("btn-js-mobile").addEventListener("click",mostrar2);
    document.getElementById("btn-node-mobile").addEventListener("click",mostrar2);
    document.getElementById("btn-react-mobile").addEventListener("click",mostrar2);
    document.getElementById("btn-mysql-mobile").addEventListener("click",mostrar2);
   }

   window.addEventListener("load",inicia2);


//-------------------------- Definindo o Botão de Scroll para o topo da pagina ----------------------------------

window.addEventListener('scroll', function() {
    let scroll = this.document.querySelector('.scrollTop')
        scroll.classList.toggle('active', window.scrollY > 450)
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}



// Definindo a aparição das habilidades do container 4 ao passar o mouse 
function aparecer(){
    for(var i=1;i<3;i++){
     document.getElementById("a"+i).hidden=true; //Oculta as imagens
    }
    var obj3=event.target.dataset.nome; //Captura todo o elemento
    document.getElementById(obj3).style.display = "block"; //Oculta o elemento

   }
   
   function inicia3(){
    for(var i=1; i<3; i++){
     document.getElementById("a"+i).hidden=true; //Oculta as imagens
    }

    document.getElementById("btn-imagemcenter").addEventListener("mouseover",aparecer);
    document.getElementById("btn-whatss").addEventListener("mouseover",aparecer);


    
   }

   window.addEventListener("load",inicia3);