# Melody Store

## Descripción

Melody Store es una tienda web de instrumentos musicales y algunos
accesorios. Está pensada para personas que están aprendiendo, músicos con más
experiencia y bandas que necesitan revisar opciones para su equipo.

La idea es reunir la información básica de los productos en un solo lugar:
nombre, descripción, precio e imagen. También permite buscar por categoría y
enviar una consulta desde el formulario de contacto.

## Funcionalidades

- Catálogo de instrumentos y accesorios con nombre, descripción, precio e imagen.
- Categorías de guitarras, bajos, teclados, baterías e instrumentos de viento.
- Filtros para ver todos los productos o solo una categoría.
- Formulario de contacto con nombre, correo, teléfono, asunto y mensaje.
- Validación personalizada de los campos del formulario.
- Mensajes de error cuando falta información o un dato no tiene el formato esperado.
- Mensaje de confirmación cuando el formulario se completa correctamente.
- Menú hamburguesa para navegar desde el celular.
- Diseño responsive para escritorio, tablet y móvil.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Git/GitHub
- Vercel

## Estructura del proyecto

- `index.html`: contiene la estructura de la página, el menú, el catálogo y el formulario.
- `styles.css`: contiene los estilos, la distribución de los elementos y los cambios para pantallas pequeñas.
- `script.js`: contiene los productos, los filtros, la validación del formulario y el menú responsive.
- `img/`: contiene el logo, las imágenes de las categorías y las imágenes de los productos.
- `README.md`: contiene la información general del proyecto.

## Decisiones técnicas

### 1. ¿Dónde se utilizó Flexbox y por qué?

Se utilizó Flexbox principalmente en el encabezado, la navegación, los
botones y los filtros. Sirve para ordenar los elementos y hacer que se
acomoden mejor cuando cambia el ancho de la pantalla.

### 2. ¿Dónde se utilizó Grid y por qué?

Se utilizó Grid para organizar las categorías y las tarjetas de productos.
Así se pueden mostrar varias columnas en escritorio y reducirlas en pantallas
más pequeñas.

### 3. ¿Qué hace JavaScript?

JavaScript crea las tarjetas del catálogo, aplica los filtros, valida el
formulario y abre o cierra el menú hamburguesa.

### 4. ¿Cómo funciona el catálogo dinámico?

Los productos están guardados en un arreglo dentro de `script.js`. JavaScript
recorre ese arreglo y crea las tarjetas en la página. Al seleccionar un filtro,
solo deja visibles los productos de la categoría elegida.

### 5. ¿Cómo funciona la validación?

Cuando se intenta enviar el formulario, JavaScript revisa que los campos no
estén vacíos. También comprueba el formato del correo, el teléfono y la
longitud mínima del nombre y del mensaje. Si hay un error, lo muestra junto al
campo correspondiente. Si todo está correcto, aparece un mensaje de éxito sin
recargar la página.

### 6. ¿Qué fue lo más difícil?

Lo más difícil fue coordinar el catálogo, los filtros y el formulario sin
repetir mucho código. También fue necesario cuidar que el menú funcionara bien
en pantallas pequeñas.Además de organizar correctamente las imagenes.

### 7. ¿Cómo se solucionó?

Se guardaron los productos en un solo arreglo y se crearon las tarjetas desde
JavaScript. Para el menú y los filtros se usaron eventos `click`, y para el
formulario se usó el evento `submit`. El diseño se ajustó con Flexbox, Grid y
media queries.

## Uso de IA

La IA se utilizó como apoyo para corregir ciertos códigos que no estaban bien
organizados, proponer recomendaciones para que el código quedara más claro y
ayudar a diseñar el logo de la empresa. Los cambios finales se revisaron y se
adaptaron al proyecto.

## Sitio publicado

URL de Vercel: _(pendiente de agregar)_

## Capturas

### Escritorio

Agregar aquí la captura de la versión de escritorio:

`[captura-escritorio.png]`

### Móvil

Agregar aquí la captura de la versión móvil:

`[captura-movil.png]`
