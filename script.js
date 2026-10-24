const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = encodeURIComponent(`Solicitud de información - ${data.get('servicio')}`);
  const body = encodeURIComponent(
    `Hola INTEGRATEL,\n\nQuisiera recibir información sobre sus servicios.\n\n` +
    `Nombre: ${data.get('nombre')}\nCorreo: ${data.get('correo')}\n` +
    `Servicio de interés: ${data.get('servicio')}\n\nProyecto:\n${data.get('mensaje')}\n\nGracias.`
  );
  document.querySelector('.form-status').textContent = 'Preparando tu aplicación de correo…';
  window.location.href = `mailto:damian.cruzwaldo@integratel.net?subject=${subject}&body=${body}`;
});
