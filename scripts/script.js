botao_nav_a = document.querySelectorAll('nav ul li a')

for (let i = 0; i < botao_nav_a.length; i++) {
    const botao_nav = botao_nav_a[i];
    botao_nav.onclick = function() {
        bg_antiga = botao_nav.style.backgroundColor
        cor_antiga = botao_nav.style.color
    
        botao_nav.style.backgroundColor = 'black'
        botao_nav.style.color = 'white'
    
        setTimeout(function() {
        botao_nav.style.backgroundColor = bg_antiga
        botao_nav.style.color = cor_antiga
        }, 1000)
    }
}
