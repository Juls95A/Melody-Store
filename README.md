# Melody Store

Tienda web de instrumentos musicales.

## Etapa actual: Estructura HTML inicial

En esta etapa se construyó únicamente la estructura base del sitio, usando
HTML5 semántico y un archivo CSS externo para pruebas visuales mínimas.
Todavía no se implementó JavaScript.

### Contenido de esta etapa

- Header con logo y navegación a las secciones del sitio.
- Hero con título, descripción y botón hacia la sección de instrumentos.
- Sección de Instrumentos con las categorías: guitarras, bajos, teclados,
  baterías e instrumentos de viento. Cada categoría tiene un contenedor
  (`.lista-productos`) preparado para recibir tarjetas de producto generadas
  con JavaScript en una etapa posterior.
- Sección de Accesorios con: cuerdas, afinadores, pedales, baquetas y
  micrófonos.
- Sección Nosotros con una breve descripción de la tienda.
- Sección Contacto con un formulario (nombre, correo, teléfono, asunto,
  mensaje) sin validación todavía.

### Estructura de archivos

```
/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
```

### Pendiente para próximas etapas

- Generar las tarjetas de productos desde JavaScript.
- Validar el formulario de contacto.
- Mejorar el diseño visual (CSS completo).