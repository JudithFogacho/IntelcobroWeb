let currentSlide = 0;
        const totalSlides = 4;

        // Navigation functionality
        document.querySelectorAll('[data-section]').forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('data-section');
                showSection(section);
            });
        });

        function showSection(sectionName) {
            // Remove active class from all sections and nav items
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.nav-circle').forEach(n => n.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

            // Add active class to current section and nav
            const section = document.getElementById(sectionName);
            const navCircle = document.querySelector(`.nav-circle[data-section="${sectionName}"]`);
            const navItem = document.querySelector(`.nav-item[data-section="${sectionName}"]`);
            
            if (section) section.classList.add('active');
            if (navCircle) navCircle.classList.add('active');
            if (navItem) navItem.classList.add('active');

            // Reset carousel if switching to services
            if (sectionName === 'servicios') {
                currentSlide = 0;
                updateCarousel();
            }

            // Reset wheel if switching to soluciona
            if (sectionName === 'soluciona') {
                resetWheel();
            }
        }

        // Carousel functionality
        function updateCarousel() {
            const carousel = document.getElementById('servicesCarousel');
            if (carousel) {
                carousel.style.transform = `translateX(-${currentSlide * 25}%)`;
                
                // Update dots
                document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            }
        }

        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentSlide = index;
                updateCarousel();
            });
        });

        // Auto-rotate carousel
        setInterval(() => {
            if (document.getElementById('servicios').classList.contains('active')) {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel();
            }
        }, 4000);

        // Wheel functionality
        function spinWheel() {
            const wheel = document.getElementById('wheel');
            const wheelContainer = document.getElementById('wheel-container');
            const discountCards = document.getElementById('discount-cards');
            
            // Spin animation - always lands on 15%
            wheel.style.transform = 'rotate(1440deg)'; // 4 full rotations
            
            setTimeout(() => {
                wheelContainer.style.display = 'none';
                discountCards.style.display = 'flex';
            }, 3000);
        }

        function selectDiscount(percentage) {
            const solucionaContent = document.querySelector('.soluciona-section');
            const finalForm = document.getElementById('final-form');
            const selectedDiscount = document.getElementById('selected-discount');
            
            selectedDiscount.textContent = percentage + '%';
            solucionaContent.querySelector('.wheel-container').style.display = 'none';
            solucionaContent.querySelector('.discount-cards').style.display = 'none';
            solucionaContent.querySelector('.btn-girar').style.display = 'none';
            finalForm.style.display = 'block';
        }

        function resetWheel() {
            const wheel = document.getElementById('wheel');
            const wheelContainer = document.getElementById('wheel-container');
            const discountCards = document.getElementById('discount-cards');
            const finalForm = document.getElementById('final-form');
            const btnGirar = document.querySelector('.btn-girar');
            
            wheel.style.transform = 'rotate(0deg)';
            wheelContainer.style.display = 'block';
            discountCards.style.display = 'none';
            finalForm.style.display = 'none';
            btnGirar.style.display = 'block';
        }

        function downloadPDF() {
            // Aquí puedes agregar la lógica para descargar el PDF
            alert('PDF descargado exitosamente');
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            showSection('inicio');
        });