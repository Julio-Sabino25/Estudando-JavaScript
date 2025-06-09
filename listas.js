/*lista.splice(indice, quantidade retirada , novo item,)*/

/*Variaveis Globais*/
let lista= []
let opcao=0

/*funçoes-simples*/
function incluir_inicio(lista){
  let tarefa = prompt("qual tarefa deseja adicionar?")
  lista.splice(0,0,tarefa)
  return lista 
};

function incluir_final(lista){
  let tarefa = prompt("qual tarefa deseja adicionar?")
  lista.splice(lista.length,0,tarefa)
  return lista
};

function mostrar(lista){
  lista.forEach((element,index) => {
  console.log(`${index+1} - ${element}`)})
};

function mensagem_erro(){
  console.log("opção inválida")
};

function quantidade_itens_adicionar(){
  let itens=parseInt(prompt("quantos itens serão inclusos?"))
  if (Number.isInteger(itens)){
    return itens
  }else{
    mensagem_erro()
    return 0
  }
  
};

function zerar_lista(lista){
  let confirma = parseInt(prompt("você realmente deseja zerar a lista?"))
  if(confirma=1){
    console.log("Lista zerada com sucesso!")
    lista.splice(0,lista.length)
    return lista
    }else{
    console.log("lista sem alterações...")
    return lista
    }
};

function retirar_itens(lista){
  let sai = parseInt(prompt("qual o indice(numero) da tarefa que você deseja retirar?"))
  sai=sai-1
  lista.splice(sai,1)
  return lista
};

function trocar_itens(lista){
  let sai = parseInt(prompt("qual o indice(numero) da tarefa que você deseja retirar?"))
  let entra = prompt("qual item que deseja colocar no lugar?")
  sai=sai-1
  lista.splice(sai,1,entra)
  return lista
};

function menu(){
  opcao=parseInt(prompt("qual a ação deseja realizar?\n1-incluir a lista;\n2-retirar da lista;\n3-limpar lista;\n4-mostrar lista;\n5-modificar item da lista;\n6-Sair."))
  return opcao
};


/*funçoes-logicas*/

function log_incluir_inicio(lista){
   let qtd=quantidade_itens_adicionar()
   for(let i=0;i<qtd;i++){
      incluir_inicio(lista)
  }
  mostrar(lista)
  return lista 
};

function log_incluir_final(lista) {
   let qtd=quantidade_itens_adicionar()
   for(let i=0;i< qtd;i++){
      incluir_final(lista)
  }
  mostrar(lista)
  return lista 
};

function posicao(lista){
  let localidade= parseInt(prompt("onde você deseja incluir esse item?\n1-inicio\n2-final"))
  switch(localidade){
    case 1:{
      log_incluir_inicio(lista)
    break;
      }
    case 2:{
      log_incluir_final(lista)
    break;
      }
    default:{
      mensagem_erro()
      }
    
  }
};


/*programa*/
while(opcao!=6){
  opcao=menu()
  switch(opcao){
      case 1:{
        posicao(lista)
        break;
      }
      case 2:{
        retirar_itens(lista)
        break;
      }
      case 3:{
        zerar_lista(lista)
        break;
      }
      case 4:{
        mostrar(lista)
        break;
      }
      case 5:{
        trocar_itens(lista)
        break;
      }
      case 6:{
        console.log("encerrando...")
        break;
      }
      default:{
      mensagem_erro()
      }
  }
};