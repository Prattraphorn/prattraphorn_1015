document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img'); 
    const header = document.querySelector('h1'); 
    const h2Elements = document.querySelectorAll('h2, h3, h4'); 
    const body = document.querySelector('body');

    images.forEach((img) => {
        img.addEventListener('click', function() {
            openLightbox(img);
        });
    });

    function openLightbox(img) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        document.body.appendChild(lightbox);

        const closeBtn = lightbox.querySelector('.close');
        closeBtn.addEventListener('click', function() {
            lightbox.remove(); 
        });

        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
    }

    function fadeInElement(element, delay) {
        element.style.opacity = 0;
        element.style.transition = `opacity ${delay}s ease-in-out`;
        setTimeout(() => {
            element.style.opacity = 1;
        }, 100);
    }

    fadeInElement(header, 1);
    h2Elements.forEach(h2 => fadeInElement(h2, 1.5));

    body.style.background = 'linear-gradient(135deg, #1a1a1a 20%, #333333 80%)';
});
