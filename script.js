// ==========================================
// ANIME PASSAPAROLA
// ==========================================


// ==========================================
// SCHERMATE
// ==========================================

const menuScreen = document.getElementById("menuScreen");
const playerScreen = document.getElementById("playerScreen");
const adminLoginScreen = document.getElementById("adminLoginScreen");
const adminScreen = document.getElementById("adminScreen");
const questionEditorScreen = document.getElementById("questionEditorScreen");
const gameScreen = document.getElementById("gameScreen");
const questionScreen = document.getElementById("questionScreen");
const endScreen = document.getElementById("endScreen");


// ==========================================
// MENU
// ==========================================

const startButton = document.getElementById("startButton");
const rankingButton = document.getElementById("rankingButton");
const adminButton = document.getElementById("adminButton");


// ==========================================
// GIOCATORE
// ==========================================

const playerNameInput = document.getElementById("playerName");
const continueButton = document.getElementById("continueButton");
const playerNameDisplay = document.getElementById("playerNameDisplay");


// ==========================================
// ADMIN
// ==========================================

const adminPassword = document.getElementById("adminPassword");
const adminLoginButton = document.getElementById("adminLoginButton");
const adminBackButton = document.getElementById("adminBackButton");

const editQuestionsButton =
    document.getElementById("editQuestionsButton");

const adminRankingButton =
    document.getElementById("adminRankingButton");

const clearRankingButton =
    document.getElementById("clearRankingButton");

const adminBackToMenuButton =
    document.getElementById("adminBackToMenuButton");


// ==========================================
// EDITOR DOMANDE
// ==========================================

const letterSelector =
    document.getElementById("letterSelector");

const editQuestion =
    document.getElementById("editQuestion");

const editAnswer =
    document.getElementById("editAnswer");

const editAcceptedAnswers =
    document.getElementById("editAcceptedAnswers");

const saveQuestionButton =
    document.getElementById("saveQuestionButton");

const resetQuestionButton =
    document.getElementById("resetQuestionButton");

const closeEditorButton =
    document.getElementById("closeEditorButton");


// ==========================================
// GIOCO
// ==========================================

const lettersContainer =
    document.getElementById("letters");

const scoreDisplay =
    document.getElementById("scoreDisplay");

const topScoreDisplay =
    document.getElementById("topScoreDisplay");


// ==========================================
// DOMANDA
// ==========================================

const questionLetter =
    document.getElementById("questionLetter");

const questionText =
    document.getElementById("questionText");

const timerDisplay =
    document.getElementById("timer");

const answerInput =
    document.getElementById("answerInput");

const submitButton =
    document.getElementById("submitButton");

const passButton =
    document.getElementById("passButton");

const resultMessage =
    document.getElementById("resultMessage");


// ==========================================
// FINE PARTITA
// ==========================================

const finalPlayerName =
    document.getElementById("finalPlayerName");

const finalScore =
    document.getElementById("finalScore");

const finalCorrect =
    document.getElementById("finalCorrect");

const returnMenuButton =
    document.getElementById("returnMenuButton");


// ==========================================
// VARIABILI
// ==========================================

let playerName = "";
let score = 0;
let correctAnswers = 0;

let currentLetter = "";

let timer = null;
let returnTimer = null;

let timeLeft = 30;

let round = 1;

let editingLetter = "A";


// ==========================================
// STATO PARTITA - RECUPERO REFRESH/DISCONNESSIONE
// ==========================================

// Stato partita: le variabili e le chiavi sono definite
// nella sezione SALVATAGGIO STATO PARTITA - V5 in fondo al file.



// ==========================================
// PASSWORD ADMIN
// ==========================================

const ADMIN_PASSWORD = "admin123";


// ==========================================
// SERVER
// ==========================================

// usa lo stesso dominio del sito
const API_BASE = "";


// ==========================================
// DOMANDE ORIGINALI
// ==========================================

