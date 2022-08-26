const navEmail = document.querySelector('.navbar-email'); //Llamamos a la clase a la que le vamos a dar click
const desktopMenu = document.querySelector('.desktop-menu');


navEmail.addEventListener('mouseover',toggleDesktopMenu);

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive');
    
    }

desktopMenu.addEventListener('mouseout', removeDektop);

function removeDektop(event){
    desktopMenu.classList.toggle('inactive');

}