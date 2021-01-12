const nav = document.querySelector('.navbar');
const topOfNavbar = nav.offsetTop;

function fixNav() {
    // Se lo scrolling sul documento è >= al punto esatto in cui comincia la navbar (il suo lato superiore)
    if (window.scrollY >= topOfNavbar) {
        // Fix 'jump' bug dov uto al fatto che un oggetto in position fixed non occupa più alcuno spazio nel documento, per ovviare riaggiungiamo lo spazio relativo all'altezza della navbar in questo modo
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
};

window.addEventListener('scroll', fixNav);