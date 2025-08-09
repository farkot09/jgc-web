// Modal WhatsApp para solicitar cotización en ficha técnica HW220-9
(function(){
    document.addEventListener('DOMContentLoaded',function(){
        var btn=document.getElementById('wa-cotizar');
        if(!btn) return;
        // Si el modal ya existe, no lo agregues de nuevo
        if(document.getElementById('wa-modal')) return;
        var modal=document.createElement('div');
        modal.id='wa-modal';
        modal.style.display='none';
        modal.style.position='fixed';
        modal.style.top='0';
        modal.style.left='0';
        modal.style.width='100vw';
        modal.style.height='100vh';
        modal.style.background='rgba(0,0,0,0.45)';
        modal.style.zIndex='9999';
        modal.style.alignItems='center';
        modal.style.justifyContent='center';
        modal.innerHTML='<div style="background:#fff;border-radius:14px;max-width:340px;width:90vw;padding:2rem 1.2rem;box-shadow:0 4px 32px #0003;margin:auto;position:relative;">'+
            '<button id="wa-close" style="position:absolute;top:12px;right:12px;background:none;border:none;font-size:1.5rem;color:#888;cursor:pointer;">&times;</button>'+ 
            '<h3 style="color:#25d366;text-align:center;margin-bottom:1rem;">Solicitar Cotización por WhatsApp</h3>'+ 
            '<input id="wa-modal-nombre" type="text" placeholder="Tu nombre" style="width:100%;margin-bottom:0.7rem;padding:0.6rem;border-radius:6px;border:1px solid #ddd;">'+ 
            '<textarea id="wa-modal-msg" rows="3" placeholder="Mensaje (opcional)" style="width:100%;margin-bottom:0.7rem;padding:0.6rem;border-radius:6px;border:1px solid #ddd;"></textarea>'+ 
            '<button id="wa-modal-send" style="width:100%;background:#25d366;color:#fff;font-weight:700;border:none;border-radius:6px;padding:0.8rem;cursor:pointer;">Enviar a WhatsApp</button>'+ 
            '</div>';
        document.body.appendChild(modal);
        var close=document.getElementById('wa-close');
        var send=document.getElementById('wa-modal-send');
        btn.addEventListener('click',function(e){
            e.preventDefault();
            modal.style.display='flex';
        });
        close.addEventListener('click',function(){
            modal.style.display='none';
        });
        send.addEventListener('click',function(){
            var nombre=document.getElementById('wa-modal-nombre').value.trim();
            var msg=document.getElementById('wa-modal-msg').value.trim();
            if(!nombre){
                document.getElementById('wa-modal-nombre').style.borderColor='#ff5252';
                setTimeout(function(){document.getElementById('wa-modal-nombre').style.borderColor='#ddd';},900);
                return;
            }
            var texto=encodeURIComponent('Hola, soy '+nombre+'. Quiero una cotización sobre la excavadora HW220-9.'+(msg?(' '+msg):''));
            var numero='573205838760'; // Cambia por tu número real
            window.open('https://wa.me/'+numero+'?text='+texto,'_blank');
            modal.style.display='none';
        });
    });
})();