const defaultQuestions = {

    A: {
        question: "Quale personaggio di Attack on Titan è il migliore amico di Eren e Mikasa?",
        acceptedAnswers: ["Armin", "Armin Arlert"],
        correctDisplay: "Armin Arlert"
    },

    B: {
        question: "Quale personaggio di Blue Lock è conosciuto come il Re del campo?",
        acceptedAnswers: ["Barou"],
        correctDisplay: "Barou"
    },

    C: {
        question: "Quale personaggio di One Piece è una renna e il medico della ciurma di Cappello di Paglia?",
        acceptedAnswers: ["Chopper"],
        correctDisplay: "Chopper"
    },

    D: {
        question: "Quale personaggio di One Piece è il principale antagonista dell'arco di Dressrosa?",
        acceptedAnswers: ["Doflamingo", "Donquixote Doflamingo"],
        correctDisplay: "Donquixote Doflamingo"
    },

    E: {
        question: "Quale personaggio di Fullmetal Alchemist è il fratello maggiore di Alphonse?",
        acceptedAnswers: ["Edward", "Edward Elric"],
        correctDisplay: "Edward Elric"
    },

    F: {
        question: "Quale personaggio di One Piece è il carpentiere della ciurma di Cappello di Paglia?",
        acceptedAnswers: ["Franky"],
        correctDisplay: "Franky"
    },

    G: {
        question: "Quale personaggio di Dragon Ball è il protagonista principale della serie?",
        acceptedAnswers: ["Goku"],
        correctDisplay: "Goku"
    },

    H: {
        question: "Quale personaggio di Hunter x Hunter è un famoso mago e combattente?",
        acceptedAnswers: ["Hisoka", "Hisoka Morow"],
        correctDisplay: "Hisoka Morow"
    },

    I: {
        question: "Quale personaggio di My Hero Academia è il protagonista della serie?",
        acceptedAnswers: ["Izuku", "Izuku Midoriya"],
        correctDisplay: "Izuku Midoriya"
    },

    J: {
        question: "Quale personaggio di JoJo's Bizarre Adventure: Stardust Crusaders è il protagonista?",
        acceptedAnswers: ["Jotaro", "Jotaro Kujo"],
        correctDisplay: "Jotaro Kujo"
    },

    K: {
        question: "Quale personaggio di Hunter x Hunter è il migliore amico di Gon ed è membro della famiglia Zoldyck?",
        acceptedAnswers: ["Killua", "Killua Zoldyck"],
        correctDisplay: "Killua Zoldyck"
    },

    L: {
        question: "Quale personaggio di Death Note è il detective che indaga sul caso Kira?",
        acceptedAnswers: ["L"],
        correctDisplay: "L"
    },

    M: {
        question: "Quale personaggio di Attack on Titan è una delle soldatesse più forti del Corpo di Ricerca?",
        acceptedAnswers: ["Mikasa", "Mikasa Ackerman"],
        correctDisplay: "Mikasa Ackerman"
    },

    N: {
        question: "Qual è il nome del protagonista di Naruto?",
        acceptedAnswers: ["Naruto", "Naruto Uzumaki"],
        correctDisplay: "Naruto Uzumaki"
    },

    O: {
        question: "Qual è il titolo dell'anime che racconta le avventure di Monkey D. Luffy?",
        acceptedAnswers: ["One Piece"],
        correctDisplay: "One Piece"
    },

    P: {
        question: "Quale Pokémon è il compagno più famoso di Ash Ketchum?",
        acceptedAnswers: ["Pikachu"],
        correctDisplay: "Pikachu"
    },

    Q: {
        question: "Come viene chiamata in My Hero Academia l'abilità speciale posseduta dalla maggior parte delle persone?",
        acceptedAnswers: ["Quirk"],
        correctDisplay: "Quirk"
    },

    R: {
        question: "Qual è il cognome di Roronoa Zoro, spadaccino della ciurma di Cappello di Paglia?",
        acceptedAnswers: ["Roronoa"],
        correctDisplay: "Roronoa"
    },

    S: {
        question: "Quale personaggio di One Piece è il cuoco della ciurma di Cappello di Paglia?",
        acceptedAnswers: ["Sanji"],
        correctDisplay: "Sanji"
    },

    T: {
        question: "Quale personaggio di Demon Slayer è il protagonista e fratello di Nezuko?",
        acceptedAnswers: ["Tanjiro", "Tanjiro Kamado"],
        correctDisplay: "Tanjiro Kamado"
    },

    U: {
        question: "Quale personaggio di Bleach è il proprietario dell'Urahara Shop?",
        acceptedAnswers: ["Urahara"],
        correctDisplay: "Urahara"
    },

    V: {
        question: "Quale personaggio di Dragon Ball è il principe dei Saiyan e rivale di Goku?",
        acceptedAnswers: ["Vegeta"],
        correctDisplay: "Vegeta"
    },

    W: {
        question: "Quale personaggio di One Piece è conosciuto come Barbabianca?",
        acceptedAnswers: ["Whitebeard"],
        correctDisplay: "Whitebeard"
    },

    X: {
        question: "Quale versione di Goku di Super Dragon Ball Heroes ha un nome che inizia con X?",
        acceptedAnswers: ["Xeno Goku"],
        correctDisplay: "Xeno Goku"
    },

    Y: {
        question: "Quale personaggio di Black Clover è il rivale di Asta?",
        acceptedAnswers: ["Yuno", "Yuno Grinberryall"],
        correctDisplay: "Yuno Grinberryall"
    },

    Z: {
        question: "Quale personaggio di One Piece ha un nome che inizia con Z ed è uno dei protagonisti principali?",
        acceptedAnswers: ["Zoro"],
        correctDisplay: "Zoro"
    }
};


// ==========================================
// CARICA DOMANDE SALVATE
// ==========================================

const questions = loadQuestions();


function loadQuestions() {

    const savedQuestions =
        localStorage.getItem("animePassaparolaQuestions");

    if (!savedQuestions) {

        return JSON.parse(
            JSON.stringify(defaultQuestions)
        );
    }

    try {

        const parsed =
            JSON.parse(savedQuestions);

        return {
            ...JSON.parse(
                JSON.stringify(defaultQuestions)
            ),
            ...parsed
        };

    } catch (error) {

        console.error(
            "Errore caricamento domande:",
            error
        );

        return JSON.parse(
            JSON.stringify(defaultQuestions)
        );
    }
}


// ==========================================
// SALVA DOMANDE
// ==========================================

function saveQuestions() {

    localStorage.setItem(
        "animePassaparolaQuestions",
        JSON.stringify(questions)
    );
}


// ==========================================
// MENU
// ==========================================

startButton.addEventListener("click", () => {

    menuScreen.style.display = "none";
    playerScreen.style.display = "flex";

    playerNameInput.focus();

});


rankingButton.addEventListener("click", () => {

    showRanking();

});


// ==========================================
// LOGIN ADMIN
// ==========================================

adminButton.addEventListener("click", () => {

    menuScreen.style.display = "none";

    adminLoginScreen.style.display = "flex";

    adminPassword.value = "";

    adminPassword.focus();

});


adminBackButton.addEventListener("click", () => {

    adminLoginScreen.style.display = "none";

    menuScreen.style.display = "flex";

});


adminLoginButton.addEventListener("click", loginAdmin);


adminPassword.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        loginAdmin();
    }

});


function loginAdmin() {

    if (adminPassword.value === ADMIN_PASSWORD) {

        adminLoginScreen.style.display = "none";

        adminScreen.style.display = "flex";

        adminPassword.value = "";

    } else {

        alert("❌ Password errata.");

        adminPassword.value = "";

        adminPassword.focus();
    }
}


// ==========================================
// APRI EDITOR
// ==========================================

editQuestionsButton.addEventListener("click", () => {

    adminScreen.style.display = "none";

    questionEditorScreen.style.display = "flex";

    createLetterSelector();

    loadQuestionIntoEditor("A");

});


// ==========================================
// CREA SELETTORE LETTERE
// ==========================================

function createLetterSelector() {

    letterSelector.innerHTML = "";

    for (const letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {

        const button =
            document.createElement("button");

        button.textContent = letter;

        if (letter === editingLetter) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {

            editingLetter = letter;

            createLetterSelector();

            loadQuestionIntoEditor(letter);

        });

        letterSelector.appendChild(button);
    }
}


// ==========================================
// CARICA DOMANDA NELL'EDITOR
// ==========================================

function loadQuestionIntoEditor(letter) {

    editingLetter = letter;

    const data = questions[letter];

    editQuestion.value =
        data.question;

    editAnswer.value =
        data.correctDisplay;

    editAcceptedAnswers.value =
        data.acceptedAnswers.join("\n");
}


// ==========================================
// SALVA DOMANDA
// ==========================================

