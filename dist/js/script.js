// Hamburger

// cari element id btn-burger
const hamburger = document.querySelector('#btn-burger');
const navMenu = document.querySelector('#nav-menu');
// hamburger ketika diklik
hamburger.addEventListener('click', function () {
    // toggle/tambah kn class hambuger-active jika blm ada dan, hilangkan jika ada.  
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// navbar fixed
window.onscroll = function () {
    // cari element dengan nama header
    const header = document.querySelector('header');
    // ambil posisi header ujung atas (fixednav = 0)

    const logo = document.querySelector('#logo');

    const fixednav = header.offsetTop;

    // jika window scrol lebih besar dari fixenav/0 
    if (window.pageYOffset > fixednav ) {
        // maka tambahkan class baru di header (class navbar-fix di custom input css)
        header.classList.add('navbar-fix');
        logo.classList.add('logo_color');
    } else {
        // jika tidak hapus class nya
        header.classList.remove('navbar-fix');
        logo.classList.remove('logo_color');
    }
};


