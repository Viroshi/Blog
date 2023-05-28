//Booleanos universais
let clique = false

//Textos
const initial = document.getElementById("initial");
const montain = document.getElementById("montain");
const footer = document.querySelector(".footer");

//Botões
const buttons = document.querySelectorAll(".buttons");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

//Fundos
const principal = document.querySelector(".principal")
const background = document.querySelector(".container");
const inicio = document.querySelector(".inicio");

//Efeitos Sonoros
const selectSound = document.getElementById("selectSound");
const selectedSound = document.getElementById("selectedSound");
const mystery = document.getElementById("mystery");

//Arrays
const texts = [initial, montain, yes, no];

const msgs = [
    "Clique em qualquer lugar para continuar",
    "* Você avista o Monte Ebott, deseja escalar?",
    "Sim",
    "Não",
];

//setTimeOut
setTimeout(() => type(0, 0), 3000);

//Cria um efeito de menssagem digitada
function type(m, e) {
    for (let i = 0; i < msgs[m].length; i++) {
        setTimeout(() => (texts[e].innerHTML += msgs[m][i]), 30 * i);
    }
}

//Inicia a página após o clique
function start() {
    background.classList.add("active");
    initial.classList.add("hidden");
    setTimeout(() => type(1, 1), 3500);
    setTimeout(() => type(2, 2), 5500);
    setTimeout(() => type(3, 3), 6000);
    setTimeout(() => footer.classList.add("active"), 6500);
}

//Som ao passar o mouse por todos os botões interativos
function over() {
    selectSound.currentTime = 0;
    selectSound.play();
}

function page(respost) {
    switch (respost) {
        //Som ao clicar no botão de sim
        case 1:
            selectedSound.currentTime = 0;
            selectedSound.play();

            nextPage();
            break;
        //Som ao clicar no botão de não
        case 0:
            mystery.play();
            no.style.visibility = "hidden";
            break;
    }
}

//Que horas são?

function time() {
    var hour = new Date();
    h = hour.getHours();

    setBackground(h);
}

setInterval(() => time(), 1000);

function setBackground(hours) {
    if (hours > 6 && hours < 16) {
        background.classList.add("day");
        inicio.classList.add("day");
    } else if (hours >= 16 && hours < 18) {
        background.classList.add("afternoon");
        inicio.classList.add("afternoon");
    } else {
        principal.classList.add("night");
        background.classList.add("night");
        inicio.classList.add("night");
        buttons.forEach((buttons) => {
            buttons.classList.add("color");
        });
    }
}
