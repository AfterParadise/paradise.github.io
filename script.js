document.addEventListener("DOMContentLoaded", function () {
    const proyectos = [
        { titulo: "Sistema de Gestión Escolar", descripcion: "Plataforma web para la administración de colegios." },
        { titulo: "E-commerce de Equipos Médicos", descripcion: "Plataforma de ventas en línea con pasarela de pagos, dashboard y gestión de ventas." },
        { titulo: "Sistema de Mesa de Ayuda (Helpdesk)", descripcion: "Plataforma para la gestión de tickets, acceso de usuarios con perfiles especializados, controles y reportes de atención." },
        { titulo: "Sistema de Control de Asistencia Offline", descripcion: "Aplicación que registra asistencia sin conexión y sincroniza datos cuando se restablece la conectividad." },
        { titulo: "Web de Consultoría", descripcion: "Sitio informativo con contacto y blog para asesorías TI." }
    ];

    const servicios = [
        { titulo: "Desarrollo Web", descripcion: "Creación de sitios web dinámicos y responsivos." },
        { titulo: "Asesoría en TI", descripcion: "Consultoría en tecnología para empresas y startups." },
        { titulo: "Mantenimiento Web", descripcion: "Optimización y actualización de sitios existentes." }
    ];

    function cargarDatos(contenedorId, datos) {
        const contenedor = document.getElementById(contenedorId);
        datos.forEach(dato => {
            const div = document.createElement("div");
            div.classList.add("proyecto", "servicio");
            div.innerHTML = `<h3>${dato.titulo}</h3><p>${dato.descripcion}</p>`;
            contenedor.appendChild(div);
        });
    }

    cargarDatos("proyectos-container", proyectos);
    cargarDatos("servicios-container", servicios);
});
