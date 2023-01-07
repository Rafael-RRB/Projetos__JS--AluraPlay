console.log("criarVideo.js carregado.");
import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario="formulario"');

async function criarVideo(event) {
    event.preventDefault();

    const url = document.querySelector('[data-formulario="url"').value;
    const titulo = document.querySelector('[data-formulario="titulo"').value;
    const imagem = document.querySelector('[data-formulario="imagem"').value;
    const descricao = Math.floor(Math.random() * 99).toString();

    console.log(url);
    console.log(titulo);
    console.log(imagem);
    console.log(descricao);
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
        window.location.href = "../pages/envio-concluido.html";
    } catch(e) {
        alert(e);
    }
}

formulario.addEventListener("submit", event => criarVideo(event));

/*
    url: https://www.youtube.com/embed/QNYT9wVwQ8A
    titulo: Miki Matsubara: Stay with Me
    imagem: https://img.youtube.com/vi/QNYT9wVwQ8A/maxresdefault.jpg
*/