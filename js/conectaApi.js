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
// O arquivo db.json pode ser lido com um fetch.
// Com o json-server aberto, é possível utilizar o localhost -- caso contrário, utilizar o arquivo db.json
let url;
try {
    url = "http://localhost:3000/videos";
    await fetch(url);
} catch {
    url = "../db.json";
}
console.log(url);
// A palavra "async" antes de "function" significa que a função retornará uma "promise".
// Um "promise" é um objeto que representa o sucesso ou falha de uma operação assíncrona.
async function listaVideos() {
    const conexao = await fetch(url);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch(url, {
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
    const conexao = await fetch(`${url}?q=${busca}`);
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