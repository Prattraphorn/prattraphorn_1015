document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image img');
    let currentImageIndex = 0;

    // ฟังก์ชันสำหรับแสดงรูปภาพถัดไป
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    // แสดงรูปภาพแรก
    showImage(currentImageIndex);

    // ตั้งเวลาให้แสดงรูปภาพอัตโนมัติ
    setInterval(showNextImage, 3000);

    // เพิ่มปุ่มสำหรับการควบคุมรูปภาพ
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    nextButton.addEventListener('click', showNextImage);

    const prevButton = document.createElement('button');
    prevButton.textContent = '<';
    prevButton.addEventListener('click', showPreviousImage);

    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(prevButton);
    buttonContainer.appendChild(nextButton);
    document.getElementById('Images').appendChild(buttonContainer);

    // การเลื่อนอย่างนุ่มนวลไปยังส่วนต่างๆ
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// ฟังก์ชันปรับปริมาณส่วนผสม
function updateIngredientQuantity(multiplier) {
    const ingredientElements = document.querySelectorAll('#Ingredients ul li');
    ingredientElements.forEach((li) => {
        let originalText = li.getAttribute('data-original-text');
        if (!originalText) {
            originalText = li.innerText;
            li.setAttribute('data-original-text', originalText);
        }
        const quantityRegex = /^(\d+(\.\d+)?)\s*(.+)/;
        const match = originalText.match(quantityRegex);
        if (match) {
            const quantity = parseFloat(match[1]) * multiplier;
            li.innerText = `${quantity.toFixed(2)} ${match[3]}`;
        }
    });
}


