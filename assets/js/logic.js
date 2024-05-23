const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains("dark-theme")) {
        themeToggler.textContent = '🌑';

    } else {
        themeToggler.textContent = '☀️';
    }
})