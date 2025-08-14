const personagens = [
    { nome: "Alicia Ainsworth", classe: "Paladina", raça: "Ainsworth" },
    { nome: "Max", classe: "Patrulheiro", raça: "Ainsworth" }
];

function listarPersonagens() {
    const lista = document.getElementById("lista-personagens");
    personagens.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.nome} - ${p.classe} (${p.raça})`;
        lista.appendChild(li);
    });
}
