const productos = [
  {
    id: 1,
    nombre: "Guitarra eléctrica",
    categoria: "guitarras",
    precio: 1299000,
    descripcion: "Guitarra eléctrica de seis cuerdas para practicar y tocar en vivo.",
    imagen: "assets/producto.svg"
  },
  {
    id: 2,
    nombre: "Guitarra acústica",
    categoria: "guitarras",
    precio: 749000,
    descripcion: "Guitarra acústica de madera con sonido cálido y equilibrado.",
    imagen: "assets/producto.svg"
  },
  {
    id: 3,
    nombre: "Bajo eléctrico",
    categoria: "bajos",
    precio: 1199000,
    descripcion: "Bajo eléctrico de cuatro cuerdas, ideal para ensayos y escenario.",
    imagen: "assets/producto.svg"
  },
  {
    id: 4,
    nombre: "Teclado",
    categoria: "teclados",
    precio: 899000,
    descripcion: "Teclado digital de 61 teclas con sonidos y ritmos integrados.",
    imagen: "assets/producto.svg"
  },
  {
    id: 5,
    nombre: "Batería acústica",
    categoria: "baterias",
    precio: 2499000,
    descripcion: "Batería acústica completa para comenzar a tocar con tu banda.",
    imagen: "assets/producto.svg"
  },
  {
    id: 6,
    nombre: "Micrófono",
    categoria: "accesorios",
    precio: 329000,
    descripcion: "Micrófono dinámico para voces, ensayos y presentaciones.",
    imagen: "assets/producto.svg"
  },
  {
    id: 7,
    nombre: "Afinador",
    categoria: "accesorios",
    precio: 59000,
    descripcion: "Afinador digital de pinza con pantalla fácil de leer.",
    imagen: "assets/producto.svg"
  },
  {
    id: 8,
    nombre: "Pedal de efectos",
    categoria: "accesorios",
    precio: 249000,
    descripcion: "Pedal compacto para añadir efectos a tu guitarra eléctrica.",
    imagen: "assets/producto.svg"
  },
  {
    id: 9,
    nombre: "Cuerdas",
    categoria: "accesorios",
    precio: 79000,
    descripcion: "Juego de cuerdas de repuesto para guitarra acústica o eléctrica.",
    imagen: "assets/producto.svg"
  },
  {
    id: 10,
    nombre: "Baquetas",
    categoria: "accesorios",
    precio: 45000,
    descripcion: "Par de baquetas de madera para batería y percusión.",
    imagen: "assets/producto.svg"
  }
];

function generarTarjeta(producto) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "producto";
  tarjeta.dataset.categoria = producto.categoria;

  tarjeta.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h4>${producto.nombre}</h4>
    <p>${producto.descripcion}</p>
    <p class="precio">$${producto.precio.toLocaleString("es-CO")}</p>
  `;

  return tarjeta;
}

function mostrarProductos(categoriaSeleccionada = "todos") {
  const contenedores = document.querySelectorAll("[data-categoria]");
  const secciones = document.querySelectorAll(".categoria, #accesorios");

  contenedores.forEach((contenedor) => {
    contenedor.innerHTML = "";
  });

  productos
    .filter((producto) => categoriaSeleccionada === "todos" || producto.categoria === categoriaSeleccionada)
    .forEach((producto) => {
      const contenedor = document.querySelector(`[data-categoria="${producto.categoria}"]`);
      if (contenedor) {
        contenedor.appendChild(generarTarjeta(producto));
      }
    });

  secciones.forEach((seccion) => {
    const categoria = seccion.dataset.categoria || seccion.querySelector(".lista-productos, .lista-accesorios")?.dataset.categoria;
    seccion.hidden = categoriaSeleccionada !== "todos" && categoria !== categoriaSeleccionada;
  });
}

function configurarFiltros() {
  const botones = document.querySelectorAll(".filtro");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      botones.forEach((botonActual) => botonActual.classList.remove("activo"));
      boton.classList.add("activo");
      mostrarProductos(boton.dataset.filtro);
    });
  });
}

function configurarFormulario() {
  const formulario = document.querySelector("form");
  const campos = {
    nombre: {
      elemento: formulario.querySelector("#nombre"),
      validar: (valor) => valor.length >= 3 ? "" : "El nombre debe tener al menos 3 caracteres."
    },
    correo: {
      elemento: formulario.querySelector("#correo"),
      validar: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor) ? "" : "Escribe un correo electrónico válido."
    },
    telefono: {
      elemento: formulario.querySelector("#telefono"),
      validar: (valor) => /^[+\d][\d\s()-]{6,}$/.test(valor) ? "" : "Escribe un teléfono válido."
    },
    asunto: {
      elemento: formulario.querySelector("#asunto"),
      validar: (valor) => valor.length > 0 ? "" : "El asunto es obligatorio."
    },
    mensaje: {
      elemento: formulario.querySelector("#mensaje"),
      validar: (valor) => valor.length >= 10 ? "" : "El mensaje debe tener al menos 10 caracteres."
    }
  };

  Object.values(campos).forEach(({ elemento }) => {
    const error = document.createElement("span");
    error.className = "mensaje-error";
    error.setAttribute("aria-live", "polite");
    elemento.insertAdjacentElement("afterend", error);
  });

  const mensajeExito = document.createElement("p");
  mensajeExito.className = "mensaje-exito";
  mensajeExito.setAttribute("role", "status");
  mensajeExito.hidden = true;
  formulario.insertAdjacentElement("afterend", mensajeExito);

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensajeExito.hidden = true;

    let formularioValido = true;
    let primerCampoConError = null;

    Object.values(campos).forEach(({ elemento, validar }) => {
      const valor = elemento.value.trim();
      const mensaje = valor.length === 0 ? "Este campo es obligatorio." : validar(valor);
      const error = elemento.nextElementSibling;

      error.textContent = mensaje;
      elemento.setAttribute("aria-invalid", mensaje ? "true" : "false");

      if (mensaje) {
        formularioValido = false;
        primerCampoConError = primerCampoConError || elemento;
      }
    });

    if (!formularioValido) {
      primerCampoConError.focus();
      return;
    }

    mensajeExito.textContent = "¡Gracias! Tu mensaje fue enviado correctamente.";
    mensajeExito.hidden = false;
    formulario.reset();
  });
}

mostrarProductos();
configurarFiltros();
configurarFormulario();
