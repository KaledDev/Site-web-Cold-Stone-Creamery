document.addEventListener('DOMContentLoaded', () => {
    // Function to open the modal
    function openModal(imageId) {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const modalDescription = document.getElementById('modal-description');

        // Set image source and description based on imageId
        switch (imageId) {
            case 'menu1':
                modalImg.src = '../images/menu1.jpg';
                modalDescription.textContent = 'Une douceur exquise alliant la légèreté du cupcake à la fraîcheur de la glace.';
                break;
            case 'menu2':
                modalImg.src = '../images/menu2.jpg';
                modalDescription.textContent = 'Des boissons rafraîchissantes et crémeuses aux fruits frais.';
                break;
            case 'menu3':
                modalImg.src = '../images/menu3.jpg';
                modalDescription.textContent = 'Des gâteaux moelleux et savoureux pour toutes les occasions.';
                break;
            case 'menu4':
                modalImg.src = '../images/menu4.jpg';
                modalDescription.textContent = 'Personnalisez vos propres créations avec nos délicieuses options.';
                break;
        }

        modal.classList.remove('hidden');
    }

    // Add event listener to close button
    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('modal').classList.add('hidden');
    });

    // Add event listener to close modal when clicking outside of the content
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Attach openModal function to image clicks
    document.querySelectorAll('.cursor-pointer').forEach(img => {
        img.addEventListener('click', () => {
            openModal(img.getAttribute('onclick').split('\'')[1]);
        });
    });
});
// JavaScript to toggle mobile menu with animation
document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('translate-x-full');
    document.getElementById('mobile-menu').classList.add('translate-x-0');
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.add('translate-x-full');
    document.getElementById('mobile-menu').classList.remove('translate-x-0');
});


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-item');
let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
});

document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".slide-in-image");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the class if it already exists to restart the animation
                image.classList.remove("animate-slide-in");

                // Trigger a reflow to reset the animation
                void image.offsetWidth;

                // Add the class to start the animation
                image.classList.add("animate-slide-in");
            }
        });
    }, {
        threshold: 0.1 // You can adjust this threshold as needed
    });

    observer.observe(image);
});

// JavaScript pour afficher le bouton lorsque l'utilisateur défile et pour gérer le clic
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Afficher le bouton lorsque l'utilisateur fait défiler vers le bas
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Affiche le bouton après avoir fait défiler de 300 pixels
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    });

    // Retourner en haut de la page lors du clic sur le bouton
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Défiler en douceur
        });
    });
});
