console.log("criarVideo.js carregado.");
import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario="formulario"');

async function criarVideo(event) {
    event.preventDefault();

    const url = document.querySelector('[data-formulario="url"').value;
    // Testa o URL do video
    try {
        const urlTeste = new URL(url);
    } catch {
        alert("URL do video inserido não é válido...");
        return;
    }

    const titulo = document.querySelector('[data-formulario="titulo"').value;
    // Testa o título do video
    switch(true) {
        case titulo.length === 0:
            alert("Titulo não foi inserido...");
            return;
        case titulo.length <= 1:
            alert("Titulo muito curto...");
            return;
        case titulo.length > 50:
            alert("Titulo muito longo...");
            return;
    }

    const imagem = document.querySelector('[data-formulario="imagem"').value;
    // Testa o URL da imagem
    try {
        const urlTeste = new URL(imagem);
    } catch(e) {
        alert("URL da imagem inserida não é válida...");
        return;
    }

    const descricao = Math.floor(Math.random() * 99).toString();
    // Cria o video, se tudo der certo
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
        window.location.href = "../pages/envio-concluido.html";
    } catch(e) {
        alert(e);
    }
}

formulario.addEventListener("submit", event => criarVideo(event));

/*  Exemplo:
    url: https://www.youtube.com/embed/QNYT9wVwQ8A
    titulo: Miki Matsubara: Stay with Me
    imagem: https://img.youtube.com/vi/QNYT9wVwQ8A/maxresdefault.jpg

    thumbs: http://img.youtube.com/vi/<insert-youtube-video-id-here>/maxresdefault.jpg
*/