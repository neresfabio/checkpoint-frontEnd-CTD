// Função auxiliar para selecionar os id
function selectId(id) {
  return document.getElementById(id);
}

//Pegando os valores do campo
let linkImagem = selectId("imgUrl");
let title = selectId("title-form");
let descricao = selectId("desc-form");

let salvar = selectId("salvar");

salvar.addEventListener("click", function (event) {
  event.preventDefault();
  insereNaLista(linkImagem, title, descricao);
});

function insereNaLista(linkImagem, title, descricao) {
  // Criando o elemento item
  const item = `<div class="item">
  <img src="${linkImagem.value}"/>
  <h2>${title.value}</h2>
  <p>${descricao.value}</p>
  </div>`;
  //Pegando o destino
  const listaDeEstudo = selectId("listaDeEstudo");
  listaDeEstudo.innerHTML = listaDeEstudo.innerHTML + item;
}
