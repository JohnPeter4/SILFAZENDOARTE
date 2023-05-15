// captura encomendas 
var encomendas = document.querySelectorAll("table");

encomendas.forEach(function(encomenda){
    encomenda.addEventListener("dblclick", function(event){
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
            event.target.parentNode.remove();
        },600);
    });
});