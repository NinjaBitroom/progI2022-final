iniciar.onclick = function() {

    dividendo = parseInt(prompt('Escolha um número:'));
    divisor = parseInt(prompt('Escolha o divisor:'));
    cpu_divisao = '';

    resto = dividendo;
    divisoes = 0;
    while ((resto-divisor)>=0) {
        resto -= divisor;
        divisoes++;
        cpu_divisao += '-'+divisor;
    };
    alert(dividendo+'/'+divisor+' = '+dividendo+cpu_divisao+' = '+divisoes+' divisões e resto '+resto);
}