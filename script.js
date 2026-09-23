// ==========================================
// ANIME PASSAPAROLA
// SCRIPT COMPLETO
// ==========================================


// ==========================================
// SCHERMATE
// ==========================================

const menuScreen =
    document.getElementById("menuScreen");

const playerScreen =
    document.getElementById("playerScreen");

const adminLoginScreen =
    document.getElementById("adminLoginScreen");

const adminScreen =
    document.getElementById("adminScreen");

const questionEditorScreen =
    document.getElementById("questionEditorScreen");

const gameScreen =
    document.getElementById("gameScreen");

const questionScreen =
    document.getElementById("questionScreen");

const endScreen =
    document.getElementById("endScreen");


// ==========================================
// MENU
// ==========================================

const startButton =
    document.getElementById("startButton");

const rankingButton =
    document.getElementById("rankingButton");

const adminButton =
    document.getElementById("adminButton");


// ==========================================
// GIOCATORE
// ==========================================

const playerNameInput =
    document.getElementById("playerName");

const continueButton =
    document.getElementById("continueButton");

const playerNameDisplay =
    document.getElementById("playerNameDisplay");


// ==========================================
// ADMIN
// ==========================================

const adminPassword =
    document.getElementById("adminPassword");

const adminLoginButton =
    document.getElementById("adminLoginButton");

const adminBackButton =
    document.getElementById("adminBackButton");

const editQuestionsButton =
    document.getElementById("editQuestionsButton");

const adminRankingButton =
    document.getElementById("adminRankingButton");

const clearRankingButton =
    document.getElementById("clearRankingButton");

const adminBackToMenuButton =
    document.getElementById("adminBackToMenuButton");


// ==========================================
// EDITOR
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
// CONFIGURAZIONE
// ==========================================

const ADMIN_PASSWORD =
    "admin123";

const API_BASE =
    "";

const GAME_STATE_KEY =
    "animePassaparolaGameState_v6";


// ==========================================
// STATO GIOCO
// ==========================================

let playerName = "";

let score = 0;

let correctAnswers = 0;

let currentLetter = "";

let round = 1;

let timer = null;

let returnTimer = null;

let timeLeft = 30;

let activeQuestion = false;

let questionOpenedAt = null;

let editingLetter = "A";

let gameFinished = false;

let gameBooting = true;

let autosaveTimer = null;


// ==========================================
// LETTERE
// ==========================================

const LETTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const letterStatus = {};

const replacementLetters = {};


// ==========================================
// INIZIALIZZA LETTERE
// ==========================================

for (
    const letter of LETTERS
) {

    letterStatus[letter] =
        "pending";

}


// ==========================================
// DOMANDE PRINCIPALI
// ==========================================

