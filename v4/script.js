const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(menuToggle&&nav){
  menuToggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
    menuToggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-label','Abrir menú');
  }));
}

const form=document.getElementById('contactForm');
const status=document.getElementById('formStatus');
if(form){
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    status.textContent='El formulario está preparado para conectarse con el sistema seguro de recepción de solicitudes. Configura el proveedor de formularios antes de publicar.';
  });
}

document.getElementById('year').textContent=new Date().getFullYear();
