const menuItems = document.querySelector('.menu_items')
const btnMenu = document.querySelector('.btn_menu')
const navBar = document.querySelector('.menu');
const pantallaPequenia = window.matchMedia("(max-width: 858px)");
document.addEventListener('DOMContentLoaded', () => {
    btnMenu.addEventListener('click', mostrarMenu);
    menuItems.addEventListener('click', mostrarMenu);
});

function mostrarMenu() {
    if (pantallaPequenia.matches) {
        const body = document.querySelector('body');
        menuItems.classList.toggle('show');
        body.classList.toggle('no_scroll')
    }
};

(function () {
    const $form = document.querySelector('#formulario')
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.querySelector('#form_nombre').value;
        const asunto = document.querySelector('#form_asunto').value;
        const mensaje = document.querySelector('#form_mensaje').value;
        const email = document.querySelector('#form_email').value;
        const expreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validarEmail = expreg.test(email)
        if (nombre.trim() === '' || asunto.trim() === '' || mensaje.trim() === '' || !validarEmail) {
            return crearMensaje('Error! Uno o más campos son erroneos.', 'error')
        } else {
            const $spinner = document.createElement('div')
            $spinner.classList.add('spinner')
            $spinner.innerHTML = `<div class="dot1"></div>
                            <div class="dot2"></div>`
            $form.appendChild($spinner)
            fetch("https://formsubmit.co/ajax/f44c41af89dee1bfe679ab3f59428cea", {
                method: "POST",
                body: new FormData(e.target),
            })
                .then((res) => (res.ok ? res.json() : Promise.reject(res)))
                .then(json => {
                    console.log(json)
                    $spinner.remove()
                    crearMensaje('El mensaje fue enviado correctamente. Gracias por tus comentarios!')
                })
                .catch(err => {
                    console.log(err)
                    $spinner.remove()
                    crearMensaje('Hubo un error al enviar mensaje, intente nuevamente.', 'error')
                })
                .finally(() => {
                    $form.reset();

                })
        }
    })

    function crearMensaje(mensaje, tipo) {
        const $mensaje = document.createElement('div')
        $mensaje.textContent = mensaje
        if (tipo === 'error') {
            $mensaje.classList.add('form_error', 'form_mensaje')
        } else {
            $mensaje.classList.add('form_success', 'form_mensaje')
        }
        $form.appendChild($mensaje);
        setTimeout(() => {
            $mensaje.remove();
        }, 3000);
    }
})();

gsap.from('.inicio_mensaje2', {y: -10, autoAlpha: 0, delay: 3})
gsap.from('.inicio_mensaje1', {y: -10, autoAlpha: 0, delay: 1 })
gsap.from('.inicio_nombre', {y: -10, autoAlpha: 0, delay: 2 })
gsap.from('.proyectos_title', {scrollTrigger: {trigger: '.proyectos_title',toggleActions: 'restart none none none'}, x: "-=500px", autoAlpha: 0 })
gsap.from('.habilidades_title', {scrollTrigger: {trigger: '.habilidades_title',toggleActions: 'restart none none none'},x: "-=500px",autoAlpha: 0 })
gsap.from('.sobre-mi_title', {scrollTrigger: {trigger: '.sobre-mi_title', toggleActions: 'restart none none none'}, x: "-=500px", autoAlpha: 0 })
gsap.from('.contacto_title', {scrollTrigger: {trigger: '.contacto_title', toggleActions: 'restart none none none'}, x: "-=500px", autoAlpha: 0})

// Animaciones Proyectos
gsap.from('.proyecto1', {scrollTrigger: {trigger: '.proyecto1',},x: "-=500px", autoAlpha: 0, duration: 0.8, delay: 0.5})
gsap.from('.proyecto2', {scrollTrigger: {trigger: '.proyecto2',},x: "+=500px",autoAlpha: 0,duration: 0.8,delay: 0.5})
gsap.from('.proyecto3', {scrollTrigger: {trigger: '.proyecto3',}, x: "-=500px", autoAlpha: 0, duration: 0.8, delay: 0.5})
gsap.from('.proyecto4', {scrollTrigger: {trigger: '.proyecto4',},x: "+=500px",autoAlpha: 0,duration: 0.8,delay: 0.5})

gsap.from('.tecnologias', {scrollTrigger: {trigger: '.tecnologias', }, x: "-=500px", autoAlpha: 0, duration: 0.8, delay: 0.5 })
gsap.from('.blandas', {scrollTrigger: {trigger: '.blandas',},x: "+=500px",autoAlpha: 0,duration: 0.8,delay: 0.5})
gsap.from('.sobre-mi_img', {scrollTrigger: {trigger: '.sobre-mi_img',},x: "-=500px",autoAlpha: 0,duration: 0.8,delay: 0.5})
gsap.from('.sobre-mi_descripcion', {scrollTrigger: {trigger: '.sobre-mi_descripcion',},x: "+=500px",autoAlpha: 0,duration: 0.8,delay: 0.5})
gsap.from('.contacto_container', {scrollTrigger: {trigger: '.contacto_container',},scale: 0.7,top: -100,autoAlpha: 0,duration: 0.8,delay:0.5,})
