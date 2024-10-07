window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const projectImages = document.querySelectorAll('.img-container1 img');
    
    projectImages.forEach((img) => {
   
        img.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)'; 
            this.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)'; 
        });

      
        img.addEventListener('click', function () {
            const altText = this.alt;
           
          
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const projectImages = document.querySelectorAll('.img-container1 img');
    const lightbox = document.createElement('div');
    const lightboxImg = document.createElement('img');
    const closeBtn = document.createElement('span');
    const captionText = document.createElement('div');
    const header = document.querySelector('header');

    lightbox.classList.add('lightbox');
    lightboxImg.classList.add('lightbox-content');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    captionText.id = 'caption';

    lightbox.appendChild(closeBtn);
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(captionText);
    document.body.appendChild(lightbox);

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        header.style.display = 'block'; 
    });

    projectImages.forEach((img) => {
        img.addEventListener('click', function () {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            captionText.innerHTML = this.alt;
            header.style.display = 'none'; 
        });
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox || e.target === lightboxImg) {
            lightbox.style.display = 'none';
            header.style.display = 'block'; 
        }
    });
});

