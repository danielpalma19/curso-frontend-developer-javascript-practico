const navEmail = document.querySelector('.navbar-email'); //Llamamos a la clase a la que le vamos a dar click
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const MenucarritoIcon = document.querySelector('.navbar-shopping-cart');
const detallesproducto = document.querySelector('.product-detail ');


navEmail.addEventListener('mouseover',toggleDesktopMenu);
MenuHamIcon.addEventListener('click',toggleMobileMenu);
MenucarritoIcon.addEventListener('click',toggleMobileMenuCarrito);

function toggleDesktopMenu(event){

    const isAsideClosed = detallesproducto.classList.contains('inactive');

    if (!isAsideClosed) {
      detallesproducto.classList.add('inactive'); 
    }
    

    desktopMenu.classList.toggle('inactive');
    
    }

desktopMenu.addEventListener('mouseout', removeDektop);

function removeDektop(event){

    const isAsideClosed = detallesproducto.classList.contains('inactive');

    if (!isAsideClosed) {
      detallesproducto.classList.add('inactive'); 
    }

    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){

  const isAsideClosed = detallesproducto.classList.contains('inactive');

  if (!isAsideClosed) {
    detallesproducto.classList.add('inactive'); 
  }
    mobileMenu.classList.toggle('inactive');
    
}

function toggleMobileMenuCarrito(){
    
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const IsDesktopMenuClosed = desktopMenu.classList.contains('inactive')
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  if (!IsDesktopMenuClosed) {
    desktopMenu.classList.add('inactive'); 
  }

    detallesproducto.classList.toggle('inactive');
    
        
}
