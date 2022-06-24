function pesoideal() {
    var altura = parseFloat(prompt('Qual a sua altura (em metros)?'));
    var sexo = prompt('Qual o seu sexo? (M/F):');

    try {
        sexo = sexo.toUpperCase();
    } catch (e) {
        alert('Ocorreu um erro ao encontrar o peso ideal');
        return;
    }

    if (sexo == 'M') {
        alert('Seu peso ideal é: '+((72.7*altura)-58)+' kg');
    } else if (sexo == 'F') {
        alert('Seu peso ideal é: '+((62.1*altura)-44.7)+' kg');
    } else {
        alert('Ocorreu um erro ao encontrar o peso ideal');
    };
}
