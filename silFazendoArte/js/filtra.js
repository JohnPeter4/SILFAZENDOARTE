var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var clientes = document.querySelectorAll(".cliente");
        console.log(campoFiltro);
        for (var i = 0; i < clientes.length; i++) {
            var cliente = clientes[i];
            var tdNome = cliente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //Busca com expressões regulares do JS
            var expressao = new RegExp(this.value,"i");
            //Outra forma - Da esquerda para Direita apenas
            var form2 = this.value.toLowerCase();
            var MaisculoN = nome.toLowerCase();

            if(form2 == MaisculoN.substring(0,form2.length) || this.value.length == 0){
                cliente.classList.remove("invisivel"); 
            }
            else{
                cliente.classList.add("invisivel");
            }
            //console.log(nome.substring(0,nome.length));

            
            //console.log(this.value);
            // if (!expressao.test(nome)){
            //     //remove linhas
            //     cliente.classList.add("invisivel");
            
            // } else if (this.value.length == 0 || this.value == nome) {
            //     //se for igual a nada não remove
            //     cliente.classList.remove("invisivel");
            // }
        }
    
    // } else {
    //     for (var i = 0; i < clientes.length; i++) {
    //         var cliente = clientes[i];
    //         cliente.classList.remove("invisivel");
    //     }
    // }
})