const defaultQuestions = {

    A: {
        question:
            "Organizzazione criminale composta da ninja ricercati di alto livello",
        acceptedAnswers: [
            "AKATSUKI"
        ],
        correctDisplay:
            "AKATSUKI"
    },

    B: {
        question:
            "Dōjutsu caratteristico del clan Hyūga",
        acceptedAnswers: [
            "BYAKUGAN"
        ],
        correctDisplay:
            "BYAKUGAN"
    },

    C: {
        question:
            "Grado con Esame famoso e arco della prima serie",
        acceptedAnswers: [
            "CHŪNIN"
        ],
        correctDisplay:
            "CHŪNIN"
    },

    D: {
        question:
            "Anziano consigliere di Konoha, ex leader della Radice",
        acceptedAnswers: [
            "DANZŌ SHIMURA"
        ],
        correctDisplay:
            "DANZŌ SHIMURA"
    },

    E: {
        question:
            "Tecnica proibita che permette di riportare in vita i morti come guerrieri sotto il controllo dell’utilizzatore.",
        acceptedAnswers: [
            "EDO TENSEI"
        ],
        correctDisplay:
            "EDO TENSEI"
    },

    F: {
        question:
            "Jinchūriki del Sette Code e kunoichi del Villaggio della Cascata.",
        acceptedAnswers: [
            "FŪ"
        ],
        correctDisplay:
            "FŪ"
    },

    G: {
        question:
            "Gigantesco rospo del Monte Myōboku",
        acceptedAnswers: [
            "GAMABUNTA"
        ],
        correctDisplay:
            "GAMABUNTA"
    },

    H: {
        question:
            "Giovane ninja della Nebbia capace di utilizzare la Tecnica degli Specchi di Ghiaccio.",
        acceptedAnswers: [
            "HAKU"
        ],
        correctDisplay:
            "HAKU"
    },

    I: {
        question:
            "Fratello maggiore di Sasuke e membro del clan Uchiha.",
        acceptedAnswers: [
            "ITACHI UCHIHA"
        ],
        correctDisplay:
            "ITACHI UCHIHA"
    },

    J: {
        question:
            "Autore dei romanzi sulla saga del “Paradiso della Pomiciata”.",
        acceptedAnswers: [
            "JIRAIYA"
        ],
        correctDisplay:
            "JIRAIYA"
    },

    K: {
        question:
            "Fratello adottivo del Quarto Raikage",
        acceptedAnswers: [
            "KILLER B"
        ],
        correctDisplay:
            "KILLER B"
    },

    L: {
        question:
            "Che oggetto hanno usato Naruto e Sakura per distrarre Kakashi durante la prova della “squadra Kakashi”?",
        acceptedAnswers: [
            "LIBRO"
        ],
        correctDisplay:
            "LIBRO"
    },

    M: {
        question:
            "Rivale di Hashirama e protagonista della Quarta Guerra Ninja.",
        acceptedAnswers: [
            "MADARA UCHIHA"
        ],
        correctDisplay:
            "MADARA UCHIHA"
    },

    N: {
        question:
            "Nome del Protagonista della serie di romanzi di Jiraya",
        acceptedAnswers: [
            "NARUTO"
        ],
        correctDisplay:
            "NARUTO"
    },

    O: {
        question:
            "Ninja ossessionato dall’immortalità e dalle tecniche proibite.",
        acceptedAnswers: [
            "OROCHIMARU"
        ],
        correctDisplay:
            "OROCHIMARU"
    },

    P: {
        question:
            "Nome con cui viene conosciuto il leader dell’Akatsuki",
        acceptedAnswers: [
            "PAIN"
        ],
        correctDisplay:
            "PAIN"
    },

    Q: {
        question:
            "Grande conflitto che coinvolge le Cinque Grandi Nazioni Ninja e l’Alleanza Shinobi.",
        acceptedAnswers: [
            "QUARTA GUERRA NINJA"
        ],
        correctDisplay:
            "QUARTA GUERRA NINJA"
    },

    R: {
        question:
            "Tecnica caratteristica di Naruto, sviluppata originariamente da Minato.",
        acceptedAnswers: [
            "RASENGAN"
        ],
        correctDisplay:
            "RASENGAN"
    },

    S: {
        question:
            "Ultimo membro sopravvissuto del clan Uchiha dopo il massacro compiuto da Itachi",
        acceptedAnswers: [
            "SASUKE UCHIHA"
        ],
        correctDisplay:
            "SASUKE UCHIHA"
    },

    T: {
        question:
            "Quinta Hokage di Konoha, appartenente al clan Senju",
        acceptedAnswers: [
            "TSUNADE"
        ],
        correctDisplay:
            "TSUNADE"
    },

    U: {
        question:
            "Clan dagli occhi rossi",
        acceptedAnswers: [
            "UCHIHA"
        ],
        correctDisplay:
            "UCHIHA"
    },

    V: {
        question:
            "Villaggio dei protagonisti della serie.",
        acceptedAnswers: [
            "VILLAGGIO DELLA FOGLIA"
        ],
        correctDisplay:
            "VILLAGGIO DELLA FOGLIA"
    },

    W: {
        question:
            "Kunoichi di Konoha appartenente al Team 15, capace di utilizzare una tecnica che le conferisce caratteristiche feline e un’enorme agilità.",
        acceptedAnswers: [
            "WASABI IZUNO"
        ],
        correctDisplay:
            "WASABI IZUNO"
    },

    X: {
        question:
            "Qual è il nome del gioco di carte collezionabili giocato dai ninja in Boruto?",
        acceptedAnswers: [
            "X Cards"
        ],
        correctDisplay:
            "X Cards"
    },

    Y: {
        question:
            "Quarto Mizukage del Villaggio della Nebbia e jinchūriki del Tre Code.",
        acceptedAnswers: [
            "YAGURA"
        ],
        correctDisplay:
            "YAGURA"
    },

    Z: {
        question:
            "Ninja della Nebbia, uno dei Sette Spadaccini e utilizzatore della gigantesca Kubikiribōchō.",
        acceptedAnswers: [
            "ZABUZA MOMOCHI"
        ],
        correctDisplay:
            "ZABUZA MOMOCHI"
    }

};


// ==========================================
// COPIA DOMANDE
// ==========================================

const questions =
    JSON.parse(
        JSON.stringify(
            defaultQuestions
        )
    );


// ==========================================
// NORMALIZZA RISPOSTA
// ==========================================

function normalizeAnswer(
    value
) {

    return String(
        value || ""
    )
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /[.,!?'\"“”‘’()\-]/g,
            ""
        )
        .replace(
            /\s+/g,
            " "
        );

}// ==========================================
// DOMANDE ALTERNATIVE
// ==========================================

