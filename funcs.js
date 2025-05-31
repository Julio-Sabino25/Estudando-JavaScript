        /*Funções:*/
        function soma(n1,n2){
            let resultado = n1+n2
            return resultado
        };
        function subtracao(n1,n2){
            let resultado = n1-n2
            return resultado
        };
        function multiplicacao(n1,n2){
            let resultado = n1*n2
            return resultado
        };
        function divisao(n1,n2){
            let resultado = n1/n2
            return resultado
        };
        function primeiro(valor){
            let n1 = parseInt(prompt("Digite o primeiro numero: "));
            if(n1 == 0){
                return valor
            }else{
                return n1
            }
        };
        function segundo(){
            let n2 = parseInt(prompt("Digite o segundo numero: "));
            return n2 
        };
        function selecao(){
            let escolha = parseInt(prompt("Qual opção você deseja? \n1-Soma\n2-subtração\n3-multiplcação\n4-divisão\n5-zerar Resultados\n6-sair:\n\n"))
            return escolha
        };


        /*Declaração de Variaveis:*/
        let valor = 0;
        let escolha_retorno = 0;

        /*Sistema Principal*/
       
        while(escolha_retorno != 6){
            switch(selecao()){
                case 1:valor = soma(primeiro(valor),segundo())
                console.log("o resultado foi:",valor)
                break;
                case 2:valor = subtracao(primeiro(valor),segundo())
                console.log("o resultado foi:",valor)
                break;
                case 3:valor = multiplicacao(primeiro(valor),segundo())
                console.log("o resultado foi:",valor)
                break;
                case 4:valor = divisao(primeiro(valor),segundo())
                console.log("o resultado foi:",valor)
                break;  
                case 5:valor = 0
                console.log("o resultado foi:",valor)
                break;  
                case 6:
                escolha_retorno = 6
                console.log("Encerrando...")
                break;  
                default:
                console.log("opção invalida!!")
            };
        };