console.log("conectaAPI.js carregado.");

// A palavra "async" antes de "function" significa que a função retornará uma "promise".
// Um "promise" é um objeto que representa o sucesso ou falha de uma operação assíncrona.
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    console.log(conexaoConvertida);
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos
}