const alternateQuestions = {

    A: {
        question:
            "Quale membro del clan Aburame è un ninja della Foglia e compagno di squadra di Kiba e Hinata?",
        acceptedAnswers: [
            "ABURAME SHINO"
        ],
        correctDisplay:
            "ABURAME SHINO"
    },

    B: {
        question:
            "Come si chiama il dōjutsu del clan Hyūga che permette di vedere il sistema circolatorio del chakra?",
        acceptedAnswers: [
            "BYAKUGAN"
        ],
        correctDisplay:
            "BYAKUGAN"
    },

    C: {
        question:
            "Come viene chiamata l'energia utilizzata dai ninja per eseguire le tecniche?",
        acceptedAnswers: [
            "CHAKRA"
        ],
        correctDisplay:
            "CHAKRA"
    },

    D: {
        question:
            "Quale membro dell'Akatsuki utilizza l'argilla esplosiva per creare le proprie tecniche?",
        acceptedAnswers: [
            "DEIDARA"
        ],
        correctDisplay:
            "DEIDARA"
    },

    E: {
        question:
            "Quale elemento della natura del chakra viene utilizzato da Sasuke per il Chidori?",
        acceptedAnswers: [
            "ELETTRICITA",
            "ELETTRICITÀ"
        ],
        correctDisplay:
            "ELETTRICITÀ"
    },

    F: {
        question:
            "Come viene chiamata la trasformazione della natura del chakra legata all'elemento vento?",
        acceptedAnswers: [
            "FUTON",
            "FŪTON"
        ],
        correctDisplay:
            "FŪTON"
    },

    G: {
        question:
            "Quale maestro del Team Guy è famoso per il suo stile di taijutsu e per l'utilizzo delle Otto Porte?",
        acceptedAnswers: [
            "GAI",
            "MIGHT GUY",
            "GUY"
        ],
        correctDisplay:
            "GAI"
    },

    H: {
        question:
            "Quale kunoichi del clan Hyūga diventa la moglie di Naruto?",
        acceptedAnswers: [
            "HINATA",
            "HINATA HYUGA",
            "HINATA HYŪGA"
        ],
        correctDisplay:
            "HINATA HYŪGA"
    },

    I: {
        question:
            "Quale insegnante dell'Accademia Ninja è una delle prime persone a credere veramente in Naruto?",
        acceptedAnswers: [
            "IRUKA",
            "IRUKA UMINO"
        ],
        correctDisplay:
            "IRUKA UMINO"
    },

    J: {
        question:
            "Quale membro di Taka possiede un'abilità che gli permette di assorbire l'energia naturale?",
        acceptedAnswers: [
            "JUGO",
            "JŪGO"
        ],
        correctDisplay:
            "JŪGO"
    },

    K: {
        question:
            "Quale jōnin è il maestro del Team 8, composto da Hinata, Kiba e Shino?",
        acceptedAnswers: [
            "KURENAI",
            "KURENAI YUHI",
            "KURENAI YŪHI"
        ],
        correctDisplay:
            "KURENAI YŪHI"
    },

    L: {
        question:
            "Quale membro del Team Guy è famoso per il suo allenamento basato quasi esclusivamente sul taijutsu?",
        acceptedAnswers: [
            "LEE",
            "ROCK LEE"
        ],
        correctDisplay:
            "LEE"
    },

    M: {
        question:
            "Quale maestro del Team Guy è famoso per le Otto Porte Interiori?",
        acceptedAnswers: [
            "MIGHT GUY",
            "GUY"
        ],
        correctDisplay:
            "MIGHT GUY"
    },

    N: {
        question:
            "Quale membro del clan Hyūga è il cugino di Hinata e viene considerato un prodigio del clan?",
        acceptedAnswers: [
            "NEJI",
            "NEJI HYUGA",
            "NEJI HYŪGA"
        ],
        correctDisplay:
            "NEJI HYŪGA"
    },

    O: {
        question:
            "Quale membro degli Uchiha si presenta per molto tempo con l'identità di Tobi?",
        acceptedAnswers: [
            "OBITO",
            "OBITO UCHIHA"
        ],
        correctDisplay:
            "OBITO UCHIHA"
    },

    P: {
        question:
            "Quale cane ninja viene spesso evocato da Kakashi per seguire le tracce?",
        acceptedAnswers: [
            "PAKKUN"
        ],
        correctDisplay:
            "PAKKUN"
    },

    Q: {
        question:
            "Quale titolo ricopre Tsunade quando diventa leader del Villaggio della Foglia?",
        acceptedAnswers: [
            "QUINTO HOKAGE",
            "QUINTA HOKAGE"
        ],
        correctDisplay:
            "QUINTA HOKAGE"
    },

    R: {
        question:
            "Quale ninja della Foglia è famoso per il suo taijutsu e per non poter utilizzare normalmente ninjutsu e genjutsu?",
        acceptedAnswers: [
            "ROCK LEE",
            "LEE"
        ],
        correctDisplay:
            "ROCK LEE"
    },

    S: {
        question:
            "Quale membro del Team 10 è famoso per la sua grande abilità strategica e per le tecniche dell'ombra?",
        acceptedAnswers: [
            "SHIKAMARU",
            "SHIKAMARU NARA"
        ],
        correctDisplay:
            "SHIKAMARU NARA"
    },

    T: {
        question:
            "Quale kunoichi di Suna combatte utilizzando un enorme ventaglio e tecniche di vento?",
        acceptedAnswers: [
            "TEMARI"
        ],
        correctDisplay:
            "TEMARI"
    },

    U: {
        question:
            "Qual è il cognome del clan di Naruto?",
        acceptedAnswers: [
            "UZUMAKI",
            "CLAN UZUMAKI"
        ],
        correctDisplay:
            "UZUMAKI"
    },

    V: {
        question:
            "Come viene chiamato il Villaggio della Nebbia nella traduzione italiana?",
        acceptedAnswers: [
            "VILLAGGIO DELLA NEBBIA"
        ],
        correctDisplay:
            "VILLAGGIO DELLA NEBBIA"
    },

    W: {
        question:
            "Qual era il soprannome di Sakumo Hatake, padre di Kakashi?",
        acceptedAnswers: [
            "WHITE FANG"
        ],
        correctDisplay:
            "WHITE FANG"
    },

    X: {
        question:
            "Come viene chiamato il gioco di carte collezionabili che compare nel mondo di Boruto?",
        acceptedAnswers: [
            "X CARDS"
        ],
        correctDisplay:
            "X Cards"
    },

    Y: {
        question:
            "Quale kunoichi del Team 10 appartiene al clan Yamanaka?",
        acceptedAnswers: [
            "YAMANAKA INO",
            "INO YAMANAKA",
            "INO"
        ],
        correctDisplay:
            "YAMANAKA INO"
    },

    Z: {
        question:
            "Quale membro dell'Akatsuki è caratterizzato da una parte bianca e una parte nera del corpo?",
        acceptedAnswers: [
            "ZETSU"
        ],
        correctDisplay:
            "ZETSU"
    }

};


// ==========================================
// OTTIENI DOMANDA
// ==========================================

function getQuestionForLetter(
    letter
) {

    if (
        round === 2 &&
        replacementLetters[letter] &&
        alternateQuestions[letter]
    ) {

        return alternateQuestions[
            letter
        ];

    }

    return questions[
        letter
    ];

}


// ==========================================
// SALVA DOMANDE
// ==========================================

function saveQuestions() {

    return true;

}


// ==========================================
// MENU
// ==========================================

