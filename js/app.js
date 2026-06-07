// ---- Lógica de Navegación del Proyecto ----
document.addEventListener("DOMContentLoaded", () => {
    console.log("¡El sistema de navegación de Talento sin Fronteras está activo!");

    // Efecto visual: Cambiar el color de la barra de navegación al hacer scroll
    const navbar = document.querySelector(".navbar");
    
    if (navbar) { // Añadimos un seguro por si acaso la clase no existe
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                navbar.style.borderBottom = "1px solid #e2e8f0";
            } else {
                navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
                navbar.style.borderBottom = "none";
            }
        });
    }
});

// 🚀 FUNCIÓN MÁGICA: Esta función abre y cierra tus pestañas
function showMain(sectionId) {
    console.log("Cambiando a la pestaña:", sectionId);

    // 1. Ocultar todas las secciones de la página
    const sections = document.querySelectorAll('.section-tab');
    sections.forEach(sec => {
        sec.classList.remove('active');
    });

    // 2. Desactivar todos los botones del menú superior y móvil
    const tabButtons = document.querySelectorAll('.main-tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Mostrar la sección que el usuario seleccionó
    const targetSection = document.getElementById('sec-' + sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    } else {
        console.warn("No se encontró la sección: sec-" + sectionId);
    }

    // 4. Activar los botones correspondientes
    const targetTabBtn = document.getElementById('tb-' + sectionId);
    if (targetTabBtn) targetTabBtn.classList.add('active');

    const targetMenuLink = document.getElementById('m-' + sectionId);
    if (targetMenuLink) targetMenuLink.classList.add('active');

    // 5. Cerrar el menú móvil automáticamente si estaba abierto
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('open');
    }

    // Hacer scroll automático hacia arriba para que el usuario vea la pestaña desde el principio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 📱 Función extra por si usas menú de hamburguesa en móviles
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('open');
    }
}