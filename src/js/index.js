// Navbar Animation
let nav = document.querySelector('#navBar');
let lastScrollY = window.scrollY;
const hidden = window.onscroll = () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('nav--hidden');
    } else {
        nav.classList.remove('nav--hidden');
    }
    
    lastScrollY = window.scrollY;

    if (window.scrollY > 50) {
        nav.classList.add('nav--shadow');
    } else if (window.scrollY == 0){
        nav.classList.remove('nav--shadow');
    }
}

// onClick function
const toHome = () => {
    let header = document.getElementById('header');
    header.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center',
    });
}

const toAbout = () => {
    let about = document.getElementById('about');
    about.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center',
    });
}

const toSkills = () => {
    let skills = document.getElementById('skills');
    skills.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center',
    });
}

const toContact = () => {
    let contact = document.getElementById('contact');
    contact.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center',
    });
}
// --

// Send to console
const form = document.getElementById('contacts');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let nama = document.getElementById('inputNama').value;
    let email = document.getElementById('inputEmail').value;
    let pesan = document.getElementById('pesan').value;
    alert("Message sent....");

    console.log(`Nama: ${nama}`);
    console.log(`Email: ${email}`);
    console.log(`Pesan: ${pesan}`);
    document.getElementById('contacts').reset();
});