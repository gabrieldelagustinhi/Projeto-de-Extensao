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