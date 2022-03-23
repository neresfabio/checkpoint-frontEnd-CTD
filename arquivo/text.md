//pega os valores do formulário
    let imagem = form.imagem.value;
    let nome= form.nome.value;
    let sobre= form.sobre.value;
//cria elementos da página
    let cardDiv = document.createElement("div");
    cardDiv.classList.add(item);
    let imagemDiv = document.createElement("img");
    let tituloImagemDiv = document.createElement("h2");
    let sobreDiv = document.createElement("p");
    //seleciona o container

    imagemDiv.src = imagem;
    imagemDiv.setAttribute("src",imagem);
    tituloImagemDiv.innerHTML = nome;
    sobreDiv.innerHTML = sobre;

//coloca as informações do formulário no itensDoCard
    cardDiv.appendChild(imagemDiv);
    cardDiv.appendChild(tituloImagemDiv);
    cardDiv.appendChild(sobreDiv);

    container[2].appendChild(cardDiv);
function teste(){
  return document.querySelector
}

/*
//verifica se os campos estão vazios
function campoVazio(input) {
  if (input === "") {
    return alert("Campo não preenchido!");
  }
}

// Função auxiliar para selecionar os id
function selectId(id) {
  return document.getElementById(id);
}

//Pegando os valores do campo
let form = selectId("dados-form");
let linkImagem = selectId("imgUrl");
let title = selectId("title-form");
let descricao = selectId("desc-form");

//Monitora o formulário
form.addEventListener("submit", function (event) {

  event.preventDefault();

  if (campoVazio(linkImagem)) {
    return alert("Campo não preenchido!");
  }
  if (campoVazio(title)) {
    return alert("Campo não preenchido!");
  }
  if (campoVazio(descricao)) {
    return alert("Campo não preenchido!");
  }

});

let listaDeEstudo = selectId("listaDeEstudo"); 
*/