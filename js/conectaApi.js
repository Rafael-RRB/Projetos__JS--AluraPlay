console.log("conectaAPI.js carregado.");
const hamburgerMenu = document.querySelector('[data-cabecalho="menu"');
const submenu = document.querySelector('[data-cabecalho="submenu"');
hamburgerMenu.addEventListener("click", event => {
    if(submenu.classList.contains("js__flex")) {
        submenu.classList.remove("js__flex");
    } else {
        submenu.classList.add("js__flex");
    }
});


// A palavra "async" antes de "function" significa que a função retornará uma "promise".
// Um "promise" é um objeto que representa o sucesso ou falha de uma operação assíncrona.
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o video...");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(busca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${busca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo,
}

/*
    Obs: json.server --watch db.json
*/