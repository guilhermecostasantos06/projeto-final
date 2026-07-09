// Dados simulados (Simulando um banco de dados de jogos)
const lancamentos = [
    { title: "GTA VI", date: "Outono de 2025", desc: "O jogo mais aguardado da década finalmente ganhou janela de lançamento oficial pela Rockstar." },
    { title: "Metroid Prime 4: Beyond", date: "Em algum momento de 2025", desc: "Após anos de silêncio, a Nintendo finalmente mostrou a gameplay do retorno de Samus Aran." },
    { title: "Monster Hunter Wilds", date: "28 de Fevereiro de 2025", desc: "A Capcom promete revolucionar os ecossistemas vivos e a caça de monstros gigantes na nova geração." }
];

const polemicas = [
    { title: "Preço dos Consoles", tag: "Indústria", desc: "A discussão sobre o aumento abusivo no preço de hardwares de meio de geração e jogos base custando 70 dólares lá fora." },
    { title: "Uso de I.A. na Dublagem", tag: "Sindicato", desc: "Estúdios grandes começam a testar ferramentas de inteligência artificial para vozes de NPCs secundários, gerando revolta nos dubladores." },
    { title: "Microtransações em Jogos Singleplayer", tag: "Comunidade", desc: "Empresas continuam forçando lojas de itens cosméticos e facilitadores dentro de jogos que não são online." }
];

// Função para renderizar os lançamentos
function carregarLancamentos() {
    const gridLancamentos = document.getElementById('grid-lancamentos');
    
    lancamentos.forEach(jogo => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="tag tag-data">📅 ${jogo.date}</span>
            <h3>${jogo.title}</h3>
            <p>${jogo.desc}</p>
        `;
        gridLancamentos.appendChild(card);
    });
}

// Função para renderizar as polêmicas
function carregarPolemicas() {
    const gridPolemicas = document.getElementById('grid-polemicas');
    
    polemicas.forEach(treta => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="tag tag-polemica">⚠️ ${treta.tag}</span>
            <h3>${treta.title}</h3>
            <p>${treta.desc}</p>
        `;
        gridPolemicas.appendChild(card);
    });
}

// Executa as funções assim que a página carrega
document.addEventListener('DOMContentLoaded', () => {
    carregarLancamentos();
    carregarPolemicas();
});
