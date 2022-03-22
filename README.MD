# CHECKPOINT I

## Modelo teste

Refatorando modelo "A Familia dos Felinos" da atividade A5S.

## Atividade

Olá Houser, tudo bem com você?

Esta atividade tem como objetivo servir como primeiro instrumento avaliativo da disciplina. Se atente às instruções e boa avaliação. O entregável será uma página em HTML5, CSS3 e Javascript seguindo os conteúdos ministrados até aqui.

**Instruções e requisitos do entregável**

1. O tema da aplicação é de sua preferência. Pode ser sobre carros, animes, cidades, etc.

2. A aplicação deve ser responsiva.

3. A aplicação consiste em um formulário que, ao ser preenchido, cria cards com as informações preenchidas.

4. Sobre o formulário:

    a. O formulário deve ter pelo menos 4 campos: Título, Descrição e URL da imagem e um botão de submit.
    b. Após o preenchimento, ao clicar no botão de submit, as informações devem ser adicionadas à lista de cards na página.

    Dica
    - Você pode acrescentar outros campos ao formulário para deixar a aplicação mais completa.

5. Sobre os Cards:
    a.  Os cards devem ter uma imagem e constar todas as informações previamente preenchidas no formulário.
    b. O comportamento se dará de forma que as informações preenchidas sejam exibidas na seção de cards.

# Lógica

- [ ] Capturar os valores de entrada do usuário.
___
        var elemenTitle = document.getElemetById('title');
        var elemenDescription = document.getElemetById('description');
        var elemenURL = document.getElemetById('url');
___
- [ ] Trabalhar com Array?
___
        var listaDeEstudos = [ ]
___
- [ ] Ou criar uma função para listar os cards?
___
        listarCardsCriados()
___
- [ ] Criar função do butão cadastrar
___
        adicioanrCardEstudo()
___
# Métodos

.innerHTML (Ler ou Modificar conteudo)
.innerText (Ler ou Modificar texto)
Propriedades style (Ler e Sobrescrever as regras CSS)
createElement()
createTextNode()
appendChild()
hasAttribute()
getAttribute()
setAttribute()
removeAttribute()