startButton.addEventListener(
    "click",
    () => {

        menuScreen.style.display =
            "none";

        playerScreen.style.display =
            "flex";

        playerNameInput.focus();

    }
);


// ==========================================
// ADMIN
// ==========================================

adminButton.addEventListener(
    "click",
    () => {

        menuScreen.style.display =
            "none";

        adminLoginScreen.style.display =
            "flex";

        adminPassword.value =
            "";

        adminPassword.focus();

    }
);


adminBackButton.addEventListener(
    "click",
    () => {

        adminLoginScreen.style.display =
            "none";

        menuScreen.style.display =
            "flex";

    }
);


adminLoginButton.addEventListener(
    "click",
    loginAdmin
);


adminPassword.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Enter"
        ) {

            loginAdmin();

        }

    }
);


function loginAdmin() {

    if (
        adminPassword.value ===
        ADMIN_PASSWORD
    ) {

        adminLoginScreen.style.display =
            "none";

        adminScreen.style.display =
            "flex";

        adminPassword.value =
            "";

    } else {

        alert(
            "❌ Password errata."
        );

        adminPassword.value =
            "";

        adminPassword.focus();

    }

}


// ==========================================
// EDITOR
// ==========================================

editQuestionsButton.addEventListener(
    "click",
    () => {

        adminScreen.style.display =
            "none";

        questionEditorScreen.style.display =
            "flex";

        createLetterSelector();

        loadQuestionIntoEditor(
            editingLetter
        );

    }
);


function createLetterSelector() {

    letterSelector.innerHTML =
        "";

    for (
        const letter of
        LETTERS
    ) {

        const button =
            document.createElement(
                "button"
            );

        button.type =
            "button";

        button.textContent =
            letter;

        if (
            letter ===
            editingLetter
        ) {

            button.classList.add(
                "active"
            );

        }

        button.addEventListener(
            "click",
            () => {

                editingLetter =
                    letter;

                createLetterSelector();

                loadQuestionIntoEditor(
                    letter
                );

            }
        );

        letterSelector.appendChild(
            button
        );

    }

}


function loadQuestionIntoEditor(
    letter
) {

    const data =
        questions[
            letter
        ];

    if (!data) {

        return;

    }

    editQuestion.value =
        data.question;

    editAnswer.value =
        data.correctDisplay;

    editAcceptedAnswers.value =
        data.acceptedAnswers.join(
            "\n"
        );

}


// ==========================================
// SALVA DOMANDA ADMIN
// ==========================================

saveQuestionButton.addEventListener(
    "click",
    () => {

        const question =
            editQuestion.value.trim();

        const answer =
            editAnswer.value.trim();

        const accepted =
            editAcceptedAnswers.value
                .split("\n")
                .map(
                    value =>
                        value.trim()
                )
                .filter(
                    Boolean
                );

        if (
            !question ||
            !answer ||
            !accepted.length
        ) {

            alert(
                "Compila tutti i campi."
            );

            return;

        }

        questions[
            editingLetter
        ] = {

            question,

            acceptedAnswers:
                accepted,

            correctDisplay:
                answer

        };

        saveQuestions();

        alert(
            "✅ Domanda salvata."
        );

    }
);


// ==========================================
// RESET DOMANDA
// ==========================================

resetQuestionButton.addEventListener(
    "click",
    () => {

        questions[
            editingLetter
        ] =
            JSON.parse(
                JSON.stringify(
                    defaultQuestions[
                        editingLetter
                    ]
                )
            );

        loadQuestionIntoEditor(
            editingLetter
        );

        saveQuestions();

    }
);


// ==========================================
// CHIUDI EDITOR
// ==========================================

closeEditorButton.addEventListener(
    "click",
    () => {

        questionEditorScreen.style.display =
            "none";

        adminScreen.style.display =
            "flex";

    }
);


// ==========================================
// ADMIN → MENU
// ==========================================

adminBackToMenuButton.addEventListener(
    "click",
    () => {

        adminScreen.style.display =
            "none";

        menuScreen.style.display =
            "flex";

    }
);// ==========================================
// START PARTITA
// ==========================================

continueButton.addEventListener(
    "click",
    startGame
);


playerNameInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Enter"
        ) {

            startGame();

        }

    }
);


function startGame() {

    const name =
        playerNameInput.value.trim();

    if (!name) {

        alert(
            "Inserisci il tuo nome."
        );

        return;

    }


    clearSavedGameState();


    playerName =
        name.slice(
            0,
            20
        );

    score = 0;

    correctAnswers = 0;

    round = 1;

    currentLetter = "";

    activeQuestion = false;

    questionOpenedAt = null;

    gameFinished = false;


    for (
        const letter of
        LETTERS
    ) {

        letterStatus[
            letter
        ] = "pending";

        delete replacementLetters[
            letter
        ];

    }


    playerNameDisplay.textContent =
        playerName;

    updateScore();

    createLetters();


    playerScreen.style.display =
        "none";

    gameScreen.style.display =
        "flex";


    saveGameState();

}


// ==========================================
// PUNTEGGIO
// ==========================================

function updateScore() {

    scoreDisplay.textContent =
        score;

    if (
        topScoreDisplay
    ) {

        topScoreDisplay.textContent =
            score;

    }

}


// ==========================================
// CREA RUOTA
// ==========================================

function createLetters() {

    lettersContainer.innerHTML =
        "";

    LETTERS
        .split("")
        .forEach(
            (
                letter,
                index
            ) => {

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "letter";

                button.textContent =
                    letter;

                button.dataset.letter =
                    letter;


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


                if (
                    canPlayLetter(
                        letter
                    )
                ) {

                    button.addEventListener(
                        "click",
                        () => {

                            openQuestion(
                                letter
                            );

                        }
                    );

                } else {

                    button.disabled =
                        true;

                }


                lettersContainer.appendChild(
                    button
                );

            }
        );

}


