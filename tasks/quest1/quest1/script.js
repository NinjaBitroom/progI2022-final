verificador = document.querySelector('#verificador')
verificador.onclick = function() {
    var feminino = false
    for (let index = 0; index < sexo.length; index++) {
        if (sexo[index].value == 'F' && sexo[index].selected){
            feminino = true
        }
    }
    if (feminino && (parseInt(idade.value)<25)) {
        mensagem.innerText = `${nome.value} ACEITA`
    } else {
        mensagem.innerText = `${nome.value} NÃO ACEITA`
    }
}