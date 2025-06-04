// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, #A015E0 0%, #53B7F5 100%)';
    } else {
        header.style.background = 'linear-gradient(135deg, #A015E0 0%, #53B7F5 100%)';
    }
});

// Add floating particles animation
function createFloatingParticle() {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 6 + 2}px;
        height: ${Math.random() * 6 + 2}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        pointer-events: none;
        animation: floatUp ${Math.random() * 3 + 2}s linear infinite;
        left: ${Math.random() * 100}%;
        bottom: -10px;
    `;
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 5000);
    }
}

// Create particles periodically
setInterval(createFloatingParticle, 500);

// Service card interactions
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'white';
    });
});

// Initialize animations on page load
window.addEventListener('load', function() {
    // Trigger initial animations
    setTimeout(() => {
        document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 300);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Add smooth scrolling behavior to page
document.documentElement.style.scrollBehavior = 'smooth';

// Preload animations
document.addEventListener('DOMContentLoaded', function() {
    // Add initial loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization - throttle scroll events
let ticking = false;

function updateScrollEffects() {
    const scrollY = window.scrollY;
    const header = document.querySelector('header');
    
    // Update header background
    if (scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, #A015E0 0%, #53B7F5 100%)';
    } else {
        header.style.background = 'linear-gradient(135deg, #A015E0 0%, #53B7F5 100%)';
    }
    
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Add entrance animations with delays
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card');
    elements.forEach((element, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100); // Stagger animation
                }
            });
        });
        observer.observe(element);
    });
}

// Call animation function
animateOnScroll();

// Form validation enhancement
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Email subscription with validation
document.addEventListener('DOMContentLoaded', function() {
    const emailSubmitBtn = document.querySelector('.email-submit');
    if (emailSubmitBtn) {
        emailSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const emailInput = document.querySelector('.email-input');
            const email = emailInput.value.trim();
            
            if (!email) {
                alert('Por favor ingresa tu email.');
                emailInput.focus();
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Por favor ingresa un email válido.');
                emailInput.focus();
                return;
            }
            
            // Simulate successful subscription
            this.innerHTML = '<i class="fas fa-check"></i>';
            this.style.background = '#10B981';
            
            setTimeout(() => {
                alert('¡Gracias por suscribirte! Te mantendremos informado!');
                emailInput.value = '';
                this.innerHTML = '<i class="fas fa-envelope"></i>';
                this.style.background = '';
            }, 2000);
        });
    }
});

// Animación adicional para las esferas al hacer hover
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sphere').forEach(sphere => {
        sphere.addEventListener('mouseenter', () => {
            sphere.style.transform = 'scale(1.1) translateY(-10px)';
            sphere.style.transition = 'transform 0.3s ease';
        });
        
        sphere.addEventListener('mouseleave', () => {
            sphere.style.transform = 'scale(1) translateY(0px)';
        });
    });
});

// ========================================
// WHATSAPP FUNCTIONALITY
// ========================================

// Configuración del número de WhatsApp
const WHATSAPP_NUMBER = "593983328956";

// Función para crear el mensaje de WhatsApp
function createWhatsAppMessage(cedula, nombres, celular, email, detalleDeuda) {
    let mensaje = `🔷 *NUEVA SOLICITUD DE CONSULTA* 🔷\n\n`;
    mensaje += `👤 *DATOS PERSONALES:*\n`;
    mensaje += `• Nombres: ${nombres}\n`;
    mensaje += `• Cédula: ${cedula}\n`;
    mensaje += `• Celular: ${celular}\n`;
    mensaje += `• Email: ${email}\n\n`;
    
    mensaje += `💰 *DETALLE DE LA DEUDA:*\n`;
    mensaje += `${detalleDeuda}\n\n`;
    
    mensaje += `📅 *Fecha de solicitud:* ${new Date().toLocaleDateString('es-EC', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })}\n\n`;
    
    mensaje += `✅ *Solicitud enviada desde la página web*`;

    return mensaje;
}

// Función para enviar por WhatsApp
function sendToWhatsApp(mensaje) {
    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    console.log('Abriendo WhatsApp:', whatsappURL);
    window.open(whatsappURL, '_blank');
}

// Validación de cédula ecuatoriana
function validarCedula(cedula) {
    if (cedula.length !== 10) return false;
    
    const digits = cedula.split('').map(Number);
    const provincia = parseInt(cedula.substring(0, 2));
    
    if (provincia < 1 || provincia > 24) return false;
    
    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let suma = 0;
    
    for (let i = 0; i < 9; i++) {
        let valor = digits[i] * coeficientes[i];
        if (valor >= 10) valor -= 9;
        suma += valor;
    }
    
    const digitoVerificador = suma % 10 === 0 ? 0 : 10 - (suma % 10);
    return digitoVerificador === digits[9];
}

// Formatear número de teléfono
function formatearTelefono(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 10) value = value.substring(0, 10);
    
    if (value.length >= 6) {
        value = value.replace(/(\d{4})(\d{3})(\d{0,3})/, '$1-$2-$3');
    } else if (value.length >= 4) {
        value = value.replace(/(\d{4})(\d{0,3})/, '$1-$2');
    }
    
    input.value = value;
}

// Función de debugging
function debugFormData() {
    const form = document.getElementById('debtForm');
    if (!form) {
        console.error('No se encontró el formulario con id "debtForm"');
        return;
    }
    
    console.log('=== DEBUG FORMULARIO ===');
    
    // Verificar campos específicos
    const campos = ['cedula', 'nombres', 'celular', 'email', 'detalleDeuda'];
    campos.forEach(campo => {
        const elemento = document.getElementById(campo);
        if (elemento) {
            console.log(`Campo ${campo}: valor="${elemento.value}", name="${elemento.name}"`);
        } else {
            console.error(`No se encontró el elemento con id "${campo}"`);
        }
    });
}

// Configurar validaciones del formulario
function setupFormValidations() {
    const cedulaInput = document.getElementById('cedula');
    const celularInput = document.getElementById('celular');

    // Event listeners para validación en tiempo real
    if (cedulaInput) {
        cedulaInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 10);
        });
    }

    if (celularInput) {
        celularInput.addEventListener('input', (e) => {
            formatearTelefono(e.target);
        });
    }
}

// Función principal para manejar el envío del formulario
function handleFormSubmit(e) {
    e.preventDefault();
    
    console.log('=== INICIANDO ENVÍO DEL FORMULARIO ===');
    
    // Obtener el formulario
    const form = document.getElementById('debtForm');
    if (!form) {
        alert('Error: No se pudo encontrar el formulario');
        return;
    }
    
    // Obtener valores directamente de los elementos
    const cedula = document.getElementById('cedula')?.value?.trim() || '';
    const nombres = document.getElementById('nombres')?.value?.trim() || '';
    const celular = document.getElementById('celular')?.value?.trim() || '';
    const email = document.getElementById('email')?.value?.trim() || '';
    const detalleDeuda = document.getElementById('detalleDeuda')?.value?.trim() || '';
    
    console.log('Valores obtenidos:');
    console.log('Cédula:', cedula);
    console.log('Nombres:', nombres);
    console.log('Celular:', celular);
    console.log('Email:', email);
    console.log('Detalle:', detalleDeuda);
    
    // Validar campos uno por uno
    if (!cedula) {
        alert('Por favor, ingresa tu número de cédula.');
        document.getElementById('cedula')?.focus();
        return;
    }
    
    if (!nombres) {
        alert('Por favor, ingresa tus nombres completos.');
        document.getElementById('nombres')?.focus();
        return;
    }
    
    if (!celular) {
        alert('Por favor, ingresa tu número de celular.');
        document.getElementById('celular')?.focus();
        return;
    }
    
    if (!email) {
        alert('Por favor, ingresa tu correo electrónico.');
        document.getElementById('email')?.focus();
        return;
    }
    
    if (!detalleDeuda) {
        alert('Por favor, describe el detalle de tu deuda.');
        document.getElementById('detalleDeuda')?.focus();
        return;
    }
    
    // Validar cédula ecuatoriana
    if (!validarCedula(cedula)) {
        alert('Por favor, ingresa un número de cédula válido.');
        document.getElementById('cedula')?.focus();
        return;
    }
    
    // Validar email
    if (!validateEmail(email)) {
        alert('Por favor, ingresa un email válido.');
        document.getElementById('email')?.focus();
        return;
    }
    
    // Si llegamos aquí, todos los campos están llenos
    console.log('✅ Todas las validaciones pasaron');
    
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Cambiar botón a estado de carga
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>Preparando envío...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        try {
            // Crear mensaje para WhatsApp
            const mensaje = createWhatsAppMessage(cedula, nombres, celular, email, detalleDeuda);
            console.log('Mensaje creado:', mensaje);
            
            // Enviar por WhatsApp
            sendToWhatsApp(mensaje);
            
            // Mostrar mensaje de éxito
            form.style.display = 'none';
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
            }
            
            console.log('✅ Formulario enviado exitosamente');
            
        } catch (error) {
            console.error('❌ Error al enviar:', error);
            alert('Hubo un error al procesar tu solicitud. Por favor, intenta nuevamente.');
        } finally {
            // Restaurar botón
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
        
        // Cerrar popup después de 3 segundos
        setTimeout(() => {
            closePopup();
        }, 3000);
        
    }, 1500);
}

// ========================================
// POPUP FUNCTIONALITY
// ========================================

// Variables globales del popup
let openPopupBtn, closePopupBtn, popupOverlay, debtForm, successMessage;

// Función para cerrar popup
function closePopup() {
    if (popupOverlay) {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaurar scroll
        
        // Resetear formulario después de cerrar
        setTimeout(() => {
            if (debtForm && successMessage) {
                debtForm.style.display = 'block';
                successMessage.style.display = 'none';
                debtForm.reset();
            }
        }, 300);
    }
}

// Función para verificar que todos los elementos existen
function checkFormElements() {
    const elementos = [
        'debtForm',
        'cedula', 
        'nombres', 
        'celular', 
        'email', 
        'detalleDeuda',
        'successMessage'
    ];
    
    console.log('=== VERIFICANDO ELEMENTOS DEL FORMULARIO ===');
    
    elementos.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            console.log(`✅ ${id}: encontrado`);
        } else {
            console.error(`❌ ${id}: NO encontrado`);
        }
    });
}

// Función mejorada para inicializar el formulario
function initializeFormImproved() {
    console.log('Inicializando formulario...');
    
    // Verificar elementos
    checkFormElements();
    
    // Obtener elementos del DOM
    openPopupBtn = document.getElementById('openPopupBtn');
    closePopupBtn = document.getElementById('closePopupBtn');
    popupOverlay = document.getElementById('popupOverlay');
    debtForm = document.getElementById('debtForm');
    successMessage = document.getElementById('successMessage');

    // Verificar que los elementos principales existan
    if (!openPopupBtn) {
        console.error('No se encontró el botón openPopupBtn');
    }
    if (!popupOverlay) {
        console.error('No se encontró el popup overlay');
    }
    if (!debtForm) {
        console.error('❌ No se encontró el formulario');
        return;
    }

    // Configurar eventos del popup
    if (openPopupBtn) {
        openPopupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Abriendo popup...');
            popupOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', closePopup);
    }

    if (popupOverlay) {
        // Cerrar popup al hacer clic fuera
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                closePopup();
            }
        });
    }

    // Cerrar popup con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popupOverlay && popupOverlay.classList.contains('active')) {
            closePopup();
        }
    });
    
    // Configurar validaciones
    setupFormValidations();
    
    // Configurar envío del formulario
    debtForm.addEventListener('submit', handleFormSubmit);
    
    console.log('✅ Formulario inicializado correctamente');
}

// ===============================================
// ANIMACIONES QUE SE REPITEN AL PASAR
// ===============================================

// Función para resetear las clases de animación
function resetHeroAnimations(section) {
    const elements = section.querySelectorAll('.hero-text, .hero-image, .hero-description, h1, p, .cta-button, .imgInicio');
    
    elements.forEach(element => {
        element.classList.remove('slide-in-left', 'slide-in-right', 'slide-in-top', 'visible');
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = '';
    });
}

// Función para aplicar animaciones
function applyHeroAnimations(section) {
    const heroText = section.querySelector('.hero-text');
    const heroImage = section.querySelector('.hero-image');
    const heroDescription = section.querySelector('.hero-description') || section.querySelector('.hero-content > div:last-child');
    const heroTitle = section.querySelector('h1');
    const heroParagraph = section.querySelector('p');
    const heroButton = section.querySelector('.cta-button');
    const heroImg = section.querySelector('.imgInicio');

    setTimeout(() => {
        if (heroText) {
            heroText.classList.add('slide-in-left', 'visible');
        }
        if (heroTitle) {
            heroTitle.classList.add('slide-in-left', 'visible');
        }
    }, 100);

    setTimeout(() => {
        if (heroImage) {
            heroImage.classList.add('slide-in-top', 'visible');
        }
        if (heroImg) {
            heroImg.classList.add('slide-in-top', 'visible');
        }
    }, 400);

    setTimeout(() => {
        if (heroDescription) {
            heroDescription.classList.add('slide-in-right', 'visible');
        }
        if (heroParagraph) {
            heroParagraph.classList.add('slide-in-right', 'visible');
        }
        if (heroButton) {
            heroButton.classList.add('slide-in-top', 'visible');
        }
    }, 700);
}

// Configurar animaciones repetitivas del hero
function setupRepeatingHeroAnimations() {
    const heroSection = document.querySelector('.hero');
    
    if (!heroSection) {
        console.log('No se encontró la sección hero');
        return;
    }

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Hero visible - aplicando animaciones');
                applyHeroAnimations(entry.target);
            } else {
                console.log('Hero oculto - reseteando animaciones');
                resetHeroAnimations(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    heroObserver.observe(heroSection);
}

// Configurar animaciones de servicios
function setupRepeatingServiceAnimations() {
    const servicesSection = document.querySelector('.services');
    if (!servicesSection) return;

    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const serviceCards = entry.target.querySelectorAll('.service-card');
            
            if (entry.isIntersecting) {
                console.log('Servicios visible - animando cards');
                
                serviceCards.forEach((card, index) => {
                    card.classList.remove('fade-in', 'visible');
                    card.offsetHeight;
                    
                    setTimeout(() => {
                        card.classList.add('fade-in', 'visible');
                    }, index * 150);
                });
            } else {
                serviceCards.forEach(card => {
                    card.classList.remove('fade-in', 'visible');
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    serviceObserver.observe(servicesSection);
}

// Configurar animaciones de trabajo
function setupRepeatingWorkAnimations() {
    const workSection = document.querySelector('.work');
    if (!workSection) return;

    const workObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const workText = entry.target.querySelector('.work-text');
            const workNewsletter = entry.target.querySelector('.work-newsletter');
            const spheres = entry.target.querySelectorAll('.sphere');
            
            if (entry.isIntersecting) {
                console.log('Trabajo visible - animando elementos');
                
                [workText, workNewsletter].forEach(element => {
                    if (element) {
                        element.classList.remove('slide-in-left', 'slide-in-right', 'visible');
                        element.offsetHeight;
                    }
                });
                
                setTimeout(() => {
                    if (workText) {
                        workText.classList.add('slide-in-left', 'visible');
                    }
                }, 200);
                
                setTimeout(() => {
                    if (workNewsletter) {
                        workNewsletter.classList.add('slide-in-right', 'visible');
                    }
                }, 400);
                
                spheres.forEach(sphere => {
                    sphere.style.animationPlayState = 'running';
                });
                
            } else {
                [workText, workNewsletter].forEach(element => {
                    if (element) {
                        element.classList.remove('slide-in-left', 'slide-in-right', 'visible');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    workObserver.observe(workSection);
}

// Inicializar todas las animaciones repetitivas
function initRepeatingAnimations() {
    console.log('Inicializando animaciones repetitivas...');
    setupRepeatingHeroAnimations();
    setupRepeatingServiceAnimations();
    setupRepeatingWorkAnimations();
}

// ===============================================
// INICIALIZACIÓN PRINCIPAL
// ===============================================

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar formulario mejorado
    setTimeout(() => {
        initializeFormImproved();
    }, 1000);
    
    // Inicializar animaciones repetitivas
    setTimeout(() => {
        initRepeatingAnimations();
    }, 1500);
});