const navEmail = document.querySelector('.navbar-email'); //Llamamos a la clase a la que le vamos a dar click
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

navEmail.addEventListener('mouseover',toggleDesktopMenu);
MenuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive');
    
    }

desktopMenu.addEventListener('mouseout', removeDektop);

function removeDektop(event){
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    
    }