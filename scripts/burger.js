
    let burger = document.querySelector('.burger');
    let navigation = document.querySelector('.navigation');
    let back = document.querySelector('body');
    let navigation__list = document.querySelector('.navigation__list');
    burger.onclick = function(){
        burger.classList.toggle('active');
        navigation.classList.toggle('active');
        back.classList.toggle('lock');
    }