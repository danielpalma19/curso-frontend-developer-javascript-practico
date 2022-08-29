const navEmail = document.querySelector('.navbar-email'); //Llamamos a la clase a la que le vamos a dar click
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const MenucarritoIcon = document.querySelector('.navbar-shopping-cart');
const detallesproducto = document.querySelector('.productdetailcarrito ');

const cardscontainer = document.querySelector('.cards-container');
const productdetailcontainer = document.querySelector('.product-detail');
const productdetailclose = document.querySelector('.product-detail-close')

navEmail.addEventListener('mouseover',toggleDesktopMenu);
MenuHamIcon.addEventListener('click',toggleMobileMenu);
MenucarritoIcon.addEventListener('click',toggleMobileMenuCarrito);
productdetailclose.addEventListener('click',closeProductdetail)


function toggleDesktopMenu(event){

    const isAsideClosed = detallesproducto.classList.contains('inactive');
    const isProductdetailClosed = productdetailcontainer.classList.contains('inactive');

    if (!isProductdetailClosed) {
      productdetailcontainer.classList.add('inactive'); 
    }

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
  const isProductdetailClosed = productdetailcontainer.classList.contains('inactive');

    if (!isProductdetailClosed) {
      productdetailcontainer.classList.add('inactive'); 
    }

  if (!isAsideClosed) {
    detallesproducto.classList.add('inactive'); 
  }
    mobileMenu.classList.toggle('inactive');
    
}



function toggleMobileMenuCarrito(){
    
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const IsDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductdetailClosed = productdetailcontainer.classList.contains('inactive');

    if (!isProductdetailClosed) {
      productdetailcontainer.classList.add('inactive'); 
    }
    

    desktopMenu.classList.toggle('inactive');
    
  
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  if (!IsDesktopMenuClosed) {
    desktopMenu.classList.add('inactive'); 
  }

    detallesproducto.classList.toggle('inactive');
    
}  

function openProductDetail(){
  productdetailcontainer.classList.remove('inactive');

  const ismenucarritoClosed = detallesproducto.classList.contains('inactive');

    if (!ismenucarritoClosed) {
      detallesproducto.classList.toggle('inactive'); 
    }

    
}

function closeProductdetail(){
  productdetailcontainer.classList.add('inactive');
}

const productlist=[];
productlist.push({
  name:'Bike',
  price:120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
  name:'Bike',
  price:120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
  name:'Bike',
  price:120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

renderProducts(productlist);

function renderProducts(productlist){

  

  for (product of productlist){
    const productcard=document.createElement('div');
    productcard.classList.add('product-card');
    productcard.addEventListener('click',openProductDetail);
  
    const img=document.createElement('img');
    img.setAttribute('src', product.image);
  
    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfodiv=document.createElement('div');
  
    const productprice = document.createElement('p');
    productprice.innerText ='$'+product.price;
    
    const productName= document.createElement('p');
    productName.innerText = product.name;
  
    
    productInfodiv.appendChild(productprice);
    productInfodiv.appendChild(productName);
  
    const productinfofigure = document.createElement('figure');
    const imgcart=document.createElement('img');
    imgcart.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    productinfofigure.appendChild(imgcart);
  
    productInfo.appendChild(productInfodiv);
    productInfo.appendChild(productinfofigure);
    productcard.appendChild(img);
    productcard.appendChild(productInfo);
  
    cardscontainer.appendChild(productcard);
  }
}