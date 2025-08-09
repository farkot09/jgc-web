// Botón flotante de WhatsApp para todas las páginas JGC
(function(){
    if(document.getElementById('whatsapp-float')) return;
    var floatDiv=document.createElement('div');
    floatDiv.id='whatsapp-float';
    floatDiv.style.position='fixed';
    floatDiv.style.bottom='32px';
    floatDiv.style.right='24px';
    floatDiv.style.zIndex='9999';
    floatDiv.innerHTML='<button id="wa-btn" style="background:#25d366;border:none;border-radius:50%;width:60px;height:60px;box-shadow:0 2px 10px #0003;display:flex;align-items:center;justify-content:center;cursor:pointer;"><svg width="32" height="32" viewBox="0 0 32 32" fill="#fff"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.617 1.934 6.6L4 29l7.6-1.934A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.91-.58-5.56-1.67l-.4-.25-4.51 1.15 1.2-4.39-.26-.41A9.93 9.93 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.36-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35-.26.28-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.14 5.01 4.28.7.3 1.25.48 1.68.61.7.22 1.34.19 1.84.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/></svg></button>'+
        '<div id="wa-form" style="display:none;position:absolute;bottom:70px;right:0;width:260px;background:#fff;border-radius:12px;box-shadow:0 2px 16px #0002;padding:1.2rem;">'+
        '<h4 style="margin-bottom:0.7rem;font-size:1.1rem;color:#25d366;text-align:center;">Contacto por WhatsApp</h4>'+ 
        '<input id="wa-nombre" type="text" placeholder="Tu nombre" style="width:100%;margin-bottom:0.6rem;padding:0.5rem;border-radius:6px;border:1px solid #ddd;">'+
        '<textarea id="wa-msg" rows="3" placeholder="Escribe tu mensaje" style="width:100%;margin-bottom:0.6rem;padding:0.5rem;border-radius:6px;border:1px solid #ddd;"></textarea>'+ 
        '<button id="wa-send" style="width:100%;background:#25d366;color:#fff;font-weight:700;border:none;border-radius:6px;padding:0.7rem;cursor:pointer;">Enviar a WhatsApp</button>'+ 
        '</div>';
    document.body.appendChild(floatDiv);
    var waBtn=document.getElementById('wa-btn');
    var waForm=document.getElementById('wa-form');
    var waSend=document.getElementById('wa-send');
    waBtn.addEventListener('click',function(){
        waForm.style.display=waForm.style.display==='none'||waForm.style.display===''?'block':'none';
    });
    waSend.addEventListener('click',function(){
        var nombre=document.getElementById('wa-nombre').value.trim();
        var msg=document.getElementById('wa-msg').value.trim();
        if(!nombre||!msg){
            waForm.style.boxShadow='0 2px 16px #ff000055';
            setTimeout(function(){waForm.style.boxShadow='0 2px 16px #0002';},800);
            return;
        }
        var texto=encodeURIComponent('Hola, soy '+nombre+'. '+msg);
        var numero='573205838760'; // Cambia por tu número real
        window.open('https://wa.me/'+numero+'?text='+texto,'_blank');
    });
})();
