const menu = document.querySelector('.burger_menu_box');
const menuBtn = document.querySelector('.burger_logo');
const fogging = document.querySelector('.fogging');

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', e => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        fogging.classList.toggle('fogging_active');
        body.classList.toggle('lock');
    })

    menu.addEventListener('click', e => {
        if (e.target.classList.contains('fa-xmark')) {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            fogging.classList.remove('fogging_active');
            body.classList.remove('lock');
        }
    })

    fogging.addEventListener('click', e => {
        if (e.target.classList.contains('fogging_active')) {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            fogging.classList.remove('fogging_active');
            body.classList.remove('lock');
        }
    })

    menu.querySelectorAll('.burger_menu_link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            fogging.classList.remove('fogging_active');
            body.classList.remove('lock');
        })
    })
}
