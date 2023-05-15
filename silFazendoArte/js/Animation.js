function Animacao() {
    let id = 0;
    const elem = document.getElementById("graf");   
    let pos = 0;
    var flag = false;
    if( elem.style.marginLeft <= "0px"){//comparação precisa ser em px
      id = setInterval(frame, 5);
    }else{//Virá pra cá assim que o frame já esta em execução
      //console.log("Executado");
      console.log(elem.style.marginLeft);
    }
      
    
    function frame() {
      //console.log(elem.style.marginLeft);
      if (flag && pos >= 0) {
        pos--;
        elem.style.marginLeft = pos + "px"; 
      } else if (!flag){
        if(pos == 800){
            flag = true;
        }
        pos++;
        elem.style.marginLeft = pos + "px"; 
      } else if( pos <0){ // precisa limpar o intervalo, funciona igual o return para evitar que o código continue a ser executado
       //console.log("fui executado");
       clearInterval(id);
      }
      }
    }
