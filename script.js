//Divs 
    const container = document.getElementById("primario");
    const containersec = document.getElementById("secundario");
//Textos 
    const textopri = document.getElementById("textoprimario");
    const textosec = document.getElementById("textosecundario");
//Var 
    var local = [
        textopri,
        textosec
    ]
//Botões 
    const sim = document.getElementById("yes");
    const nao = document.getElementById("no");
//Audio
    const audio = document.getElementById("mysteryMan")

function loading() {
    setTimeout(() => writer("M.Ebott é visto no horizonte...", local[0], 30),4000)
    setTimeout(() => writer("Você quer escalar?", local[1], 30),6000)
}
loading()

function acessonegado() {
    sim.classList.add("desativar")
    nao.classList.add("desativar");
    audio.play();
    writer(".......", local[0], 1000)
    writer("", local[1], 30)
    setTimeout(() => alert("Acha mesmo que está no controle? Quer tentar a sorte?"), 7000)
    setInterval(() => window.location = "MtEbott.html", 8000)
}

function setBackground() {
    let time = getTime()

    container.classList.add("ativar");
    setTimeout(() => containersec.classList.add("ativar"), 1000)
    
    if (time > 6 || time < 16) {
        container.style.backgroundColor = "#32b9ff"
        containersec.style.backgroundImage = "url('img/Ebott.png')"
    } else if (time > 16 || time < 18) {
        container.style.backgroundColor = "#c08226"
        containersec.style.backgroundImage = "url('img/EbottTarde.png')"
    } else {
        container.style.backgroundColor = "#03151e"
        containersec.style.backgroundImage = "url('img/EbottNoite.png')"
        container.classList.add("noite");
    }
}

setBackground()
function getTime() {
    var hour = new Date()
    let h = hour.getHours()

    return h
}

function writer(text,local, time) {
    local.innerHTML = ""
    for (let i = 0; i <text.length; i++) {
        setTimeout(() => local.innerHTML += text[i], time * i)
    }
}