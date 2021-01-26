
function criarTarefa(){
    let tarefa  = pegarTarefa()
    if(tarefa !== "" && tarefa !== " "){
      adicionarNovaTarefa(tarefa)
    }else{
      alertarUsuario("Preencha o campo corretamente!")
    }
  }

  


//   **********************************************************/
// //FUNÇÕES AUXILIARES//
// /**********************************************************/

//SELECIONANDO ELEMENTOS NO HTML
const campoTextoTarefa = document.getElementById('campo-texto-tarefa');
const botaoSubmitTarefa = document.getElementById('botao-submit-tarefa');
const listaTarefas = document.getElementById("lista-tarefas");

//FUNÇÃO QU ELIMPA O CAMPO TODOAS AS VEZES QUE É ADICIONADO UMA TAREFA
function limparCampoTexto(){
  campoTextoTarefa.value = '';
}

//FUNÇÃO QUE PEGA A TAREFA DO CAMPO, APÓS CLIQUE NO BOTÃO
function pegarTarefa(){
  const tarefa = campoTextoTarefa.value;

  //LIMPA O CAMPO
  limparCampoTexto()
  return tarefa;
}

// FUNÇÃO QUE CRIA ELEMENTOS (HTML) -  DEPOIS ADICIONA A TAREFA
function adicionarNovaTarefa(taskTitle){
  document.querySelector("small").classList.remove("show")

  const li = document.createElement("li")
  li.id = "1"

  const label = document.createElement("label")
  const input = document.createElement("input")
  input.type = "checkbox"
  input.id   = "check-task"
  input.name = "task"
  const span  = document.createElement("span")
  span.id = "task-title"
  span.innerText = taskTitle
  label.appendChild(input)
  label.appendChild(span)
  li.appendChild(label)
  listaTarefas.appendChild(li)

}

//IDENTIFICANDO CLIQUE NO BOTÃO DO - ADD
botaoSubmitTarefa.addEventListener('click', criarTarefa);

//FUNÇÃO QUE ALERTA O USÚARIO 
function alertarUsuario(messagem){
  document.querySelector("small").classList.add("show")
  document.querySelector("small").innerText = messagem
}

//INDENTIFICANDO CLIQUE NA TECLA ENTER NO TECLADO
document.addEventListener('keydown', event => {
  if(event.key === 'Enter'){

    //EXECUTA FUNÇÃO QUE CRIA A TAREFA
    criarTarefa();
  }
});