numero = parseFloat(prompt('Digite um número:'))
for (let i = 0; i <= 10; i++) {
    document.getElementById('adicao').innerHTML += '<p>'+numero+' + '+i+' = '+(numero+i)+'</p>'
    document.getElementById('subtracao').innerHTML += '<p>'+numero+' - '+i+' = '+(numero-i)+'</p>'
    document.getElementById('multiplicacao').innerHTML += '<p>'+numero+' * '+i+' = '+(numero*i)+'</p>'
    document.getElementById('divisao').innerHTML += '<p>'+numero+' / '+i+' = '+(numero/i)+'</p>'
}