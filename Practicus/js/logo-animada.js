var contador = 1;
var logo = document.querySelector("#img-logo");

function trocarImagem() {
    logo.src = "./img/" + contador + ".png"
    contador++;
    if (contador > 7) {
        contador = 1;
    }
}

const createClock = setInterval(trocarImagem, 75)