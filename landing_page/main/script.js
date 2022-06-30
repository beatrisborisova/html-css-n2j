document.querySelector('.hamburger').addEventListener('click', toggleNav);
document.querySelector('.exit').addEventListener('click', toggleNav)

let isNavOpened = false;

function toggleNav() {
    if (isNavOpened) {
        document.querySelector('.exit').style.display = 'none';
        document.querySelector('.nav-mobile-content').style.display = 'none';
        isNavOpened = false;
    } else {
        document.querySelector('.exit').style.display = 'block';
        document.querySelector('.nav-mobile-content').style.display = 'block';
        isNavOpened = true;
    }
}
