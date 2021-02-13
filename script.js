'use strict'
const open = document.querySelector('.nav__logo-open');
const close = document.querySelector('.nav__logo-close');
const navOpen = document.querySelector('.navbar');
const header = document.querySelector('.header');
const showResult = document.querySelector('.input__text');
const clickHide = document.querySelector('.submit');
const hideInput = document.querySelector('.input-box'); 

open.addEventListener('click', function () {  
    open.classList.add('hidden');
    close.classList.remove('hidden');
    // scale.classList.remove('hidden');
    navOpen.classList.remove('hidden');
    header.classList.add('hidden');

    if('click') {
        document.querySelector('.nav-try-again').style.transform= "scale(80)";
        // document.querySelector('.navbar','.nav-try-again').style.transition = "all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    } 

});

close.addEventListener('click', function () {
    open.classList.remove('hidden');
    close.classList.add('hidden');
    navOpen.classList.add('hidden');
    // scale.classList.add('hidden');
    header.classList.remove('hidden');
    if('click') {
        document.querySelector('.nav-try-again').style.transform= "none";
    }
});

clickHide.addEventListener('click',function () {
    hideInput.classList.add('hidden');
    showResult.classList.remove('hidden');
})