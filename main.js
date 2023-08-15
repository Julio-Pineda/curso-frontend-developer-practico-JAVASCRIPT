const $ = (selector) => document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const burgerIcon = $('#burgerIcon');
const burgerMenu = $('.mobile-menu');
const cartIcon = $('.navbar-shopping-cart');
const cartMenu = $('#cartMenu');
const cardsContainer = $('.cards-container');
const productDetailContainer = $('#productDetail');
const productDetailContainerClose = $('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);
productDetailContainerClose.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu () {
    const isCartMenuClosed = cartMenu.classList.contains('inactive');
     
    if(!isCartMenuClosed){
        cartMenu.classList.add('inactive');
    }

    burgerMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu () {
    const isCartMenuClosed = cartMenu.classList.contains('inactive');
     
    if(!isCartMenuClosed){
        cartMenu.classList.add('inactive');
    }

    closeProductDetailAside ();

    burgerMenu.classList.toggle('inactive');
}

function toggleCartMenu () {
/*  const isBugerMenuOpen = !burgerMenu.classList.contains('inactive');
    const isCartMenuOpen = !cartMenu.classList.contains('inactive' );
        
    cartMenu.classList.toggle('inactive');
    */
    const isBugerMenuClosed = burgerMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isproductDetailContainer = productDetailContainer.classList.contains('inactive');

    if(!isBugerMenuClosed || !isDesktopMenuClosed || !isproductDetailContainer){
        burgerMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }

        cartMenu.classList.toggle('inactive');
}

function openProductDetailAside () {
    burgerMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    cartMenu.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: "https://images.pexels.com/photos/2736135/pexels-photo-2736135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: 'Computador',
    price: 1250,
    image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

function renderProducts (arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgFigure = document.createElement('img');
        productImgFigure.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgFigure);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts (productList);