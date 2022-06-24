iniciar.onclick = function() {
    salario = parseFloat(prompt('Digite o seu salario: R$'));
    funcao = prompt('Digite a sua função:');

    if (funcao == 'técnico') {
        novo_salario = salario+(salario*0.5);
    } else if (funcao == 'gerente') {
        novo_salario = salario+(salario*0.3);
    } else {
        novo_salario = salario+(salario*0.2);
    };

    alert('O salário de '+funcao+' que era R$ '+salario+' foi reajustado para R$'+novo_salario);
}