saveQuestionButton.addEventListener("click", () => {

    const question =
        editQuestion.value.trim();

    const correctDisplay =
        editAnswer.value.trim();

    const acceptedAnswers =
        editAcceptedAnswers.value
            .split("\n")
            .map(answer => answer.trim())
            .filter(answer => answer !== "");


    if (question === "") {

        alert("❌ Inserisci una domanda.");

        return;
    }


    if (correctDisplay === "") {

        alert("❌ Inserisci la risposta corretta.");

        return;
    }


    if (acceptedAnswers.length === 0) {

        alert("❌ Inserisci almeno una risposta accettata.");

        return;
    }


    // CONTROLLO REGOLA PASSAPAROLA

    const invalidAnswers =
        acceptedAnswers.filter(answer => {

            return answer
                .trim()
                .charAt(0)
                .toUpperCase() !== editingLetter;

        });


    if (invalidAnswers.length > 0) {

        alert(
            `❌ ERRORE!\n\nLa lettera ${editingLetter} richiede risposte che iniziano con "${editingLetter}".\n\nRisposte non valide:\n${invalidAnswers.join("\n")}`
        );

        return;
    }


    if (
        correctDisplay
            .trim()
            .charAt(0)
            .toUpperCase() !== editingLetter
    ) {

        alert(
            `❌ La risposta visualizzata deve iniziare con la lettera ${editingLetter}.`
        );

        return;
    }


    questions[editingLetter] = {

        question: question,

        acceptedAnswers: acceptedAnswers,

        correctDisplay: correctDisplay

    };


    saveQuestions();


    alert(
        `✅ Domanda ${editingLetter} salvata correttamente!`
    );


    createLetterSelector();

});


// ==========================================
// RIPRISTINA DOMANDA ORIGINALE
// ==========================================

resetQuestionButton.addEventListener("click", () => {

    const confirmation =
        confirm(
            `Vuoi ripristinare la domanda originale della lettera ${editingLetter}?`
        );


    if (!confirmation) {
        return;
    }


    questions[editingLetter] =
        JSON.parse(
            JSON.stringify(
                defaultQuestions[editingLetter]
            )
        );


    saveQuestions();

    loadQuestionIntoEditor(editingLetter);

    createLetterSelector();


    alert(
        `✅ Domanda ${editingLetter} ripristinata.`
    );

});


// ==========================================
// CHIUDI EDITOR
// ==========================================

closeEditorButton.addEventListener("click", () => {

    questionEditorScreen.style.display = "none";

    adminScreen.style.display = "flex";

});


// ==========================================
// ADMIN CLASSIFICA
// ==========================================

adminRankingButton.addEventListener("click", () => {

    showRanking();

});


// ==========================================
// SVUOTA CLASSIFICA
// ==========================================

clearRankingButton.addEventListener("click", async () => {

    const confirmation =
        confirm(
            "⚠️ ATTENZIONE!\n\nSei sicuro di voler cancellare TUTTA la classifica?"
        );

    if (!confirmation) {
        return;
    }

    try {

        const response =
            await fetch(
                `${API_BASE}/api/players`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        password: ADMIN_PASSWORD
                    })
                }
            );

        const result =
            await response.json();

        if (!response.ok || !result.success) {

            throw new Error(
                result.error ||
                "Errore durante la cancellazione della classifica."
            );
        }

        alert(
            "✅ Classifica cancellata completamente."
        );

    } catch (error) {

        console.error(
            "Errore cancellazione classifica:",
            error
        );

        alert(
            "❌ Impossibile cancellare la classifica.\n\n" +
            error.message
        );

    }

});


// ==========================================
// ADMIN → MENU
// ==========================================

adminBackToMenuButton.addEventListener("click", () => {

    adminScreen.style.display = "none";

    menuScreen.style.display = "flex";

});


// ==========================================
// INIZIA PARTITA
// ==========================================

continueButton.addEventListener("click", startGame);


playerNameInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        startGame();
    }

});


function startGame() {

    gameFinished = false;

    const name =
        playerNameInput.value.trim();


    if (name === "") {

        alert("Inserisci il tuo nome.");

        return;
    }


    playerName = name;

    score = 0;

    correctAnswers = 0;

    round = 1;

    activeQuestion = false;
    questionOpenedAt = null;
    replacementLetters = {};
    clearSavedGameState();


    for (const letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {

        letterStatus[letter] = "pending";

    }


    playerNameDisplay.textContent =
        playerName;


    updateScore();


    playerScreen.style.display = "none";

    gameScreen.style.display = "flex";


    createLetters();

    // Salva immediatamente anche quando siamo sulla ruota.
    saveGameState();
}


// ==========================================
// STATO LETTERE
// ==========================================

const letterStatus = {};

for (const letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {

    letterStatus[letter] = "pending";

}


// ==========================================
// PUNTEGGIO
// ==========================================

function updateScore() {

    scoreDisplay.textContent = score;

    topScoreDisplay.textContent = score;

}


// ==========================================
// CREA RUOTA
// ==========================================

function createLetters() {

    lettersContainer.innerHTML = "";

    const letters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    letters.split("").forEach((letter, index) => {

        const button =
            document.createElement("button");


        button.classList.add("letter");

        button.textContent = letter;


        const angle =
            (360 / 26) * index;


        button.style.setProperty(
            "--angle",
            `${angle}deg`
        );


        updateLetterStyle(
            button,
            letter
        );


        button.addEventListener("click", () => {

            if (!canPlayLetter(letter)) {
                return;
            }


            openQuestion(letter);

        });


        lettersContainer.appendChild(button);

    });


    updateScore();
}


// ==========================================
// LETTERE GIOCABILI
// ==========================================

function canPlayLetter(letter) {

    if (round === 1) {

        return (
            letterStatus[letter] === "pending"
        );

    }


    if (round === 2) {

        return (
            letterStatus[letter] === "passed"
        );

    }


    return false;
}


// ==========================================
// COLORI
// ==========================================

function updateLetterStyle(button, letter) {

    button.classList.remove(
        "correct",
        "wrong",
        "passed"
    );


    if (
        letterStatus[letter] === "correct"
    ) {

        button.classList.add("correct");

    }


    if (
        letterStatus[letter] === "wrong"
    ) {

        button.classList.add("wrong");

    }


    if (
        letterStatus[letter] === "passed"
    ) {

        button.classList.add("passed");

    }

}


// ==========================================
// APRI DOMANDA
// ==========================================

function openQuestion(letter) {

    clearTimeout(returnTimer);

    clearInterval(timer);


    currentLetter = letter;
    activeQuestion = true;
    questionOpenedAt = Date.now();

    saveGameState();


    gameScreen.style.display = "none";

    questionScreen.style.display = "flex";


    questionLetter.textContent =
        letter;


    const questionData = getQuestionForLetter(letter);

    questionText.textContent =
        questionData.question;


    answerInput.value = "";

    answerInput.disabled = false;


    submitButton.disabled = false;

    passButton.disabled = false;


    resultMessage.textContent = "";

    resultMessage.className = "";


    startTimer();


    answerInput.focus();
}


// ==========================================
// TIMER
// ==========================================

function startTimer() {

    clearInterval(timer);


    timeLeft = 30;


    timerDisplay.textContent =
        `Tempo: ${timeLeft}`;


    timer = setInterval(() => {

        timeLeft--;


        timerDisplay.textContent =
            `Tempo: ${timeLeft}`;


        if (timeLeft <= 0) {

            clearInterval(timer);

            timeExpired();

        }

    }, 1000);
}


// ==========================================
// TEMPO SCADUTO
// ==========================================

function timeExpired() {

    answerInput.disabled = true;

    submitButton.disabled = true;

    passButton.disabled = true;


    letterStatus[currentLetter] =
        "wrong";

    activeQuestion = false;
    questionOpenedAt = null;
    saveGameState();


    resultMessage.textContent =
        `⏰ TEMPO SCADUTO! La risposta corretta era: ${getQuestionForLetter(currentLetter).correctDisplay}`;


    resultMessage.className =
        "wrong-result";


    createLetters();


    returnToWheelAutomatically();
}


// ==========================================
// NORMALIZZA
// ==========================================

function normalizeAnswer(text) {

    return text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,!?'"“”‘’()\-]/g, "")
        .replace(/\s+/g, " ");

}


// ==========================================
// CONTROLLA RISPOSTA
// ==========================================

submitButton.addEventListener(
    "click",
    checkAnswer
);


answerInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {
            checkAnswer();
        }

    }
);


