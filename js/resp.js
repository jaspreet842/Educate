let burger = document.querySelector('.burger');
let navList = document.querySelector('.navList');
let navbar = document.querySelector('.navbar');
let rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', function(){
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})