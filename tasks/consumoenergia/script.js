calculo.onclick = function(e){
    e.preventDefault()
    gasto = parseInt(leituraatual.value)-parseInt(leituraanterior.value)
    if (baixarenda.checked) {
        consumo.value = `R$ ${gasto*0.41}`
    } else {
        consumo.value = `R$ ${gasto*0.76}`
    }
}