function checkAnswer() {

    if (answerInput.disabled) {
        return;
    }


    clearInterval(timer);
    activeQuestion = false;
    questionOpenedAt = null;


    const userAnswer =
        normalizeAnswer(
            answerInput.value
        );


    const answerData =
        getQuestionForLetter(currentLetter);

    const acceptedAnswers =
        answerData
            .acceptedAnswers
            .map(answer =>
                normalizeAnswer(answer)
            );


    answerInput.disabled = true;

    submitButton.disabled = true;

    passButton.disabled = true;


    if (
        acceptedAnswers.includes(
            userAnswer
        )
    ) {

        score++;

        correctAnswers++;


        letterStatus[currentLetter] =
            "correct";


        resultMessage.textContent =
            "✅ CORRETTO! +1 punto";


        resultMessage.className =
            "correct-result";

    } else {

        letterStatus[currentLetter] =
            "wrong";


        resultMessage.textContent =
            `❌ SBAGLIATO! La risposta corretta era: ${answerData.correctDisplay}`;


        resultMessage.className =
            "wrong-result";
    }


    updateScore();
    saveGameState();

    createLetters();

    returnToWheelAutomatically();
}


// ==========================================
// PASSA
// ==========================================

passButton.addEventListener("click", () => {

    clearInterval(timer);


    answerInput.disabled = true;

    submitButton.disabled = true;

    passButton.disabled = true;


    letterStatus[currentLetter] =
        "passed";

    activeQuestion = false;
    questionOpenedAt = null;
    saveGameState();


    resultMessage.textContent =
        "⏭ PASSATA!";


    resultMessage.className =
        "passed-result";


    createLetters();

    returnToWheelAutomatically();

});


// ==========================================
// TORNA ALLA RUOTA
// ==========================================

function returnToWheelAutomatically() {

    clearTimeout(returnTimer);


    returnTimer = setTimeout(() => {

        questionScreen.style.display =
            "none";

        gameScreen.style.display =
            "flex";


        checkRound();

    }, 1500);
}


// ==========================================
// CONTROLLO ROUND
// ==========================================

function checkRound() {

    if (round === 1) {

        const pendingLetters =
            Object.values(letterStatus)
                .filter(
                    status =>
                        status === "pending"
                );


        if (pendingLetters.length > 0) {

            createLetters();

            return;
        }


        const passedLetters =
            Object.values(letterStatus)
                .filter(
                    status =>
                        status === "passed"
                );


        if (passedLetters.length > 0) {

            round = 2;


            alert(
                "🔄 SECONDO GIRO!\n\nOra puoi giocare nuovamente solo le lettere gialle."
            );


            createLetters();

            return;
        }


        endGame();

        return;
    }


    if (round === 2) {

        const passedLetters =
            Object.values(letterStatus)
                .filter(
                    status =>
                        status === "passed"
                );


        if (passedLetters.length > 0) {

            createLetters();

            return;
        }


        endGame();
    }
}


// ==========================================
// SALVA RISULTATO SU SUPABASE
// ==========================================

async function saveResult() {

    try {

        const response =
            await fetch(
                `${API_BASE}/api/players`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        username: playerName,
                        score: score
                    })
                }
            );

        const result =
            await response.json();

        if (!response.ok || !result.success) {

            throw new Error(
                result.error ||
                "Errore nel salvataggio del risultato."
            );
        }

        console.log(
            "Risultato salvato su Supabase:",
            result.data
        );

    } catch (error) {

        console.error(
            "Errore salvataggio classifica:",
            error
        );

        alert(
            "⚠️ La partita è terminata, ma non è stato possibile salvare il risultato.\n\n" +
            error.message
        );

    }

}


// ==========================================
// CLASSIFICA
// ==========================================

