var botaoAdicionar = document.querySelector("#buscar-encomendas");

botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomendas_web");
    xhr.addEventListener("load", function () {
       //Verifia se a conexão foi feita com sucesso
       var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var encomendas = JSON.parse(resposta);
            encomendas.forEach(function (encomenda) {
                adicionaEncomendaNaTabela(encomenda)
            });
        } else {
            //Deu erro, exibe o código e a mensagem de erro no console
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");//fica visivel, poque tira a classe q deve estar relacionado com o bootstrap 
        }
        // if(xhr.DONE){
        //     console.log("foi finalizada");
        //     console.log(xhr.DONE);
        //     erroAjax.classList.remove("invisivel");

        // console.log(encomendas);
        // console.log(typeof encomendas); // coretorna o datatype do arquirvo puxado
        // console.log(xhr.responseText);//retorna os valores em "Texto"
    });
    xhr.send();
})