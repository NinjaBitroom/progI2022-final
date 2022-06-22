function maior() {
    numero1 = parseInt(num1.value)
    numero2 = parseInt(num2.value)
    numero3 = parseInt(num3.value)

    numeros = [numero1, numero2, numero3]
    maior_num = numero1
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > maior_num) {
            maior_num = numeros[index]
        }
    }

    paragrafo.innerText = `O maior número é: ${maior_num}`
}