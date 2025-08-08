
// 1. Menú hamburguesa responsive
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.main-nav ul');
    const header = document.querySelector('.main-header .container');
    if (!nav || !header) return;
    let burger = document.querySelector('.burger-menu');
    if (!burger) {
        burger = document.createElement('button');
        burger.className = 'burger-menu';
        burger.innerHTML = '&#9776;';
        burger.style.display = 'none';
        burger.style.fontSize = '2rem';
        burger.style.background = 'none';
        burger.style.border = 'none';
        burger.style.color = '#fff';
        burger.style.cursor = 'pointer';
        burger.style.marginLeft = '20px';
        header.appendChild(burger);
    }
    function checkWidth() {
        if (window.innerWidth <= 768) {
            burger.style.display = 'block';
            nav.style.display = 'none';
        } else {
            burger.style.display = 'none';
            nav.style.display = 'flex';
            nav.style.position = '';
            nav.style.background = '';
            nav.style.flexDirection = '';
            nav.style.width = '';
            nav.style.borderRadius = '';
            nav.style.boxShadow = '';
        }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    burger.addEventListener('click', function() {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
            nav.style.background = '#1a1a1a';
            nav.style.position = 'absolute';
            nav.style.top = '60px';
            nav.style.right = '20px';
            nav.style.flexDirection = 'column';
            nav.style.width = '200px';
            nav.style.borderRadius = '8px';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        }
    });
});

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