async function showRanking() {

    try {

        const response =
            await fetch(
                `${API_BASE}/api/players`
            );

        const result =
            await response.json();

        if (!response.ok || !result.success) {

            throw new Error(
                result.error ||
                "Errore caricamento classifica."
            );
        }

        const players =
            result.players || [];

        // Ordina dal punteggio più alto al più basso.
        players.sort(
            (a, b) =>
                Number(b.score) - Number(a.score)
        );


        // ==========================================
        // CREA MODALE CLASSIFICA
        // ==========================================

        let modal =
            document.getElementById(
                "rankingModal"
            );


        if (!modal) {

            modal =
                document.createElement("div");

            modal.id =
                "rankingModal";


            modal.innerHTML = `

                <div class="ranking-overlay">

                    <div class="ranking-panel">

                        <button
                            class="ranking-close"
                            aria-label="Chiudi"
                        >
                            ×
                        </button>


                        <div class="ranking-header">

                            <div class="ranking-trophy">
                                🏆
                            </div>

                            <h2>
                                CLASSIFICA
                            </h2>

                            <p>
                                ANIME PASSAPAROLA
                            </p>

                        </div>


                        <div class="ranking-list"></div>

                    </div>

                </div>

            `;


            document.body.appendChild(modal);


            // ==========================================
            // STILE CLASSIFICA
            // ==========================================

            const style =
                document.createElement("style");

            style.id =
                "rankingModalStyle";


            style.textContent = `

                #rankingModal {

                    position: fixed;

                    inset: 0;

                    z-index: 99999;

                    display: none;

                    font-family: inherit;

                }


                #rankingModal .ranking-overlay {

                    position: absolute;

                    inset: 0;

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    padding: 20px;

                    background: rgba(
                        0,
                        0,
                        0,
                        0.78
                    );

                    backdrop-filter: blur(7px);

                    animation:
                        rankingFadeIn
                        0.2s ease;

                }


                #rankingModal .ranking-panel {

                    position: relative;

                    width: min(
                        620px,
                        100%
                    );

                    max-height: min(
                        820px,
                        90vh
                    );

                    overflow: hidden;

                    border-radius: 24px;

                    padding:
                        28px
                        22px
                        22px;

                    background:
                        linear-gradient(
                            145deg,
                            #17152b,
                            #0d0c18
                        );

                    border:
                        1px solid
                        rgba(
                            255,
                            255,
                            255,
                            0.14
                        );

                    box-shadow:
                        0 25px 80px
                        rgba(
                            0,
                            0,
                            0,
                            0.65
                        );

                    color: white;

                    animation:
                        rankingPopIn
                        0.25s ease;

                }


                #rankingModal .ranking-header {

                    text-align: center;

                    margin-bottom: 22px;

                }


                #rankingModal .ranking-trophy {

                    font-size: 46px;

                    line-height: 1;

                    margin-bottom: 8px;

                    filter:
                        drop-shadow(
                            0 5px 12px
                            rgba(
                                255,
                                193,
                                7,
                                0.35
                            )
                        );

                }


                #rankingModal h2 {

                    margin: 0;

                    font-size:
                        clamp(
                            25px,
                            5vw,
                            36px
                        );

                    font-weight: 900;

                    letter-spacing: 2px;

                }


                #rankingModal
                .ranking-header p {

                    margin:
                        5px 0 0;

                    opacity: 0.65;

                    font-size: 12px;

                    letter-spacing: 3px;

                    font-weight: 700;

                }


                #rankingModal .ranking-close {

                    position: absolute;

                    top: 14px;

                    right: 14px;

                    width: 40px;

                    height: 40px;

                    border: 0;

                    border-radius: 50%;

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            0.09
                        );

                    color: white;

                    font-size: 28px;

                    line-height: 1;

                    cursor: pointer;

                    transition:
                        transform
                        0.15s ease,
                        background
                        0.15s ease;

                }


                #rankingModal
                .ranking-close:hover {

                    transform:
                        scale(1.08);

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            0.17
                        );

                }


                #rankingModal .ranking-list {

                    max-height:
                        calc(
                            min(
                                820px,
                                90vh
                            )
                            - 190px
                        );

                    overflow-y: auto;

                    padding:
                        4px
                        5px
                        8px
                        2px;

                }


                #rankingModal
                .ranking-list::-webkit-scrollbar {

                    width: 7px;

                }


                #rankingModal
                .ranking-list::-webkit-scrollbar-thumb {

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            0.2
                        );

                    border-radius: 20px;

                }


                #rankingModal .ranking-row {

                    display: flex;

                    align-items: center;

                    gap: 12px;

                    min-height: 64px;

                    margin: 8px 0;

                    padding:
                        10px
                        14px;

                    border-radius: 16px;

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            0.055
                        );

                    border:
                        1px solid
                        rgba(
                            255,
                            255,
                            255,
                            0.07
                        );

                    transition:
                        transform
                        0.15s ease,
                        background
                        0.15s ease;

                }


                #rankingModal
                .ranking-row:hover {

                    transform:
                        translateY(-1px);

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            0.09
                        );

                }


                #rankingModal
                .ranking-row.top-one {

                    min-height: 78px;

                    background:
                        linear-gradient(
                            135deg,
                            rgba(
                                255,
                                193,
                                7,
                                0.20
                            ),
                            rgba(
                                255,
                                255,
                                255,
                                0.055
                            )
                        );

                    border-color:
                        rgba(
                            255,
                            193,
                            7,
                            0.38
                        );

                }


                #rankingModal
                .ranking-row.top-two {

                    background:
                        linear-gradient(
                            135deg,
                            rgba(
                                190,
                                200,
                                210,
                                0.14
                            ),
                            rgba(
                                255,
                                255,
                                255,
                                0.055
                            )
                        );

                    border-color:
                        rgba(
                            210,
                            215,
                            220,
                            0.28
                        );

                }


                #rankingModal
                .ranking-row.top-three {

                    background:
                        linear-gradient(
                            135deg,
                            rgba(
                                205,
                                127,
                                50,
                                0.16
                            ),
                            rgba(
                                255,
                                255,
                                255,
                                0.055
                            )
                        );

                    border-color:
                        rgba(
                            205,
                            127,
                            50,
                            0.28
                        );

                }


                #rankingModal
                .ranking-position {

                    flex:
                        0 0 42px;

                    text-align: center;

                    font-size: 20px;

                    font-weight: 900;

                }


                #rankingModal
                .ranking-row
                :not(.top-one)
                :not(.top-two)
                :not(.top-three)
                .ranking-position {

                    font-size: 15px;

                    opacity: 0.65;

                }


                #rankingModal .ranking-name {

                    flex: 1;

                    min-width: 0;

                    overflow: hidden;

                    text-overflow: ellipsis;

                    white-space: nowrap;

                    font-size: 17px;

                    font-weight: 750;

                }


                #rankingModal .ranking-score {

                    flex:
                        0 0 auto;

                    font-size: 19px;

                    font-weight: 900;

                    white-space: nowrap;

                }


                #rankingModal
                .ranking-row.top-one
                .ranking-score {

                    font-size: 22px;

                }


                #rankingModal .ranking-empty {

                    text-align: center;

                    padding: 35px 15px;

                    opacity: 0.7;

                    font-size: 16px;

                }


                @keyframes rankingFadeIn {

                    from {
                        opacity: 0;
                    }

                    to {
                        opacity: 1;
                    }

                }


                @keyframes rankingPopIn {

                    from {

                        transform:
                            translateY(12px)
                            scale(0.97);

                        opacity: 0;

                    }

                    to {

                        transform:
                            translateY(0)
                            scale(1);

                        opacity: 1;

                    }

                }


                @media (
                    max-width: 520px
                ) {

                    #rankingModal
                    .ranking-overlay {

                        padding: 12px;

                    }


                    #rankingModal
                    .ranking-panel {

                        border-radius: 20px;

                        padding:
                            24px
                            14px
                            16px;

                    }


                    #rankingModal
                    .ranking-row {

                        padding:
                            9px
                            10px;

                        gap: 8px;

                    }


                    #rankingModal
                    .ranking-position {

                        flex-basis: 34px;

                    }


                    #rankingModal
                    .ranking-name {

                        font-size: 15px;

                    }


                    #rankingModal
                    .ranking-score {

                        font-size: 17px;

                    }

                }

            `;


            document.head.appendChild(style);


            // ==========================================
            // CHIUDI CLASSIFICA
            // ==========================================

            modal
                .querySelector(
                    ".ranking-close"
                )
                .addEventListener(
                    "click",
                    () => {

                        modal.style.display =
                            "none";

                    }
                );


            modal
                .querySelector(
                    ".ranking-overlay"
                )
                .addEventListener(
                    "click",
                    (event) => {

                        if (
                            event.target ===
                            event.currentTarget
                        ) {

                            modal.style.display =
                                "none";

                        }

                    }
                );

        }


        // ==========================================
        // RIEMPI CLASSIFICA
        // ==========================================

        const list =
            modal.querySelector(
                ".ranking-list"
            );

        list.innerHTML = "";


        if (players.length === 0) {

            list.innerHTML = `

                <div class="ranking-empty">

                    📝

                    <br><br>

                    Non ci sono ancora
                    partite registrate.

                </div>

            `;

        } else {

            players.forEach(
                (player, index) => {

                    const row =
                        document.createElement(
                            "div"
                        );


                    const position =
                        index + 1;


                    row.className =
                        "ranking-row" +

                        (
                            position === 1
                                ? " top-one"
                                : ""
                        ) +

                        (
                            position === 2
                                ? " top-two"
                                : ""
                        ) +

                        (
                            position === 3
                                ? " top-three"
                                : ""
                        );


                    let medal = "";


                    if (
                        position === 1
                    ) {

                        medal = "🥇";

                    } else if (
                        position === 2
                    ) {

                        medal = "🥈";

                    } else if (
                        position === 3
                    ) {

                        medal = "🥉";

                    }


                    const safeName =
                        String(
                            player.username ??
                            "Giocatore"
                        );


                    row.innerHTML = `

                        <div class="ranking-position">

                            ${
                                medal ||
                                position
                            }

                        </div>


                        <div class="ranking-name"></div>


                        <div class="ranking-score">

                            ${
                                Number(
                                    player.score
                                ) || 0
                            }/26

                        </div>

                    `;


                    // Evita che il nome venga interpretato come HTML.
                    row.querySelector(
                        ".ranking-name"
                    ).textContent =
                        safeName;


                    list.appendChild(row);

                }
            );

        }


        modal.style.display =
            "block";


    } catch (error) {

        console.error(
            "Errore caricamento classifica:",
            error
        );


        alert(
            "❌ Impossibile caricare la classifica.\n\n" +
            error.message
        );

    }

}


