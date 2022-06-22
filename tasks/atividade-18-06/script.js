let corAtual = 'nenhum'

rbranco.onclick = function(){
    corAtual = 'branco'
    selecionados = document.getElementsByClassName('selecionado')
    for (let i = 0; i < selecionados.length; i++) {
        selecionados[i].classList.remove('selecionado');
    }
    rbranco.classList.add('selecionado')
}
rverde.onclick = function(){
    corAtual = 'verde'
    selecionados = document.getElementsByClassName('selecionado')
    for (let i = 0; i < selecionados.length; i++) {
        selecionados[i].classList.remove('selecionado');
    }
    rverde.classList.add('selecionado')
}
rrosa.onclick = function(){
    corAtual = 'rosa'
    selecionados = document.getElementsByClassName('selecionado')
    for (let i = 0; i < selecionados.length; i++) {
        selecionados[i].classList.remove('selecionado');
    }
    rrosa.classList.add('selecionado')
}
ramarelo.onclick = function(){
    corAtual = 'amarelo'
    selecionados = document.getElementsByClassName('selecionado')
    for (let i = 0; i < selecionados.length; i++) {
        selecionados[i].classList.remove('selecionado');
    }
    ramarelo.classList.add('selecionado')
}
rescuro.onclick = function(){
    corAtual = 'escuro'
    selecionados = document.getElementsByClassName('selecionado')
    for (let i = 0; i < selecionados.length; i++) {
        selecionados[i].classList.remove('selecionado');
    }
    rescuro.classList.add('selecionado')
}

var grupoc20 = document.querySelectorAll('.c20')
for (let i = 0; i < grupoc20.length; i++) {
    grupoc20[i].onclick = function() {
        if (corAtual == 'branco') {
            grupoc20[i].style.backgroundColor = 'aliceblue'
        }
        selecionados = document.getElementsByClassName('selecionado')
        for (let i = 0; i < selecionados.length; i++) {
            selecionados[i].classList.remove('selecionado');
        }
        corAtual = 'nenhum'
    }
}

var grupoc18 = document.querySelectorAll('.c18')
for (let i = 0; i < grupoc18.length; i++) {
    grupoc18[i].onclick = function() {
        if (corAtual == 'verde') {
            grupoc18[i].style.backgroundColor = 'darkgreen'
        }
        selecionados = document.getElementsByClassName('selecionado')
        for (let i = 0; i < selecionados.length; i++) {
            selecionados[i].classList.remove('selecionado');
        }
        corAtual = 'nenhum'
    }
}

var grupoc12 = document.querySelectorAll('.c12')
for (let i = 0; i < grupoc12.length; i++) {
    grupoc12[i].onclick = function() {
        if (corAtual == 'rosa') {
            grupoc12[i].style.backgroundColor = 'deeppink'
        }
        selecionados = document.getElementsByClassName('selecionado')
        for (let i = 0; i < selecionados.length; i++) {
            selecionados[i].classList.remove('selecionado');
        }
        corAtual = 'nenhum'
    }
}

var grupoc14 = document.querySelectorAll('.c14')
for (let i = 0; i < grupoc14.length; i++) {
    grupoc14[i].onclick = function() {
        if (corAtual == 'amarelo') {
            grupoc14[i].style.backgroundColor = 'yellow'
        }
        selecionados = document.getElementsByClassName('selecionado')
        for (let i = 0; i < selecionados.length; i++) {
            selecionados[i].classList.remove('selecionado');
        }
        corAtual = 'nenhum'
    }
}

var grupoc19 = document.querySelectorAll('.c19')
for (let i = 0; i < grupoc19.length; i++) {
    grupoc19[i].onclick = function() {
        if (corAtual == 'escuro') {
            grupoc19[i].style.backgroundColor = 'darkred'
        }
        selecionados = document.getElementsByClassName('selecionado')
        for (let i = 0; i < selecionados.length; i++) {
            selecionados[i].classList.remove('selecionado');
        }
        corAtual = 'nenhum'
    }
}