var botaoAdicionar = document.querySelector("#buscar-encomendas");

    var dados = [];
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://economia.awesomeapi.com.br/json/last/USD-BRL");
    xhr.addEventListener("load", function () {
       //Verifia se a conexão foi feita com sucesso
       var Unidade = document.querySelector("#Moeda-Atual");
       var MaiorMoeda = document.querySelector("#Maior-Valor");
       var MenorMoeda = document.querySelector("#Menor-Valor");
       var data = document.querySelector("#data-Valor");
       var titulo = document.querySelector("#titulo-grafico");

        if (xhr.status == 200) {
            var resposta = xhr.responseText;//Pega em String
            var i = 0;
            var encomendas = JSON.parse(resposta);//transforma em objetos
            
            console.log(encomendas.USDBRL);
            Unidade.textContent = "UNIDADE: " + encomendas.USDBRL.name;
            MaiorMoeda.textContent = "HIGH: " + encomendas.USDBRL.high;
            MenorMoeda.textContent = "LOW: " + encomendas.USDBRL.low;
            var valores = "Média Atual:  "+(parseFloat(encomendas.USDBRL.high) + parseFloat(encomendas.USDBRL.low))/2;
            data.textContent = "DATA: "+ encomendas.USDBRL.create_date;
            titulo.textContent = valores;
            console.log(encomendas.USDBRL.name);//MOeda
            console.log(encomendas.USDBRL.high);//MAIOR VALOR
            console.log(encomendas.USDBRL.low); //MENOR VALOR
            //console.log(typeof encomendas);
        } else {
            //Deu erro, exibe o código e a mensagem de erro no console
            console.log(xhr.status);
            console.log(xhr.responseText);
            //erroAjax.classList.remove("invisivel");//fica visivel, poque tira a classe q deve estar relacionado com o bootstrap 
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