// ==========================================
// FINE PARTITA
// ==========================================

function endGame() {

    // La partita è conclusa: blocchiamo l'autosave
    // prima di cancellare lo stato.
    gameFinished = true;
    activeQuestion = false;
    questionOpenedAt = null;

    clearInterval(autosaveTimer);
    autosaveTimer = null;

    clearSavedGameState();

    clearInterval(timer);

    clearTimeout(returnTimer);


    saveResult();


    finalPlayerName.textContent =
        playerName;


    finalScore.textContent =
        score;


    finalCorrect.textContent =
        correctAnswers;


    gameScreen.style.display =
        "none";

    questionScreen.style.display =
        "none";

    endScreen.style.display =
        "flex";
}


// ==========================================
// TORNA AL MENU
// ==========================================

returnMenuButton.addEventListener(
    "click",
    () => {

        gameFinished = true;
        clearSavedGameState();

        endScreen.style.display =
            "none";

        menuScreen.style.display =
            "flex";


        playerNameInput.value = "";


        score = 0;

        correctAnswers = 0;

        round = 1;
        activeQuestion = false;
        currentLetter = "";
        replacementLetters = {};
        clearSavedGameState();

    }
);


// ==========================================
// DOMANDE ALTERNATIVE PER REFRESH / DISCONNESSIONE
// ==========================================

