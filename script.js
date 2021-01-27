let colecaoTarefas = [];
function criarTarefa(){
    let tarefa  = pegarTarefa()
    if(tarefa !== "" && tarefa !== " "){
      adicionarNovaTarefa(tarefa)
    }else{
      alertarUsuario("Preencha o campo corretamente!")
    }
  }
