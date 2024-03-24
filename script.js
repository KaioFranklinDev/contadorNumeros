
var containerSaida = document.getElementById('containerSaida')
function executar() {
    var inicio = document.getElementById('inicio').valueAsNumber
    var fim = document.getElementById('fim').valueAsNumber
    var passo = document.getElementById('passo').valueAsNumber
    var resto = 0
    if (passo <= 0 || fim < inicio) {
        alert('confira os dados! Tente novamente!')
    } else {
        containerSaida.innerHTML = `Startou no ${inicio} : ㅤ`
        var i = inicio
        while (i < fim) {
            i = i + passo
            if (i > fim) { break }
            containerSaida.innerHTML += `&#128073; ${i}`
            resto = fim - i
        }
        containerSaida.innerHTML += ` &#127937; E o resto que sobrou é ${resto}`
    }
}
