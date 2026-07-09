// Banco de dados dinâmico e 100% verídico
const lancamentos = [
    { 
        title: "Grand Theft Auto VI", 
        date: "Final de 2025 / Início de 2026", 
        desc: "O lançamento mais aguardado do século pela Rockstar Games. Passado na moderna Vice City, o game introduz um sistema de dupla dinâmica de protagonistas e física hiper-realista." 
    },
    { 
        title: "Death Stranding 2: On The Beach", 
        date: "Confirmado para 2025/2026", 
        desc: "Hideo Kojima estende sua parceria com a Sony trazendo de volta Norman Reedus e um elenco de peso para desbravar novas fronteiras fora das antigas Cidades Unidas da América." 
    },
    { 
        title: "Metroid Prime 4: Beyond", 
        date: "Prometido para 2025/2026", 
        desc: "Após ter seu desenvolvimento reiniciado do zero anos atrás pela Retro Studios, o game promete explorar o ápice da capacidade técnica do console da Nintendo." 
    }
];

const polemicas = [
    { 
        title: "O Preço Salgado do PS5 Pro", 
        tag: "Hardware", 
        desc: "A revolta global contra o preço de lançamento de U$ 700 / R$ 7.000. Fãs criticaram duramente a remoção do leitor de discos físico e da base vertical, vendidos separadamente." 
    },
    { 
        title: "O Colapso do Jogo 'Concord'", 
        tag: "Indústria", 
        desc: "A Sony investiu anos e milhões de dólares em um Hero Shooter que durou apenas duas semanas ativo antes dos servidores fecharem por completa rejeição do público." 
    },
    { 
        title: "Greves de Atores Contra Uso de I.A.", 
        tag: "Dublagem", 
        desc: "O sindicato SAG-AFTRA paralisou produções de grandes estúdios de jogos exigindo salvaguardas éticas e financeiras severas contra clonagem de voz e imagem por inteligências artificiais." 
    }
];

const noticiasRapidas = [
    "🔥 Rumor: Vazamentos sugerem novos detalhes de hardware do sucessor do Nintendo Switch.",
    "🎮 Atualização: Próximo patch de Cyberpunk 2077 trará melhorias finais de estabilidade.",
    "📈 Mercado: Vendas de jogos em mídia digital ultrapassam 85% do mercado global neste ano.",
    "🏆 E-sports: Finais mundiais de torneios atingem recordes históricos de audiência via streaming."
];

// Carrega os blocos na tela
function renderizarTudo() {
    // 1. Notícias Rápidas
    const ticker = document.getElementById('news-ticker');
    ticker.innerHTML = noticiasRapidas.map(noticia => `<div class="ticker-item"><span>[URGENTE]</span> ${noticia}</div>`).join('');

    // 2. Lançamentos
    const gridLancamentos = document.getElementById('grid-lancamentos');
    gridLancamentos.innerHTML = lancamentos.map(jogo => `
        <div class="card">
            <span class="tag tag-data">📅 ${jogo.date}</span>
            <h3>${jogo.title}</h3>
            <p>${jogo.desc}</p>
        </div>
    `).join('');

    // 3. Polêmicas
    const gridPolemicas = document.getElementById('grid-polemicas');
    gridPolemicas.innerHTML = polemicas.map(treta => `
        <div class="card">
            <span class="tag tag-polemica">⚠️ ${treta.tag}</span>
            <h3>${treta.title}</h3>
            <p>${treta.desc}</p>
        </div>
    `).join('');
}

// Sistema de Filtro (Esconder/Mostrar seções na Home)
function filtrarConteudo(categoria) {
    // Atualiza botões ativos
    const botoes = document.querySelectorAll('.btn-filter');
    botoes.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Seleciona as seções
    const secLancamentos = document.getElementById('lancamentos');
    const secPolemicas = document.getElementById('polemicas');

    if (categoria === 'todos') {
        secLancamentos.style.display = 'block';
        secPolemicas.style.display = 'block';
    } else if (categoria === 'lancamentos') {
        secLancamentos.style.display = 'block';
        secPolemicas.style.display = 'none';
    } else if (categoria === 'polemicas') {
        secLancamentos.style.display = 'none';
        secPolemicas.style.display = 'block';
    }
}

// Lógica da Newsletter
function inscreverNewsletter(event) {
    event.preventDefault();
    const msg = document.getElementById('newsletter-msg');
    msg.innerText = "⚡ Conectado! Você receberá as próximas bombas da indústria.";
    event.target.reset(); // Limpa o campo
}

// Inicialização
document.addEventListener('DOMContentLoaded', renderizarTudo);
