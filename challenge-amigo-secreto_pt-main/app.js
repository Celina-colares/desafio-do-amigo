let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nome);

    input.value = '';

    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos 1 amigo para sortear.');
        return;
    }

    let amigoIndex = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigoIndex];
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    listaResultado.appendChild(li);
}
