const relogio = document.getElementById("relogio")

function atualizarRelogio() {
    relogio.textContent = new Date().toLocaleTimeString()
}

setInterval(atualizarRelogio, 1000)