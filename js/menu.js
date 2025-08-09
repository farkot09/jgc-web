// menu.js - Inserta el menú principal JGC en todas las páginas
(function(){
    document.addEventListener('DOMContentLoaded',function(){
        var header = document.querySelector('.main-header');
        if(!header) return;
        // Evita duplicados
        if(document.getElementById('jgc-menu')) return;
        var path = window.location.pathname.split('/').pop();
        var activeInicio = path === 'index.html' || path === '' ? 'active' : '';
        var activeModelos = path === 'modelos.html' ? 'active' : '';
        var activeContacto = path === 'contacto.html' ? 'active' : '';
        header.innerHTML = `
        <div class="container">
            <a href="index.html" class="logo">JGC</a>
            <nav class="main-nav">
                <ul>
                    <li><a href="index.html" class="${activeInicio}">Inicio</a></li>
                    <li><a href="modelos.html" class="${activeModelos}">Modelos</a></li>
                    <li><a href="contacto.html" class="${activeContacto}">Contacto</a></li>
                </ul>
            </nav>
        </div>
        `;
    });
})();
