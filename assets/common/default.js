const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const search_m = document.getElementById('search_m');
const search_cancel_m = document.getElementById('search_cancel_m');
const nav_list_m = document.getElementById('nav_list_m');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

search_m.addEventListener('click', () => {
    search_cancel_m.classList.add('search');
    navbar.classList.add('search')
})

search_cancel_m.addEventListener('click', () => {
    search_m.value = ""
    search_cancel_m.classList.remove('search');
    navbar.classList.remove('search')
})