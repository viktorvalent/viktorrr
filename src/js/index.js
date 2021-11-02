const navBar = document.getElementById('navBar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navBar.classList.add('nav-shadow');
    } else {
        navBar.classList.remove('nav-shadow');
    }
}