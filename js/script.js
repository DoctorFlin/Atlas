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

// Destacar o link ativo no menu
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.classList.add("active");
        }
    });
});
