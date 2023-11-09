var clique = false;
function alerta() {
    alert("Estou empregado no momento");
}
function fotoCinza(tipo) {
    if (!clique) {
        if (tipo == 1) {
            document.getElementById("foto_perfil").style.webkitFilter = "grayscale(1)";
        }
        if (tipo == 2) {
            document.getElementById("foto_perfil").style.webkitFilter = "grayscale(0)";
        }
        if (tipo == 3) {
            document.getElementById("foto_perfil").style.webkitFilter = "grayscale(1)";
            clique = true;
        }
    }
}

function writeDateIntoElementById() {
    element = document.getElementById("elementToShowDateId");
    element.innerText = `Acessado em: ${new Date().toLocaleString()}`;
}

window.onload = writeDateIntoElementById;

function felizometro(){
    var valor = parseInt(document.getElementById('cFel').value);
    if (valor == 0 || valor < 2) {
        document.getElementById("icone").src = "fotos/emoji-triste.png";
    } else if (valor < 4) {
        document.getElementById("icone").src = "fotos/emoji-normal.png";
    } else {
        document.getElementById("icone").src = "fotos/emoji-feliz.png";
    }
}