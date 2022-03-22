// Capitura as informações do formulário

let imge = document.getElementById("campoURL");
let titleCard = document.getElementById("campoTitulo");
let descCard = document.getElementById("campoDecription");

let botaoSalvar = document.getElementById("salvar");

//Funcão
botaoSalvar.addEventListener("click", function (evento) {
  evento.preventDefault();
});

function criaCard(title, desc, img) {
  //new obj
  var elementDivItem = document.createElement("div").classList.add("item");
  var elementImg = document.createElement("img");
  var elementTitleh2 = document.createElement("h2");
  var elementDescriptionP = document.createElement("p");

  //No
  var newTitle = document.createTextNode(document.getElementById(campoTitulo));
  var newDescription = document.createTextNode(
    document.getElementById(campoDecription)
  );

  //adiciona o nó de texto à nova div criada
  elementImg.setAttribute("src", document.getElementById(campoURL));

  elementTitleh2.appendChild(newTitle);

  elementDescriptionP.appendChild(newDescription);

  // adiciona o novo elemento criado e seu conteúdo ao DOM

  elementDivItem;
}
