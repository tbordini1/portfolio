$(document).ready(function() {
    // Adiciona uma classe ao clicar no ícone de menu
    $('.menu-icon').click(function() {
        $('.menu-desktop ul').toggleClass('show');
    });

    // Fecha o menu ao clicar em um link
    $('.menu-desktop ul li a').click(function() {
        $('.menu-desktop ul').removeClass('show');
    });
});