// ==========================================
// LETTERA GIOCABILE
// ==========================================

function canPlayLetter(
    letter
) {

    if (
        round === 1
    ) {

        return (
            letterStatus[
                letter
            ] === "pending"
        );

    }


    if (
        round === 2
    ) {

        return (
            letterStatus[
                letter
            ] === "passed"
        );

    }


    return false;

}


// ==========================================
// STILE LETTERA
// ==========================================

function updateLetterStyle(
    button,
    letter
) {

    button.classList.remove(
        "correct",
        "wrong",
        "passed"
    );


    const status =
        letterStatus[
            letter
        ];


    if (
        status ===
        "correct"
    ) {

        button.classList.add(
            "correct"
        );

    }


    if (
        status ===
        "wrong"
    ) {

        button.classList.add(
            "wrong"
        );

    }


    if (
        status ===
        "passed"
    ) {

        button.classList.add(
            "passed"
        );

    }

}


// ==========================================
// APRI DOMANDA
// ==========================================

function openQuestion(
    letter
) {

    const data =
        getQuestionForLetter(
            letter
        );

    if (!data) {

        return;

    }


    clearInterval(
        timer
    );

    clearTimeout(
        returnTimer
    );


    currentLetter =
        letter;

    activeQuestion =
        true;

    questionOpenedAt =
        Date.now();


    questionLetter.textContent =
        letter;

    questionText.textContent =
        data.question;


    answerInput.value =
        "";

    answerInput.disabled =
        false;

    submitButton.disabled =
        false;

    passButton.disabled =
        false;


    resultMessage.textContent =
        "";

    resultMessage.className =
        "";


    timeLeft =
        30;

    updateTimerDisplay();


    gameScreen.style.display =
        "none";

    questionScreen.style.display =
        "flex";


    answerInput.focus();


    startTimer();

    saveGameState();

}


// ==========================================
// TIMER
// ==========================================

function startTimer() {

    clearInterval(
        timer
    );


    timeLeft =
        30;

    updateTimerDisplay();


    timer =
        setInterval(
            () => {

                timeLeft--;

                updateTimerDisplay();


                if (
                    timeLeft <=
                    0
                ) {

                    clearInterval(
                        timer
                    );

                    timeExpired();

                }

            },
            1000
        );

}


function updateTimerDisplay() {

    timerDisplay.textContent =
        timeLeft;

}


// ==========================================
// TEMPO SCADUTO
// ==========================================

function timeExpired() {

    if (
        !activeQuestion ||
        !currentLetter
    ) {

        return;

    }


    clearInterval(
        timer
    );


    const letter =
        currentLetter;

    const data =
        getQuestionForLetter(
            letter
        );


    activeQuestion =
        false;

    questionOpenedAt =
        null;


    letterStatus[
        letter
    ] = "wrong";


    score =
        Math.max(
            0,
            score - 1
        );


    resultMessage.textContent =
        `⏰ Tempo scaduto! Risposta: ${data.correctDisplay}`;

    resultMessage.className =
        "wrong";


    updateScore();

    disableQuestionControls();

    saveGameState();


    returnTimer =
        setTimeout(
            closeQuestion,
            1800
        );

}


// ==========================================
// INVIA RISPOSTA
// ==========================================

submitButton.addEventListener(
    "click",
    submitAnswer
);


answerInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Enter"
        ) {

            submitAnswer();

        }

    }
);


function submitAnswer() {

    if (
        !activeQuestion ||
        !currentLetter
    ) {

        return;

    }


    const answer =
        normalizeAnswer(
            answerInput.value
        );


    if (!answer) {

        return;

    }


    clearInterval(
        timer
    );


    const letter =
        currentLetter;

    const data =
        getQuestionForLetter(
            letter
        );


    const correct =
        data.acceptedAnswers.some(
            accepted =>

                normalizeAnswer(
                    accepted
                ) ===
                answer
        );


    activeQuestion =
        false;

    questionOpenedAt =
        null;


    if (correct) {

        letterStatus[
            letter
        ] = "correct";

        score += 1;

        correctAnswers += 1;


        resultMessage.textContent =
            "✅ CORRETTO!";

        resultMessage.className =
            "correct";

    } else {

        letterStatus[
            letter
        ] = "wrong";

        score =
            Math.max(
                0,
                score - 1
            );


        resultMessage.textContent =
            `❌ SBAGLIATO! Risposta corretta: ${data.correctDisplay}`;

        resultMessage.className =
            "wrong";

    }


    updateScore();

    disableQuestionControls();

    saveGameState();


    returnTimer =
        setTimeout(
            closeQuestion,
            1800
        );

}


// ==========================================
// PASSA
// ==========================================

passButton.addEventListener(
    "click",
    passQuestion
);


function passQuestion() {

    if (
        !activeQuestion ||
        !currentLetter
    ) {

        return;

    }


    clearInterval(
        timer
    );


    const letter =
        currentLetter;


    letterStatus[
        letter
    ] = "passed";


    // Nel primo giro questa lettera
    // dovrà avere una domanda diversa
    // nel secondo giro.

    if (
        round === 1
    ) {

        replacementLetters[
            letter
        ] = true;

    }


    activeQuestion =
        false;

    questionOpenedAt =
        null;


    resultMessage.textContent =
        "⏭️ PASSATA";

    resultMessage.className =
        "passed";


    disableQuestionControls();

    saveGameState();


    returnTimer =
        setTimeout(
            closeQuestion,
            1000
        );

}


// ==========================================
// DISABILITA CONTROLLI
// ==========================================