const alternateQuestions = {

    A: { question: "Quale personaggio di One Piece è il comandante della Prima Divisione di Barbabianca?", acceptedAnswers: ["Marco"], correctDisplay: "Marco" },
    B: { question: "Quale personaggio di One Piece è uno scheletro musicista della ciurma di Luffy?", acceptedAnswers: ["Brook"], correctDisplay: "Brook" },
    C: { question: "Quale personaggio di Dragon Ball è il fratello maggiore di Vegeta?", acceptedAnswers: ["Nappa"], correctDisplay: "Nappa" },
    D: { question: "Quale personaggio di One Piece è il medico della ciurma di Cappello di Paglia?", acceptedAnswers: ["Chopper", "Tony Tony Chopper"], correctDisplay: "Chopper" },
    E: { question: "Quale personaggio di Naruto è il maestro del Team 7?", acceptedAnswers: ["Kakashi", "Kakashi Hatake"], correctDisplay: "Kakashi Hatake" },
    F: { question: "Quale personaggio di One Piece è il fratello di Luffy e Sabo?", acceptedAnswers: ["Ace", "Portgas D Ace", "Portgas D. Ace"], correctDisplay: "Ace" },
    G: { question: "Quale personaggio di Dragon Ball è il protagonista principale?", acceptedAnswers: ["Goku", "Son Goku"], correctDisplay: "Goku" },
    H: { question: "Quale personaggio di Hunter x Hunter è famoso per le sue carte da gioco?", acceptedAnswers: ["Hisoka", "Hisoka Morow"], correctDisplay: "Hisoka Morow" },
    I: { question: "Quale personaggio di Naruto è il fratello maggiore di Sasuke?", acceptedAnswers: ["Itachi", "Itachi Uchiha"], correctDisplay: "Itachi Uchiha" },
    J: { question: "Quale protagonista di JoJo possiede lo Stand Star Platinum?", acceptedAnswers: ["Jotaro", "Jotaro Kujo"], correctDisplay: "Jotaro Kujo" },
    K: { question: "Quale personaggio di Hunter x Hunter appartiene alla famiglia Zoldyck ed è amico di Gon?", acceptedAnswers: ["Killua", "Killua Zoldyck"], correctDisplay: "Killua Zoldyck" },
    L: { question: "Quale detective di Death Note viene indicato con una sola lettera?", acceptedAnswers: ["L", "L Lawliet", "Lawliet"], correctDisplay: "L" },
    M: { question: "Quale personaggio di Attack on Titan appartiene al clan Ackerman?", acceptedAnswers: ["Mikasa", "Mikasa Ackerman"], correctDisplay: "Mikasa Ackerman" },
    N: { question: "Quale ninja sogna di diventare Hokage nel Villaggio della Foglia?", acceptedAnswers: ["Naruto", "Naruto Uzumaki"], correctDisplay: "Naruto Uzumaki" },
    O: { question: "Quale opera segue il viaggio di Monkey D. Luffy alla ricerca del tesoro One Piece?", acceptedAnswers: ["One Piece"], correctDisplay: "One Piece" },
    P: { question: "Quale Pokémon elettrico è il compagno più famoso di Ash?", acceptedAnswers: ["Pikachu"], correctDisplay: "Pikachu" },
    Q: { question: "Come vengono chiamati i poteri speciali in My Hero Academia?", acceptedAnswers: ["Quirk"], correctDisplay: "Quirk" },
    R: { question: "Qual è il nome completo dello spadaccino Zoro?", acceptedAnswers: ["Roronoa Zoro", "Roronoa"], correctDisplay: "Roronoa Zoro" },
    S: { question: "Quale cuoco della ciurma di Luffy combatte principalmente usando i calci?", acceptedAnswers: ["Sanji"], correctDisplay: "Sanji" },
    T: { question: "Quale personaggio di Demon Slayer è il fratello di Nezuko?", acceptedAnswers: ["Tanjiro", "Tanjiro Kamado"], correctDisplay: "Tanjiro Kamado" },
    U: { question: "Quale ex Shinigami gestisce l'Urahara Shop in Bleach?", acceptedAnswers: ["Urahara", "Kisuke Urahara"], correctDisplay: "Urahara" },
    V: { question: "Quale Saiyan è il principe della razza e rivale di Goku?", acceptedAnswers: ["Vegeta"], correctDisplay: "Vegeta" },
    W: { question: "Quale pirata di One Piece era conosciuto come Barbabianca?", acceptedAnswers: ["Whitebeard", "Barbabianca", "Edward Newgate"], correctDisplay: "Whitebeard" },
    X: { question: "Quale versione alternativa di Goku appare in Super Dragon Ball Heroes?", acceptedAnswers: ["Xeno Goku"], correctDisplay: "Xeno Goku" },
    Y: { question: "Quale mago di Black Clover è il rivale di Asta?", acceptedAnswers: ["Yuno", "Yuno Grinberryall"], correctDisplay: "Yuno Grinberryall" },
    Z: { question: "Quale spadaccino di One Piece combatte usando tre spade?", acceptedAnswers: ["Zoro", "Roronoa Zoro"], correctDisplay: "Zoro" }
};


function getQuestionForLetter(letter) {

    if (
        round === 2 &&
        replacementLetters[letter] &&
        alternateQuestions[letter]
    ) {
        return alternateQuestions[letter];
    }

    return questions[letter];
}


// ==========================================
// SALVATAGGIO STATO PARTITA - V5
// ==========================================
//
// Regole:
// 1) Una partita attiva viene salvata continuamente.
// 2) Refresh/disconnessione durante una domanda:
//    la domanda viene considerata PASSATA e sostituita
//    nel secondo giro.
// 3) Refresh sulla ruota:
//    la partita resta sulla ruota, senza ricominciare.
// 4) PASSA volontario:
//    la stessa domanda resta disponibile nel secondo giro.
// 5) Il salvataggio viene cancellato solo quando:
//    - la partita termina;
//    - il giocatore torna volontariamente al menu;
//    - parte una nuova partita.
//
// Manteniamo la chiave V3 per compatibilità e usiamo V5
// come nuova chiave primaria.
const GAME_STATE_KEY = "animePassaparolaGameState_v5";
const LEGACY_GAME_STATE_KEY = "animePassaparolaGameState_v3";

let activeQuestion = false;
let questionOpenedAt = null;
let replacementLetters = {};

let gameBooting = true;
let autosaveTimer = null;
let gameFinished = false;


function buildGameState() {

    return {
        playerName,
        score,
        correctAnswers,
        round,
        currentLetter,
        activeQuestion,
        questionOpenedAt,
        letterStatus: { ...letterStatus },
        replacementLetters: { ...replacementLetters },
        gameFinished,
        savedAt: Date.now()
    };

}


function saveGameState() {

    // Una partita terminata non deve essere salvata.
    // Evita che l'autosave ricrei lo stato subito dopo endGame().
    if (gameFinished) {
        return false;
    }

    if (!playerName) {
        return false;
    }

    try {

        const serialized =
            JSON.stringify(buildGameState());

        localStorage.setItem(
            GAME_STATE_KEY,
            serialized
        );

        // Compatibilità con eventuali versioni precedenti.
        localStorage.setItem(
            LEGACY_GAME_STATE_KEY,
            serialized
        );

        return true;

    } catch (error) {

        console.error(
            "Errore salvataggio stato partita:",
            error
        );

        return false;
    }

}


