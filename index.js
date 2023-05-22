 const botaoMenu = document.querySelector('.cabecalho__menu') //pegando a class cabecalho__menu para selecionar o botao//
const menu = document.querySelector('.menu__lateral') //pegando a class .menu__lateral que pega a nav inteira do menu//


botaoMenu.addEventListener ('click', () => { //adicionando evento para o botao menu, com o click//
     menu.classList.toggle('menu__lateral-ativo') 
    })//após o click junto com o toogle, o menu lateral volta a aparecer por conta da class junto com a função//