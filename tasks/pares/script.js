function par() {
    numero1 = parseInt(prompt('Digite um número:'))
    numero2 = parseInt(prompt('Digite outro número:'))

    resultado = 'Números pares: '
    if (numero1 < numero2) {
        for (let i = numero1; i <= numero2; i++) {
            if (i%2==0) {
                resultado += i+' '
            }
        }
    } else if (numero1 > numero2) {
        for (let i = numero2; i <= numero1; i++) {
            if (i%2==0) {
                resultado += i+' '
            }
        }
    } else {
        resultado = 'Digite números diferentes!'
    }

    alert(resultado)
}
