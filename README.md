# Melody Store

## Descripción

Melody Store es una tienda web de instrumentos musicales. Está pensada para
personas que están empezando a tocar, músicos que ya tienen experiencia y
bandas que necesitan encontrar instrumentos o accesorios.

La página reúne los productos en un solo lugar para que sea más fácil revisar
qué ofrece la tienda, buscar por categoría y enviar una consulta. También
busca que la información se pueda consultar cómodamente desde un celular.

## Funcionalidades

- Catálogo de instrumentos y accesorios con nombre, descripción, precio e
  imagen.
- Categorías de guitarras, bajos, teclados, baterías y accesorios.
- Filtros para mostrar todos los productos o una categoría específica.
- Formulario de contacto con nombre, correo, teléfono, asunto y mensaje.
- Validación de los datos antes de enviar el formulario.
- Mensajes de error junto al campo que necesita ser corregido.
- Mensaje de confirmación cuando el formulario es válido.
- Diseño responsive para móvil, tablet y escritorio.
- Menú hamburguesa para facilitar la navegación en pantallas pequeñas.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Git/GitHub
- Vercel

## Estructura del proyecto

- `index.html`: contiene la estructura y las secciones de la página.
- `styles.css`: contiene los colores, la distribución, las tarjetas y los
  estilos responsive.
- `script.js`: contiene los productos, los filtros, la validación del
  formulario y el menú móvil.
- `img/`: contiene el logo, las imágenes de categorías y las imágenes individuales de los productos.
- `README.md`: contiene la información del proyecto.

## Decisiones técnicas

### 1. ¿Dónde se utilizó Flexbox y por qué?

Se utilizó Flexbox en el header, la navegación, los filtros y algunos botones.
Lo elegí porque permite ordenar los elementos en fila o columna y acomodarlos
cuando cambia el tamaño de la pantalla.

### 2. ¿Dónde se utilizó Grid y por qué?

Se utilizó Grid en el catálogo de productos. Así las tarjetas pueden estar
organizadas en varias columnas en una pantalla grande y pasar a menos columnas
en tablet o móvil.

### 3. ¿Qué hace JavaScript?

JavaScript genera las tarjetas del catálogo, permite filtrar los productos,
valida el formulario y controla la apertura y el cierre del menú hamburguesa.

### 4. ¿Cómo funciona el catálogo dinámico?

Los productos están guardados en un arreglo de objetos dentro de `script.js`.
JavaScript recorre ese arreglo y crea las tarjetas directamente en el DOM.
Cuando se pulsa un filtro, muestra solamente los productos de esa categoría.

### 5. ¿Cómo funciona la validación?

Al intentar enviar el formulario, JavaScript revisa que los campos no estén
vacíos, que el nombre y el mensaje tengan una longitud mínima, que el correo
tenga un formato válido y que el teléfono tenga un formato razonable. Si hay
un error, aparece un mensaje junto al campo correspondiente. Si todo está bien,
se muestra un mensaje de confirmación sin recargar la página.

### 6. ¿Qué fue lo más difícil?

Lo más difícil fue lograr que el catálogo y el formulario funcionaran sin
escribir cada tarjeta manualmente y sin que el diseño se dañara en pantallas
pequeñas.

### 7. ¿Cómo se solucionó?

Se separaron los productos en un arreglo y se crearon las tarjetas con
JavaScript. Para el diseño se usaron Grid, Flexbox y media queries. También se
probaron distintos tamaños de pantalla y diferentes datos en el formulario.

## Uso de IA

Se utilizó IA como apoyo durante el desarrollo para revisar ideas, detectar
errores y ayudar a organizar algunas partes del código. Las decisiones finales
se revisaron y se probaron dentro del proyecto.

## Sitio publicado

URL de Vercel: _(pendiente de agregar)_

## Capturas

### Escritorio

Agregar aquí la captura de la versión de escritorio:

`[captura-escritorio.png]`

### Móvil

Agregar aquí la captura de la versión móvil:

`[captura-movil.png]`
