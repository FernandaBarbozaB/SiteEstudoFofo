// Seleciona os elementos
const timerDisplay = document.getElementById("timer");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const bichinho = document.getElementById("bichinho"); // Seleciona o bichinho

let timerInterval;
let isRunning = false;
let elapsedTime = 0; // Tempo em milissegundos

// URLs das imagens
const imgDormindo = "https://i.pinimg.com/originals/05/29/4f/05294f4a4d240a5e37a9f224c153d8f8.gif"; // Substitua pelo link da imagem dormindo
const imgAcordado = "https://i.pinimg.com/originals/a0/ea/88/a0ea88ddb553430ee5d98447dcc5ec59.gif"; // Substitua pelo link da imagem acordado

// Função para formatar o tempo
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}

// Função para atualizar o display
function updateTimer() {
    timerDisplay.textContent = formatTime(elapsedTime);
}

// Função para alternar a imagem do bichinho
function atualizarImagem() {
    if (isRunning) {
        bichinho.src = imgAcordado; // Mostra o bichinho acordado
    } else {
        bichinho.src = imgDormindo; // Mostra o bichinho dormindo
    }
}

// Função para iniciar/pausar o cronômetro
startPauseBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timerInterval);
        startPauseBtn.textContent = "Iniciar";
    } else {
        const startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateTimer();
        }, 1000);
        startPauseBtn.textContent = "Pausar";
    }
    isRunning = !isRunning;
    atualizarImagem(); // Atualiza a imagem ao clicar no botão
});

// Função para resetar o cronômetro
resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateTimer();
    startPauseBtn.textContent = "Iniciar";
    isRunning = false;
    atualizarImagem(); // Atualiza a imagem ao resetar
});

// Inicializa o display e imagem
updateTimer();
atualizarImagem();

// Seleciona os elementos
const calendarBtn = document.getElementById("calendarBtn");
const calendarModal = document.getElementById("calendarModal");
const closeCalendar = document.getElementById("closeCalendar");

// Abre o modal ao clicar no botão
calendarBtn.addEventListener("click", () => {
  calendarModal.style.display = "block";
});

// Fecha o modal ao clicar no "x"
closeCalendar.addEventListener("click", () => {
  calendarModal.style.display = "none";
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", (event) => {
  if (event.target === calendarModal) {
    calendarModal.style.display = "none";
  }
});
