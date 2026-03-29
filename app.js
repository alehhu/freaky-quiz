/**
 * GAME ENGINE - Freaky Quiz (Mega Pool Edition)
 * Ottimizzato per gestire migliaia di domande.
 */

let gameState = {
    teams: [{ name: "", score: 0 }, { name: "", score: 0 }],
    turn: 0,
    selectedCategories: [], 
    boardQuestions: {}, 
    playedTiles: [],
    draftStep: 0,
    currentQuestion: null,
    isGameStarted: false
};

const LS_KEY = "freaky_quiz_state";

const screens = {
    setup: document.getElementById('screen-setup'),
    board: document.getElementById('screen-board')
};

const dom = {
    teamInputs: [document.getElementById('input-team-a'), document.getElementById('input-team-b')],
    categoryList: document.getElementById('category-list'),
    btnStart: document.getElementById('btn-start-game'),
    draftLabel: document.getElementById('draft-instruction'),
    boardGrid: document.getElementById('board-grid'),
    modal: document.getElementById('modal-question'),
    statTeams: [document.getElementById('stat-team-a'), document.getElementById('stat-team-b')],
    turnLabel: document.getElementById('current-turn-label')
};

function init() {
    loadState();
    if (gameState.isGameStarted) {
        showScreen('board');
        renderBoard();
        updateUI();
    } else {
        showScreen('setup');
        renderDraft();
    }
    bindEvents();
}

function bindEvents() {
    dom.btnStart.onclick = startGame;
    document.getElementById('btn-show-answer').onclick = () => {
        document.getElementById('answer-text').classList.remove('hidden');
        document.getElementById('btn-show-answer').classList.add('hidden');
        document.getElementById('answer-controls').classList.remove('hidden');
    };
    document.getElementById('btn-correct').onclick = () => handleAnswer(true);
    document.getElementById('btn-wrong').onclick = () => handleAnswer(false);
    document.getElementById('btn-reset').onclick = resetGame;
}

function renderDraft() {
    dom.categoryList.innerHTML = "";
    CATEGORIES_POOL.forEach(cat => {
        const div = document.createElement('div');
        div.className = "cat-item";
        // Mostra il numero di domande totali nel pool per curiosità
        div.innerHTML = `<strong>${cat.title}</strong><br><small>${cat.questions.length} domande</small>`;
        if (gameState.selectedCategories.find(c => c.id === cat.id)) div.classList.add('selected');
        div.onclick = () => selectCategory(cat, div);
        dom.categoryList.appendChild(div);
    });
}

function selectCategory(cat, el) {
    if (gameState.selectedCategories.find(c => c.id === cat.id)) return;
    if (gameState.draftStep >= 6) return;

    gameState.selectedCategories.push(cat);
    gameState.draftStep++;
    el.classList.add('selected');

    if (gameState.draftStep < 3) {
        dom.draftLabel.innerText = `Squadra A: Scegli 3 categorie (${gameState.draftStep}/3)`;
    } else if (gameState.draftStep < 6) {
        dom.draftLabel.innerText = `Squadra B: Scegli 3 categorie (${gameState.draftStep - 3}/3)`;
    } else {
        dom.draftLabel.innerText = "Pronti a giocare!";
        dom.btnStart.disabled = false;
    }
    saveState();
}

function startGame() {
    gameState.teams[0].name = dom.teamInputs[0].value || "Squadra A";
    gameState.teams[1].name = dom.teamInputs[1].value || "Squadra B";
    
    // Algoritmo di estrazione randomica efficiente
    gameState.boardQuestions = {};
    gameState.selectedCategories.forEach(cat => {
        const sessionQuestions = [];
        const levels = [100, 200, 300, 400, 500];
        
        levels.forEach(level => {
            const possible = cat.questions.filter(q => q.p === level);
            if (possible.length > 0) {
                const picked = possible[Math.floor(Math.random() * possible.length)];
                sessionQuestions.push(picked);
            } else {
                // Fallback se mancano domande per un livello
                sessionQuestions.push({ q: "Domanda mancante per questo livello", a: "N/A", p: level });
            }
        });
        gameState.boardQuestions[cat.id] = sessionQuestions;
    });

    gameState.isGameStarted = true;
    saveState();
    showScreen('board');
    renderBoard();
    updateUI();
}

function renderBoard() {
    dom.boardGrid.innerHTML = "";
    gameState.selectedCategories.forEach(cat => {
        const h = document.createElement('div');
        h.className = "board-header";
        h.innerText = cat.title;
        dom.boardGrid.appendChild(h);
    });

    for (let i = 0; i < 5; i++) {
        const points = (i + 1) * 100;
        gameState.selectedCategories.forEach(cat => {
            const q = gameState.boardQuestions[cat.id][i];
            const btn = document.createElement('button');
            btn.className = "tile";
            const tileId = `${cat.id}-${points}`;
            
            if (gameState.playedTiles.includes(tileId)) {
                btn.classList.add('played');
            } else {
                btn.innerText = points;
                btn.onclick = () => openQuestion(cat, q, tileId);
            }
            dom.boardGrid.appendChild(btn);
        });
    }
}

function openQuestion(cat, question, tileId) {
    gameState.currentQuestion = { ...question, tileId };
    document.getElementById('modal-category').innerText = cat.title;
    document.getElementById('modal-points').innerText = question.p;
    document.getElementById('question-text').innerText = question.q;
    document.getElementById('answer-text').innerText = question.a;
    
    document.getElementById('answer-text').classList.add('hidden');
    document.getElementById('btn-show-answer').classList.remove('hidden');
    document.getElementById('answer-controls').classList.add('hidden');
    dom.modal.classList.remove('hidden');
}

function handleAnswer(isCorrect) {
    const points = gameState.currentQuestion.p;
    if (isCorrect) gameState.teams[gameState.turn].score += points;
    else gameState.teams[gameState.turn].score -= points;

    gameState.playedTiles.push(gameState.currentQuestion.tileId);
    gameState.turn = (gameState.turn === 0) ? 1 : 0;
    
    dom.modal.classList.add('hidden');
    saveState();
    renderBoard();
    updateUI();
}

function updateUI() {
    gameState.teams.forEach((t, i) => {
        const container = dom.statTeams[i];
        container.querySelector('.name').innerText = t.name;
        container.querySelector('.score').innerText = t.score;
        container.classList.toggle('active', gameState.turn === i);
    });
    dom.turnLabel.innerText = `Tocca a: ${gameState.teams[gameState.turn].name}`;
}

function showScreen(key) {
    Object.keys(screens).forEach(k => screens[k].classList.add('hidden'));
    screens[key].classList.remove('hidden');
}

function saveState() { localStorage.setItem(LS_KEY, JSON.stringify(gameState)); }
function loadState() {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) {
        gameState = JSON.parse(saved);
        if (gameState.draftStep >= 6) dom.btnStart.disabled = false;
    }
}
function resetGame() {
    if (confirm("Azzerare tutto?")) { localStorage.removeItem(LS_KEY); location.reload(); }
}

init();