function disableQuestionControls() {

    answerInput.disabled =
        true;

    submitButton.disabled =
        true;

    passButton.disabled =
        true;

}


// ==========================================
// CHIUDI DOMANDA
// ==========================================

function closeQuestion() {

    clearInterval(
        timer
    );

    clearTimeout(
        returnTimer
    );


    activeQuestion =
        false;

    questionOpenedAt =
        null;

    currentLetter =
        "";


    questionScreen.style.display =
        "none";

    gameScreen.style.display =
        "flex";


    createLetters();

    saveGameState();

    checkRound();

}


// ==========================================
// CONTROLLO ROUND
// ==========================================

function checkRound() {

    const pending =
        Object.keys(
            letterStatus
        ).filter(
            letter =>
                letterStatus[
                    letter
                ] === "pending"
        );


    const passed =
        Object.keys(
            letterStatus
        ).filter(
            letter =>
                letterStatus[
                    letter
                ] === "passed"
        );


    // ======================================
    // FINE PRIMO GIRO
    // ======================================

    if (
        round === 1 &&
        pending.length === 0
    ) {

        if (
            passed.length > 0
        ) {

            round =
                2;


            createLetters();

            saveGameState();


            setTimeout(
                () => {

                    alert(
                        "🔄 SECONDO GIRO!\n\nOra puoi rispondere alle domande che hai passato."
                    );

                },
                100
            );


            return;

        }


        endGame();

        return;

    }


    // ======================================
    // FINE SECONDO GIRO
    // ======================================

    if (
        round === 2 &&
        passed.length === 0
    ) {

        endGame();

    }

}


// ==========================================
// FINE PARTITA
// ==========================================

function endGame() {

    if (
        gameFinished
    ) {

        return;

    }


    gameFinished =
        true;

    activeQuestion =
        false;

    questionOpenedAt =
        null;


    clearInterval(
        timer
    );

    clearTimeout(
        returnTimer
    );

    stopAutosave();

    clearSavedGameState();


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


    saveResult();

}// ==========================================
// SALVA RISULTATO
// ==========================================

async function saveResult() {

    if (
        !playerName
    ) {

        return;

    }


    try {

        const response =
            await fetch(
                `${API_BASE}/api/players`,
                {
                    method:
                        "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            username:
                                playerName,

                            score:
                                score
                        })
                }
            );


        if (
            !response.ok
        ) {

            throw new Error(
                "Errore salvataggio risultato."
            );

        }

    } catch (error) {

        console.error(
            "Errore salvataggio risultato:",
            error
        );

    }

}


// ==========================================
// CLASSIFICA
// ==========================================

rankingButton.addEventListener(
    "click",
    showRanking
);


adminRankingButton.addEventListener(
    "click",
    showRanking
);


