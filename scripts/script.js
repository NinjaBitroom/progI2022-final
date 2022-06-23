botao_nav_a = document.querySelector('nav ul li a')

botao_nav_a.onclick = function() {
    bg_antiga = botao_nav_a.style.backgroundColor
    cor_antiga = botao_nav_a.style.color

    botao_nav_a.style.backgroundColor = 'black'
    botao_nav_a.style.color = 'white'

    setTimeout(function() {
    botao_nav_a.style.backgroundColor = bg_antiga
    botao_nav_a.style.color = cor_antiga
    }, 1000)
}
