console.log("buscarVideos.js carregado.");
import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const input = document.querySelector('[data-pesquisa="campo"');
const botao = document.querySelector('[data-pesquisa="botao"');

async function buscarVideos(event) {
    event.preventDefault();

    const lista = document.querySelector('[data-lista="lista"');
    // O "while loop" executa enquanto a condição passada é verdadeira.
    // Porém, lista.firstChild não é "verdadeira", por exemplo: (lista.firstChild == true) ====> false
    // Acredito que, então, é implícito um "existe" -- "enquanto" lista.firstChild "existe", execute
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    const campo = input.value;
    const busca = await conectaApi.buscaVideo(campo);

    busca.forEach(ele => {
        lista.appendChild(constroiCard(ele.url, ele.imagem, ele.titulo, ele.descricao));
    });
    
    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Desculpe, mas não existem videos com esse termo...</h2>`;
    }

    // Limpa o campo após pesquisar algo
    input.value = "";
}



// Buscar videos ao pressionar "Enter" com o campo de pesquisa selecionado
input.addEventListener("keypress", event => {
    if(event.key === "Enter") {
        buscarVideos(event);
    }
});
// Buscar videos ao clicar no botão de pesquisa ou pressionar "Enter" com o botão selecionado (tab)
botao.addEventListener("click", event => buscarVideos(event));