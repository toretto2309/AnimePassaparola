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


    for (const letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {

        letterStatus[letter] = "pending";

    }


    playerNameDisplay.textContent =
        playerName;


    updateScore();


    playerScreen.style.display = "none";

    gameScreen.style.display = "flex";


    createLetters();
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


    gameScreen.style.display = "none";

    questionScreen.style.display = "flex";


    questionLetter.textContent =
        letter;


    questionText.textContent =
        questions[letter].question;


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


    resultMessage.textContent =
        `⏰ TEMPO SCADUTO! La risposta corretta era: ${questions[currentLetter].correctDisplay}`;


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


    const userAnswer =
        normalizeAnswer(
            answerInput.value
        );


    const acceptedAnswers =
        questions[currentLetter]
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
            `❌ SBAGLIATO! La risposta corretta era: ${questions[currentLetter].correctDisplay}`;


        resultMessage.className =
            "wrong-result";
    }


    updateScore();

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

        endScreen.style.display =
            "none";

        menuScreen.style.display =
            "flex";


        playerNameInput.value = "";


        score = 0;

        correctAnswers = 0;

        round = 1;

    }
);


console.log(
    "Anime Passaparola caricato correttamente!"
);
