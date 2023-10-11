const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open'); // Agrega esta línea para cambiar la clase del botón
        menu.classList.toggle('open');
    });