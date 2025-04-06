document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio loaded successfully!");

    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Loop through all carousels
    document.querySelectorAll('.carousel').forEach(carousel => {
        const imageContainer = carousel.querySelector('.carousel-images');
        const images = imageContainer.querySelectorAll('img');
        const nextBtn = carousel.querySelector('.next');
        const prevBtn = carousel.querySelector('.prev');
        let currentIndex = 0;

        function showSlide(index) {
            const slideWidth = images[0].clientWidth;
            imageContainer.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        }

        // Button listeners
        nextBtn?.addEventListener('click', nextSlide);
        prevBtn?.addEventListener('click', prevSlide);

        // Auto-slide
        if (images.length > 0) {
            showSlide(currentIndex);
            setInterval(nextSlide, 5000); // Auto move every 5 seconds
        }
    });
});
