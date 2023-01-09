console.log("mostrarVideos.js carregado.");
import { conectaApi } from "./conectaApi.js";

const listaVideos = document.querySelector('[data-lista="lista"');

export default function constroiCard(url, imagem, titulo, descricao) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>

        <div class="descricao-video">
            <img src="${imagem}" alt="Texto alternativo não fornecido, desculpe...">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `;
    return video;
}

async function listaVideo() {
    try {
        // Essa é a lista JSON dos videos
        const listaApi = await conectaApi.listaVideos();
        // Para cada item JSON, executar um appendChild
        listaApi.videos.forEach(ele => {
            listaVideos.appendChild(constroiCard(ele.url, ele.imagem, ele.titulo, ele.descricao));
        });
    } catch {
        listaVideos.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de videos...</h2>`
    }
}
listaVideo();
videoAltura();