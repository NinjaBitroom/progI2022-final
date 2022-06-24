iniciar.onclick = function() {
    numero = parseFloat(prompt('Digite um número:'));
    if (numero > 0) {
        alert('A raiz de '+numero+' é '+(Math.sqrt(numero)));
    } else if (numero < 0) {
        alert('O número '+numero+' ao quadrado é '+(numero**2));
    } else {
        alert('O número é '+numero);
    };
}