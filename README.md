# Guía para agregar un nuevo modelo de retroexcavadora JGC

## 1. Agregar imágenes del modelo
Coloca las fotos del nuevo modelo en la carpeta `img` con el siguiente formato:
- `NOMBREMODELO-1.jpg` (principal)
- `NOMBREMODELO-2.jpg`
- `NOMBREMODELO-3.jpg`
- `NOMBREMODELO-4.jpg`

Ejemplo para modelo RX500:
- `img/RX500-1.jpg`
- `img/RX500-2.jpg`
- `img/RX500-3.jpg`
- `img/RX500-4.jpg`

## 2. Agregar la ficha técnica en PDF
Coloca el archivo PDF en la raíz del proyecto con el nombre:
- `ficha-tecnica-NOMBREMODELO.pdf`

Ejemplo: `ficha-tecnica-RX500.pdf`

## 3. Agregar el modelo en modelos.html
Copia y pega el bloque `<article>` dentro de `<section class="modelos-grid container">` y edita los datos:

```html
<article class="modelo-card">
    <div class="modelo-card-image">
        <img src="img/RX500-1.jpg" alt="Retroexcavadora JGC Modelo RX500 en obra">
    </div>
    <div class="modelo-card-content">
        <h3>Modelo RX500</h3>
        <p>Descripción breve del modelo.</p>
        <a href="ficha-tecnica-RX500.html" class="cta-button-secondary">Ver Ficha Técnica</a>
    </div>
</article>
```

## 4. Crear la ficha técnica HTML
Copia el archivo de una ficha existente (por ejemplo, `ficha-tecnica-HW220-9.html`), renómbralo y edita:
- El nombre del modelo
- Las imágenes de la galería
- Las especificaciones técnicas
- El enlace al PDF

## 5. Actualizar datos estructurados (SEO)
En la ficha técnica HTML, actualiza el bloque `<script type="application/ld+json">` con los datos del nuevo modelo y las rutas de imágenes.

---

**¡Listo! El nuevo modelo aparecerá en la web con galería, ficha técnica y descarga PDF.**
