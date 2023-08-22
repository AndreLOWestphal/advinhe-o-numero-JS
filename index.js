
let numeroComputador
let numerosUsados = []
let tentativas = 0
let maximasTentativas = 8


function novoJogo() {
    window.location.reload()

}

function init(){
    numeroComputador = Math.floor(Math.random() * 100 + 1)
    console.log(numeroComputador) 
}

function numerosComparados() {
    const numeroUsado = Number(document.getElementById('inputBox').value)
    numerosUsados.push(' ' + numeroUsado)
    document.getElementById('guesses').innerHTML = numerosUsados

    if (numeroUsado > 100){
        document.getElementById('textOutput').innerHTML = 'Tente novamente, somente numeros até 100.'
    
        return
    
    }
    if (tentativas < maximasTentativas) {
        
        if (numeroUsado > numeroComputador) {
        document.getElementById('textOutput').innerHTML = 'Seu numero é MAIOR!'
        document.getElementById('inputBox').value = ''
        tentativas++
        document.getElementById('attempts').innerHTML = tentativas

        }
        else if (numeroUsado < numeroComputador) {
        document.getElementById('textOutput').innerHTML = 'Seu numero é MENOR!'
        document.getElementById('inputBox').value = ''
        tentativas++
        document.getElementById('attempts').innerHTML = tentativas

        }
        else {
        document.getElementById('textOutput').innerHTML = 'Você VENCEU!'
        tentativas++
        document.getElementById('attempts').innerHTML = tentativas
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')

        }

    }
    else {
        document.getElementById('textOutput').innerHTML = 'Você PERDEU! O Numero era: ' + numeroComputador
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
    

}    