async function showRanking() {

    try {

        const response =
            await fetch(
                `${API_BASE}/api/players`
            );


        const result =
            await response.json();


        if (
            !response.ok ||
            !result.success
        ) {

            throw new Error(
                result.error ||
                "Errore caricamento classifica."
            );

        }


        const players =
            Array.isArray(
                result.players
            )
                ? result.players
                : [];


        players.sort(
            (
                first,
                second
            ) =>

                Number(
                    second.score || 0
                ) -

                Number(
                    first.score || 0
                )
        );


        let modal =
            document.getElementById(
                "rankingModal"
            );


        if (!modal) {

            modal =
                document.createElement(
                    "div"
                );

            modal.id =
                "rankingModal";


            modal.innerHTML = `

                <div
                    class="ranking-overlay"
                >

                    <div
                        class="ranking-panel"
                    >

                        <button
                            class="ranking-close"
                        >
                            ×
                        </button>

                        <div
                            class="ranking-header"
                        >

                            <div
                                class="ranking-trophy"
                            >
                                🏆
                            </div>

                            <h2>
                                CLASSIFICA
                            </h2>

                            <p>
                                ANIME PASSAPAROLA
                            </p>

                        </div>

                        <div
                            class="ranking-list"
                        ></div>

                    </div>

                </div>

            `;


            document.body.appendChild(
                modal
            );


            const style =
                document.createElement(
                    "style"
                );


            style.textContent = `

                #rankingModal {

                    position: fixed;

                    inset: 0;

                    z-index: 99999;

                    display: none;

                }

                #rankingModal
                .ranking-overlay {

                    position: absolute;

                    inset: 0;

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    padding: 20px;

                    background:
                        rgba(
                            0,
                            0,
                            0,
                            0.80
                        );

                    backdrop-filter:
                        blur(7px);

                }

                #rankingModal
                .ranking-panel {

                    position: relative;

                    width:
                        min(
                            620px,
                            100%
                        );

                    max-height:
                        90vh;

                    overflow: hidden;

                    border-radius: 24px;

                    padding: 30px 22px;

                    background:
                        linear-gradient(
                            145deg,
                            #17152b,
                            #0d0c18
                        );

                    color: white;

                    box-shadow:
                        0 25px 80px
                        rgba(
                            0,
                            0,
                            0,
                            0.65
                        );

                }

                #rankingModal
                .ranking-close {

                    position: absolute;

                    top: 12px;

                    right: 12px;

                    width: 42px;

                    height: 42px;

                    border: 0;

                    border-radius: 50%;

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            0.10
                        );

                    color: white;

                    font-size: 28px;

                    cursor: pointer;

                }

                #rankingModal
                .ranking-header {

                    text-align: center;

                    margin-bottom: 20px;

                }

                #rankingModal
                .ranking-trophy {

                    font-size: 42px;

                }

                #rankingModal
                h2 {

                    margin: 5px 0;

                }

                #rankingModal
                .ranking-header p {

                    margin: 0;

                    opacity: 0.6;

                    letter-spacing: 3px;

                    font-size: 12px;

                }

                #rankingModal
                .ranking-list {

                    max-height:
                        65vh;

                    overflow-y: auto;

                }

                #rankingModal
                .ranking-row {

                    display: flex;

                    align-items: center;

                    gap: 12px;

                    min-height: 60px;

                    margin: 8px 0;

                    padding: 10px 14px;

                    border-radius: 15px;

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            0.06
                        );

                }

                #rankingModal
                .ranking-position {

                    width: 40px;

                    text-align: center;

                    font-weight: 900;

                }

                #rankingModal
                .ranking-name {

                    flex: 1;

                    overflow: hidden;

                    text-overflow: ellipsis;

                    white-space: nowrap;

                    font-weight: 700;

                }

                #rankingModal
                .ranking-score {

                    font-weight: 900;

                }

                #rankingModal
                .ranking-empty {

                    text-align: center;

                    padding: 30px;

                    opacity: 0.7;

                }

            `;


            document.head.appendChild(
                style
            );


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
                    event => {

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


        const list =
            modal.querySelector(
                ".ranking-list"
            );


        list.innerHTML =
            "";


        if (
            players.length === 0
        ) {

            list.innerHTML = `

                <div
                    class="ranking-empty"
                >

                    📝

                    <br><br>

                    Non ci sono ancora
                    partite registrate.

                </div>

            `;

        } else {

            players.forEach(
                (
                    player,
                    index
                ) => {

                    const row =
                        document.createElement(
                            "div"
                        );


                    row.className =
                        "ranking-row";


                    const position =
                        index + 1;


                    let medal =
                        position === 1
                            ? "🥇"
                            : position === 2
                                ? "🥈"
                                : position === 3
                                    ? "🥉"
                                    : position;


                    row.innerHTML = `

                        <div
                            class="ranking-position"
                        >
                            ${medal}
                        </div>

                        <div
                            class="ranking-name"
                        ></div>

                        <div
                            class="ranking-score"
                        >
                            ${
                                Number(
                                    player.score || 0
                                )
                            }/26
                        </div>

                    `;


                    row.querySelector(
                        ".ranking-name"
                    ).textContent =
                        String(
                            player.username ||
                            "Giocatore"
                        );


                    list.appendChild(
                        row
                    );

                }
            );

        }


        modal.style.display =
            "block";


    } catch (error) {

        console.error(
            "Errore classifica:",
            error
        );


        alert(
            "❌ Impossibile caricare la classifica.\n\n" +
            error.message
        );

    }

}


// ==========================================
// CANCELLA CLASSIFICA
// ==========================================

clearRankingButton.addEventListener(
    "click",
    async () => {

        const confirmation =
            confirm(
                "⚠️ Sei sicuro di voler cancellare tutta la classifica?"
            );


        if (
            !confirmation
        ) {

            return;

        }


        try {

            const response =
                await fetch(
                    `${API_BASE}/api/players`,
                    {
                        method:
                            "DELETE",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify({
                                password:
                                    ADMIN_PASSWORD
                            })
                    }
                );


            const result =
                await response.json();


            if (
                !response.ok ||
                !result.success
            ) {

                throw new Error(
                    result.error ||
                    "Errore cancellazione."
                );

            }


            alert(
                "✅ Classifica cancellata."
            );


        } catch (error) {

            console.error(
                error
            );


            alert(
                "❌ Errore cancellazione classifica."
            );

        }

    }
);


// ==========================================
// TORNA AL MENU
// ==========================================

returnMenuButton.addEventListener(
    "click",
    () => {

        clearInterval(
            timer
        );

        clearTimeout(
            returnTimer
        );

        stopAutosave();

        clearSavedGameState();


        gameFinished =
            true;

        activeQuestion =
            false;

        currentLetter =
            "";

        score =
            0;

        correctAnswers =
            0;

        round =
            1;


        for (
            const letter of
            LETTERS
        ) {

            letterStatus[
                letter
            ] = "pending";

            delete replacementLetters[
                letter
            ];

        }


        endScreen.style.display =
            "none";

        menuScreen.style.display =
            "flex";


        playerNameInput.value =
            "";

    }
);// ==========================================
// STATO PARTITA
// ==========================================

function buildGameState() {

    return {

        playerName,

        score,

        correctAnswers,

        round,

        currentLetter,

        activeQuestion,

        questionOpenedAt,

        letterStatus:
            {
                ...letterStatus
            },

        replacementLetters:
            {
                ...replacementLetters
            },

        gameFinished,

        savedAt:
            Date.now()

    };

}


// ==========================================
// SALVA STATO
// ==========================================

function saveGameState() {

    if (
        gameFinished ||
        !playerName
    ) {

        return false;

    }


    try {

        localStorage.setItem(
            GAME_STATE_KEY,
            JSON.stringify(
                buildGameState()
            )
        );

        return true;

    } catch (
        error
    ) {

        console.error(
            "Errore salvataggio stato:",
            error
        );

        return false;

    }

}


// ==========================================
// LEGGI STATO
// ==========================================

function readSavedGameState() {

    try {

        const raw =
            localStorage.getItem(
                GAME_STATE_KEY
            );


        if (
            !raw
        ) {

            return null;

        }


        const state =
            JSON.parse(
                raw
            );


        if (
            !state ||
            !state.playerName ||
            !state.letterStatus
        ) {

            return null;

        }


        if (
            state.gameFinished
        ) {

            clearSavedGameState();

            return null;

        }


        return state;

    } catch (
        error
    ) {

        console.error(
            "Errore lettura stato:",
            error
        );

        return null;

    }

}


// ==========================================
// CANCELLA STATO
// ==========================================

function clearSavedGameState() {

    try {

        localStorage.removeItem(
            GAME_STATE_KEY
        );

    } catch (
        error
    ) {

        console.error(
            "Errore cancellazione stato:",
            error
        );

    }

}


// ==========================================
// APPLICA STATO
// ==========================================

function applySavedGameState(
    state
) {

    playerName =
        state.playerName;

    score =
        Number(
            state.score || 0
        );

    correctAnswers =
        Number(
            state.correctAnswers || 0
        );

    round =
        Number(
            state.round || 1
        );


    Object.keys(
        replacementLetters
    ).forEach(
        letter => {

            delete replacementLetters[
                letter
            ];

        }
    );


    Object.assign(
        replacementLetters,
        state.replacementLetters || {}
    );


    for (
        const letter of
        LETTERS
    ) {

        letterStatus[
            letter
        ] =
            state.letterStatus[
                letter
            ] ||
            "pending";

    }


    // ======================================
    // REFRESH DURANTE DOMANDA
    // ======================================

    if (
        state.activeQuestion &&
        state.currentLetter &&
        letterStatus[
            state.currentLetter
        ] === "pending"
    ) {

        const interruptedLetter =
            state.currentLetter;


        letterStatus[
            interruptedLetter
        ] = "passed";


        replacementLetters[
            interruptedLetter
        ] = true;

    }


    currentLetter =
        "";

    activeQuestion =
        false;

    questionOpenedAt =
        null;

    gameFinished =
        false;


    playerNameDisplay.textContent =
        playerName;

    playerNameInput.value =
        playerName;


    updateScore();

    createLetters();


    menuScreen.style.display =
        "none";

    playerScreen.style.display =
        "none";

    adminLoginScreen.style.display =
        "none";

    adminScreen.style.display =
        "none";

    questionEditorScreen.style.display =
        "none";

    questionScreen.style.display =
        "none";

    endScreen.style.display =
        "none";

    gameScreen.style.display =
        "flex";


    saveGameState();

}


// ==========================================
// RIPRISTINA PARTITA
// ==========================================

function restoreSavedGameState() {

    const state =
        readSavedGameState();


    if (
        !state
    ) {

        return false;

    }


    try {

        applySavedGameState(
            state
        );

        return true;

    } catch (
        error
    ) {

        console.error(
            "Errore ripristino:",
            error
        );

        clearSavedGameState();

        return false;

    }

}


// ==========================================
// AUTOSAVE
// ==========================================

function startAutosave() {

    clearInterval(
        autosaveTimer
    );


    autosaveTimer =
        setInterval(
            () => {

                if (
                    !gameBooting &&
                    !gameFinished &&
                    playerName
                ) {

                    saveGameState();

                }

            },
            1000
        );

}


// ==========================================
// STOP AUTOSAVE
// ==========================================

function stopAutosave() {

    clearInterval(
        autosaveTimer
    );

    autosaveTimer =
        null;

}


// ==========================================
// SALVA PRIMA DI USCIRE
// ==========================================

function persistBeforeExit() {

    if (
        !gameBooting &&
        !gameFinished &&
        playerName
    ) {

        saveGameState();

    }

}


// ==========================================
// REFRESH / CHIUSURA
// ==========================================

window.addEventListener(
    "beforeunload",
    persistBeforeExit
);


window.addEventListener(
    "pagehide",
    persistBeforeExit
);


document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState ===
            "hidden"
        ) {

            persistBeforeExit();

        }

    }
);