function readSavedGameState() {

    try {

        let rawState =
            localStorage.getItem(GAME_STATE_KEY);

        // Se non esiste ancora V5, prova a recuperare V3.
        if (!rawState) {

            rawState =
                localStorage.getItem(
                    LEGACY_GAME_STATE_KEY
                );

        }

        if (!rawState) {
            return null;
        }

        const state =
            JSON.parse(rawState);

        // Non ripristinare mai uno stato marcato come concluso.
        if (state.gameFinished === true) {
            clearSavedGameState();
            return null;
        }

        // Protezione per i vecchi salvataggi senza gameFinished:
        // se non ci sono più lettere pending o passed, la partita era conclusa.
        if (state.letterStatus) {
            const statuses = Object.values(state.letterStatus);
            const hasPendingOrPassed = statuses.some(
                status => status === "pending" || status === "passed"
            );

            if (!hasPendingOrPassed) {
                clearSavedGameState();
                return null;
            }
        }

        if (
            !state ||
            typeof state.playerName !== "string" ||
            !state.playerName.trim() ||
            !state.letterStatus ||
            ![1, 2].includes(
                Number(state.round)
            )
        ) {

            return null;
        }

        return state;

    } catch (error) {

        console.error(
            "Errore lettura stato partita:",
            error
        );

        return null;
    }

}


function clearSavedGameState() {

    try {

        localStorage.removeItem(
            GAME_STATE_KEY
        );

        localStorage.removeItem(
            LEGACY_GAME_STATE_KEY
        );

    } catch (error) {

        console.error(
            "Errore cancellazione stato partita:",
            error
        );

    }

}


function applySavedGameState(state) {

    gameFinished = false;

    playerName =
        state.playerName;

    score =
        Number(state.score) || 0;

    correctAnswers =
        Number(state.correctAnswers) || 0;

    round =
        Number(state.round);

    replacementLetters = {
        ...(state.replacementLetters || {})
    };


    for (
        const letter of
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ) {

        letterStatus[letter] =
            state.letterStatus[letter] ||
            "pending";

    }


    // --------------------------------------------------
    // REFRESH / DISCONNESSIONE DURANTE UNA DOMANDA
    // --------------------------------------------------
    //
    // La domanda NON viene riaperta.
    // La lettera diventa PASSATA e viene marcata
    // per ricevere una domanda alternativa nel secondo giro.
    //
    if (
        state.activeQuestion &&
        state.currentLetter &&
        letterStatus[state.currentLetter] === "pending"
    ) {

        letterStatus[state.currentLetter] =
            "passed";

        replacementLetters[
            state.currentLetter
        ] = true;

    }


    currentLetter = "";
    activeQuestion = false;
    questionOpenedAt = null;


    playerNameDisplay.textContent =
        playerName;

    playerNameInput.value =
        playerName;


    updateScore();
    createLetters();


    // Mostra direttamente la partita.
    menuScreen.style.display = "none";
    playerScreen.style.display = "none";
    questionScreen.style.display = "none";
    endScreen.style.display = "none";
    adminLoginScreen.style.display = "none";
    adminScreen.style.display = "none";
    questionEditorScreen.style.display = "none";
    gameScreen.style.display = "flex";


    // Salva il nuovo stato dopo l'eventuale penalità
    // per evitare che al successivo refresh la stessa
    // domanda venga passata una seconda volta.
    saveGameState();

    // IMPORTANTISSIMO:
    // dopo il ripristino controlliamo immediatamente se il
    // giro corrente è già terminato. In questo modo non si
    // rimane bloccati sulla ruota quando, prima del refresh,
    // tutte le lettere erano già state risolte.
    //
    // Se ci sono ancora lettere giocabili, checkRound()
    // non cambia schermata e lascia la ruota attiva.
    checkRound();

}


function restoreSavedGameState() {

    const state =
        readSavedGameState();

    if (!state) {
        return false;
    }

    try {

        applySavedGameState(state);

        return true;

    } catch (error) {

        console.error(
            "Errore ripristino partita:",
            error
        );

        return false;
    }

}


// ==========================================
// AUTOSAVE
// ==========================================
//
// Non ci affidiamo solamente a beforeunload/pagehide.
// Durante una partita lo stato viene aggiornato
// periodicamente. In questo modo un refresh improvviso
// trova già un salvataggio recente.
function startAutosave() {

    clearInterval(autosaveTimer);

    autosaveTimer =
        setInterval(() => {

            if (
                !gameBooting &&
                !gameFinished &&
                playerName
            ) {

                saveGameState();

            }

        }, 500);

}


function stopAutosave() {

    clearInterval(autosaveTimer);

    autosaveTimer = null;

}


// ==========================================
// USCITA / REFRESH
// ==========================================

function persistBeforeExit() {

    if (
        playerName &&
        !gameBooting &&
        !gameFinished
    ) {

        saveGameState();

    }

}


window.addEventListener(
    "pagehide",
    persistBeforeExit
);


window.addEventListener(
    "beforeunload",
    persistBeforeExit
);


// visibilitychange è utile soprattutto su mobile
// e quando la scheda viene sospesa.
document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState === "hidden"
        ) {

            persistBeforeExit();

        }

    }
);


// ==========================================
// DISCONNESSIONE
// ==========================================
//
// Se il browser segnala offline mentre una domanda
// è aperta, la domanda viene considerata passata.
// Non aspettiamo il ritorno online per riaprirla.
window.addEventListener(
    "offline",
    () => {

        if (
            !gameBooting &&
            !gameFinished &&
            playerName &&
            activeQuestion &&
            currentLetter
        ) {

            const interruptedLetter =
                currentLetter;

            clearInterval(timer);
            clearTimeout(returnTimer);


            letterStatus[
                interruptedLetter
            ] = "passed";

            replacementLetters[
                interruptedLetter
            ] = true;


            activeQuestion = false;
            questionOpenedAt = null;
            currentLetter = "";


            saveGameState();


            questionScreen.style.display =
                "none";

            gameScreen.style.display =
                "flex";


            createLetters();

        }

    }
);


// ==========================================
// RIPRISTINO AUTOMATICO ALL'AVVIO
// ==========================================
//
// IMPORTANTISSIMO:
// prima proviamo a ripristinare.
// Solo se non esiste una partita salvata
// lasciamo il menu normale.
const restoredGame =
    restoreSavedGameState();

gameBooting = false;

startAutosave();

console.log(
    restoredGame
        ? "Anime Passaparola: partita ripristinata correttamente."
        : "Anime Passaparola caricato correttamente!"
);
