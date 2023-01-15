// aniamção do container 3 - fazendo os texto sumir e só aparecer ao ser selecionado 

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

/////// ------------------------------------------------------------------------------------------///////////- 

// aniamção do container 3 - fazendo os texto sumir e só aparecer ao ser selecionado 

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