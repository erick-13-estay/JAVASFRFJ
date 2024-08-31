document.addEventListener("DOMContentLoaded", () => {
    // Función para mostrar una alerta al hacer clic en el botón
    document.getElementById("alertButton").addEventListener("click", () => {
        alert("¡Botón clickeado!");
    });

    // Manejo del menú desplegable
    document.querySelectorAll('.dropdown-toggle').forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', () => {
            const dropdownMenu = dropdownToggle.nextElementSibling;
            dropdownMenu.classList.toggle('show');
        });
    });

    // Manejo del desplazamiento de imágenes
    const handleScroll = () => {
        document.querySelectorAll('.scroll-image').forEach(image => {
            const imagePosition = image.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (imagePosition < screenPosition) {
                image.classList.add('visible');
            } else {
                image.classList.remove('visible');
            }
        });
    };

    // Activar la función de desplazamiento en scroll
    window.addEventListener('scroll', handleScroll);

    // Alternar la visibilidad de las descripciones de las imágenes
    document.querySelectorAll('.list-group-item').forEach(item => {
        item.addEventListener('click', event => {
            const target = event.target;
            if (target.classList.contains('scroll-image')) {
                const descriptionElement = target.nextElementSibling;
                if (descriptionElement) {
                    descriptionElement.classList.toggle('d-none');
                }
            }
        });
    });
});

// Función para cambiar el color de fondo según la selección
const changeBackgroundColor = () => {
    const selectedColor = document.getElementById('colorSelect').value;
    document.body.className = `bg-${selectedColor} text-dark`;
};

// Función para cambiar la fuente de una imagen al hacer clic en un ítem de la lista
const changeImageSource = (item, newSrc) => {
    const image = document.querySelector(`img[alt="Este es el ${item.toLowerCase()}"]`);
    if (image) {
        image.src = newSrc;
    }
};
