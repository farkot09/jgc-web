// Genera un QR al lado de las especificaciones en cada ficha técnica
(function(){
    document.addEventListener('DOMContentLoaded',function(){
        var qrLateral = document.getElementById('qr-ficha-lateral');
        if(!qrLateral) return;
        // Evita duplicados
        if(document.getElementById('qr-canvas')) return;
        // Obtén el nombre del PDF desde el enlace de descarga
        var pdfLink = document.querySelector('a[href$=".pdf"]');
        var pdfUrl = pdfLink ? pdfLink.getAttribute('href') : '';
        if(!pdfUrl) return;
        qrLateral.innerHTML = '<span style="font-size:0.95rem;color:#555;margin-bottom:0.3rem;">Descarga rápida:</span>'+
            '<canvas id="qr-canvas" width="120" height="120" style="margin-bottom:0.3rem;"></canvas>'+
            '<a href="'+pdfUrl+'" download style="font-size:0.9rem;color:#222;text-decoration:underline;">Ficha PDF</a>';
        // Genera el QR usando una librería ligera
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/qrious@4.0.2/dist/qrious.min.js';
        script.onload = function(){
            var qr = new QRious({
                element: document.getElementById('qr-canvas'),
                value: window.location.origin + '/' + pdfUrl,
                size: 120,
                background: 'white',
                foreground: '#222'
            });
        };
        document.body.appendChild(script);
    });
})();
