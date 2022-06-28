const themeContainer = document.querySelectorAll('.theme-container')
Array.from(themeContainer).forEach(el => el.addEventListener('click', toggleTheme))

const searchBtn = document.querySelector('.search-btn')
searchBtn.addEventListener('click', searchFunc);

function toggleTheme(e) {

    const head = document.head;
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    head.appendChild(link);

    if (Array.from(e.target.parentElement.classList).includes('white')) {
        link.href = './style-dark.css';

    } else {
        link.href = './style-white.css';
    }
}



function searchFunc() {
    const noResults = document.querySelector('.no-results');
    noResults.style.display = 'block'
}