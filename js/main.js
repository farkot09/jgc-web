
// Eliminado menú hamburguesa para mostrar menú siempre visible en móvil

// 2. Modal de contacto para "Solicitar Asesoría"
document.addEventListener('DOMContentLoaded', function() {
    // El botón puede tener texto diferente, así que buscamos el botón por clase y texto
    const ctaBtns = Array.from(document.querySelectorAll('.cta-section .cta-button'));
    const ctaBtn = ctaBtns.find(btn => btn.textContent.trim().toLowerCase().includes('solicitar'));
    if (!ctaBtn) return;
    // Crear modal
    const modal = document.createElement('div');
    modal.id = 'contact-modal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.7)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '9999';
    modal.innerHTML = `
      <div style="background:#fff;padding:2rem 2.5rem;border-radius:10px;max-width:400px;text-align:center;position:relative;">
        <button id="close-modal" style="position:absolute;top:10px;right:10px;font-size:1.5rem;background:none;border:none;cursor:pointer;color:#333;">&times;</button>
        <h2>Contáctanos</h2>
        <p>Déjanos tus datos y un asesor te contactará pronto.</p>
        <form id="contact-form">
          <input type="text" placeholder="Nombre" required style="width:100%;margin-bottom:1rem;padding:0.5rem;">
          <input type="email" placeholder="Correo" required style="width:100%;margin-bottom:1rem;padding:0.5rem;">
          <input type="tel" placeholder="Teléfono" style="width:100%;margin-bottom:1rem;padding:0.5rem;">
          <button type="submit" style="background:#ffc400;color:#1a1a1a;padding:0.7rem 2rem;border:none;border-radius:5px;font-weight:700;">Enviar</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
    ctaBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
    });
    modal.querySelector('#close-modal').onclick = () => modal.style.display = 'none';
    modal.querySelector('#contact-form').onsubmit = function(ev) {
        ev.preventDefault();
        modal.querySelector('form').innerHTML = '<p style="color:green;font-weight:700;">¡Gracias! Pronto te contactaremos.</p>';
        setTimeout(()=>modal.style.display = 'none', 2000);
    };
});
