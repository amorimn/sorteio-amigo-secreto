//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Lista de amigos inseridos
let sorteios = {}; // Objeto que guardará quem tirou quem

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        input.value = ""; // Limpar o campo de entrada

        atualizarListaAmigos();
        habilitarBotaoSorteio();
    }
}

// Função para atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpar lista antes de atualizar

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para habilitar/desabilitar o botão de sorteio
function habilitarBotaoSorteio() {
    const sorteioButton = document.querySelector(".button-draw");
    sorteioButton.disabled = amigos.length < 2; // Habilita só quando houver pelo menos 2 amigos
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos dois amigos para realizar o sorteio!");
        return;
    }

    let amigosRestantes = [...amigos];
    sorteios = {}; // Limpar resultados anteriores

    amigos.forEach(amigo => {
        let amigoSorteado;
        do {
            const index = Math.floor(Math.random() * amigosRestantes.length);
            amigoSorteado = amigosRestantes[index];
        } while (amigoSorteado === amigo); // Garantir que a pessoa não tire a si mesma

        sorteios[amigo] = amigoSorteado;
        amigosRestantes = amigosRestantes.filter(p => p !== amigoSorteado); // Remover da lista de disponíveis
    });

    exibirResultados();
}

// Função para exibir os resultados do sorteio
function exibirResultados() {
    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = ""; // Limpar resultados anteriores

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = `${amigo} tirou ${sorteios[amigo]}`;
        resultadoList.appendChild(li);
    });
}