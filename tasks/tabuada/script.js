iniciar.onclick = function() {
    numero = parseFloat(prompt('Digite um número:'))
    paragrafos = document.querySelectorAll('.card div p')
    for (let i = 0; i < paragrafos.length; i++) {
        const paragrafo = paragrafos[i];
        paragrafo.remove()
    }
    for (let i = 0; i <= 10; i++) {
        document.getElementById('adicao').innerHTML += '<p>'+numero+' + '+i+' = '+(numero+i)+'</p>'
        document.getElementById('subtracao').innerHTML += '<p>'+numero+' - '+i+' = '+(numero-i)+'</p>'
        document.getElementById('multiplicacao').innerHTML += '<p>'+numero+' * '+i+' = '+(numero*i)+'</p>'
        document.getElementById('divisao').innerHTML += '<p>'+numero+' / '+i+' = '+(numero/i)+'</p>'
    }
}