// ==========================================
// DISCONNESSIONE INTERNET
// ==========================================

window.addEventListener(
    "offline",
    () => {

        if (
            gameBooting ||
            gameFinished ||
            !playerName ||
            !activeQuestion ||
            !currentLetter
        ) {

            return;

        }


        const interruptedLetter =
            currentLetter;


        clearInterval(
            timer
        );

        clearTimeout(
            returnTimer
        );


        // La domanda viene considerata
        // automaticamente passata.

        letterStatus[
            interruptedLetter
        ] = "passed";


        // Nel secondo giro verrà usata
        // la domanda alternativa.

        replacementLetters[
            interruptedLetter
        ] = true;


        activeQuestion =
            false;

        questionOpenedAt =
            null;

        currentLetter =
            "";


        saveGameState();


        questionScreen.style.display =
            "none";

        gameScreen.style.display =
            "flex";


        createLetters();

    }
);


// ==========================================
// ONLINE
// ==========================================

window.addEventListener(
    "online",
    () => {

        console.log(
            "Connessione ripristinata."
        );

    }
);// ==========================================
// AVVIO AUTOMATICO
// ==========================================

// Il controllo viene eseguito alla fine
// del caricamento dello script.
//
// Se esiste una partita salvata:
// - viene ripristinata;
// - se era aperta una domanda,
//   quella domanda viene considerata PASSATA;
// - nel secondo giro viene mostrata
//   la domanda alternativa.
//
// Se non esiste una partita salvata:
// - resta visualizzato il menu.


const restoredGame =
    restoreSavedGameState();


gameBooting =
    false;


startAutosave();


console.log(
    restoredGame
        ? "Anime Passaparola: partita ripristinata."
        : "Anime Passaparola: pronto."
);


// ==========================================
// SICUREZZA EXTRA
// ==========================================

// Se per qualsiasi motivo la pagina
// viene ricaricata mentre una domanda
// è aperta, lo stato salvato contiene:
//
// activeQuestion = true
// currentLetter = la lettera aperta
//
// applySavedGameState() la trasforma
// automaticamente in:
//
// passed
//
// e la inserisce tra le lettere
// che avranno una domanda alternativa
// nel secondo giro.


// ==========================================
// FINE SCRIPT
// ==========================================
