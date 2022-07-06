let quantity = document.getElementById('quantity');
let isCartShown = false;
let isMobileNavOpened = false;
let counter = 0;

document.body.addEventListener('click', (e) => {
    if (e.target.tagName == 'IMG' && e.target.parentElement.classList.contains('image-wrapper-avatar')) {
        e.target.classList.add('active-avatar')
    }
    if (!e.target.classList.contains('icon-cart')) {
        isCartShown = true;
        showCart()
    }
    else {
        document.querySelector('.avatar-image').classList.remove('active-avatar');

    }
})

document.getElementById('add-remove').addEventListener('click', addRemove);
document.getElementById('add-to-cart').addEventListener('click', addToCart);

document.querySelector('.icon-cart').addEventListener('click', showCart);
document.querySelector('.bin').addEventListener('click', removeItemFromCart);
document.querySelector('.main-image').addEventListener('click', toggleImage);
document.querySelector('.tumbnails-wrapper').addEventListener('click', showImage);
document.querySelector('.menu').addEventListener('click', showMobileNav);
document.querySelector('.lightbox-product-images-svg-container').addEventListener('click', hideMobileNav);

const count = document.getElementById('count');
const total = document.getElementById('total');
const cartContentEmpty = document.querySelector('.cart-content');
const cartContentFilled = document.querySelector('.cart-content-filled');
const productImagesContainer = document.querySelector('.lightbox-product-images-container');
const mainImageLight = document.querySelector('.main-image-light');
const pseudoNumberContainer = document.querySelector('.icon-cart');



function addRemove(e) {
    if (e.target.id == 'minus' || e.target.parentElement.id == 'minus') {
        if (counter != 0) {
            counter--;
        }
    }

    if (e.target.id == 'plus' || e.target.parentElement.id == 'plus') {
        counter++;
    }

    quantity.value = counter;
}

function addToCart() {
    if (counter > 0) {
        cartContentEmpty.style.display = 'none';
        cartContentFilled.style.display = 'block';
        count.textContent = quantity.value;
        const price = (125 * Number(quantity.value)).toFixed(2);
        total.textContent = `$${price}`;
        pseudoNumberContainer.title = `${quantity.value}`;
    }
}

function showCart() {
    if (isCartShown) {
        document.querySelector('.my-cart').style.display = 'none';
        isCartShown = false;
    } else {
        document.querySelector('.my-cart').style.display = 'block';
        isCartShown = true;
    }
}

function removeItemFromCart() {
    cartContentEmpty.style.display = 'block';
    cartContentFilled.style.display = 'none';
    pseudoNumberContainer.title = 0;
}

function toggleImage() {
    productImagesContainer.style.display = 'block';
    let imageIndex = 1;
    productImagesContainer.addEventListener('click', (e) => {

        if (e.target.tagName == 'IMG') {
            imageIndex = e.target.classList[0];
            Array.from(e.target.parentElement.parentElement.children).forEach(el => {
                el.classList.remove('active-image')
            })
            e.target.parentElement.classList.add('active-image')
            if (!Number.isNaN(imageIndex)) {
                console.log(mainImageLight);
                mainImageLight.innerHTML = `<img src="../../images/image-product-${imageIndex}.jpg" alt="image-product-${imageIndex}" class="${imageIndex}">`
            }
        } else if (e.target.classList.contains('image-wrapper-after') || e.target.parentElement.classList.contains('image-wrapper-after')) {
            let parent;

            if (e.target.classList.contains('image-wrapper-after')) {
                parent = e.target
                imageIndex = Number(e.target.parentElement.children[1].children[0].className) + 1
            } else {
                parent = e.target.parentElement.parentElement
                imageIndex = Number(parent.children[1].children[0].className) + 1
            }

            if (imageIndex == 0) {
                imageIndex = 4
            }
            if (imageIndex == 5) {
                imageIndex = 1
            }
            mainImageLight.innerHTML = `<img src="../../images/image-product-${imageIndex}.jpg" alt="image-product-${imageIndex}" class="${imageIndex}">`
        } else if (e.target.classList.contains('image-wrapper-before') || e.target.parentElement.classList.contains('image-wrapper-before')) {
            let parent;

            if (e.target.classList.contains('image-wrapper-before')) {
                parent = e.target
                imageIndex = Number(e.target.parentElement.children[1].children[0].className) - 1
            } else {
                parent = e.target.parentElement.parentElement
                imageIndex = Number(parent.children[1].children[0].className) - 1
            }
            if (imageIndex == 0) {
                imageIndex = 4
            }
            if (imageIndex == 5) {
                imageIndex = 1
            }

            mainImageLight.innerHTML = `<img src="../../images/image-product-${imageIndex}.jpg" alt="image-product-${imageIndex}" class="${imageIndex}">`
        }
        else {
            productImagesContainer.style.display = 'none';
        }
    })

}

function showImage(e) {

    let imageIndex = e.target.parentElement.classList[1];
    Array.from(e.target.parentElement.parentElement.children).forEach(el => {
        el.classList.remove('active-image-big')
    })

    if (e.target.tagName == 'IMG') {
        document.querySelector('.main-image').children[0].src = `../../images/image-product-${imageIndex}.jpg`;
        e.target.parentElement.classList.add('active-image-big')
    }

}

function showMobileNav() {
    if (!isMobileNavOpened) {
        document.querySelector('.navs-container-ul').style.display = 'block';
        isMobileNavOpened = true;
    }
}

function hideMobileNav() {
    if (isMobileNavOpened) {
        document.querySelector('.navs-container-ul').style.display = 'none';
        isMobileNavOpened = false;
    }
}