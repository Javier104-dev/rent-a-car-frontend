<h1 align='center'>Rent a car front-end</h1>

### Especificaciones
- Servidor: http://localhost:3000
- Versión: 1.0.0
- Autor: Javier Anibal Villca
- Repositorio GitHub: git+https://github.com/Javier104-dev/rent-a-car-frontend.git

### Tecnologías utilizadas
- **Node.js v18.16.0**: Plataforma de ejecución de JavaScript del lado del servidor.
- **Express**: Framework web para Node.js, simplifica la creación de aplicaciones web y APIs.
- **ESLint**: Herramienta de linting para mantener un código JavaScript/Node.js consistente y legible.
- **Create React App**:  Herramienta popular utilizada para iniciar rápidamente proyectos de React.

### Estructura de directorios
``` tree
    ├── node_modules
    ├── public
    │   └── index.html
    ├── src
    │   ├── api
    │   ├── components
    │   ├── hooks
    │   ├── utilities
    │   ├── index.css
    │   └── index.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

### Sobre el proyecto
Parte final del proyecto Ren a Car, este es el front de nuestra aplicación. Se encarga de renderizar todos los componentes que conforman la página y servir como interfaz al cliente para poder interactuar con el servidor API RESTful que construimos previamente.

Cuenta con todo lo necesario para la gestión del negocio, formularios para crear o editar los registros, tablas donde se vuelcan los datos obtenidos en cada petición a al servidor.

### Rutas
Las rutas/paginas que componen la página son:

| URL                                | Explicación                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------- |
| http://localhost:3000              | Página principal, renderiza la tabla de reservaciones sin opciones               |
| http://localhost:3000/(*)/add      | Renderiza el formulario para agregar un registro                                 |
| http://localhost:3000/(*)/manage   | Renderiza la tabla para la gestión de los registros, tiene opciones de Ver y Editar |
| http://localhost:3000/(*)/:id/view | Muestra toda la informacion de un registro                                       |
| http://localhost:3000/(*)/:id/edit | Renderiza formulario para editar un registro                                     |

(*) Reservation, Car o User.

<h2 align='center'>Lo que encontrarás</h2>

### Página principal
<p align='left'>
  <img
    alt='Página principal'
    src='https://github.com/Javier104-dev/juego-simon-dice/assets/105408069/f315f4bd-4019-4012-b0e2-b66c6fb05a31'
  >
</p>
<br>

### Nueva reservación
<p align='left'>
  <img
    alt='Página principal'
    src='https://github.com/Javier104-dev/juego-simon-dice/assets/105408069/fcdcfbc0-1e68-4217-ab56-7ddc13983ca6'
  >
</p>
<br>

### Gestionar reservaciones
<p align='left'>
  <img
    alt='Página principal'
    src='https://github.com/Javier104-dev/juego-simon-dice/assets/105408069/cf4b2bf5-48c4-4abf-9388-0e97fd1e3200'
  >
</p>
<br>

### Ver reservación
<p align='left'>
  <img
    alt='Página principal'
    src='https://github.com/Javier104-dev/juego-simon-dice/assets/105408069/523d7248-6d9f-4768-862f-90a88246d5d7'
  >
</p>
<br>

### Editar reservación
<p align='left'>
  <img
    alt='Página principal'
    src='https://github.com/Javier104-dev/juego-simon-dice/assets/105408069/36af6727-ab37-4192-bac6-39186155ae13'
  >
</p>
<br>

<h2 align='center'>Instrucciones de instalación</h2>

### Requerimientos
- IDE - Visual Studio Code v1.84.2
- Servidor [Rent a car back-end](https://github.com/Javier104-dev/crud-clubes-backend), creado en la primera parte del proyecto.
- Git v2.43.0
- Node.js v20.9.0

### Preparando el ambiente
Para que el proyecto funcione correctamente, primero debemos instalar el servidor de lo contrario no se visualizaran las tablas y los formularios no servirán.

### Instalar el servidor
- Descargar o clonar el repositorio [Rent a car back-end](https://github.com/Javier104-dev/crud-clubes-backend).
- Instalar las dependencias necesarias con el comando `npm install`.
- En la raíz del proyecto crear un archivo `.env`, copiar las variables de entorno que se encuentran en el archivo `.env.dist` y reemplazar su valor siguiendo las indicaciones.
- Usar el comando `npm run schema:sync` para sincronizar los modelos con la base de datos, esto creará las tablas si no existen o las actualizará si se hace algún cambio.
- Correr el comando `npm start` para iniciar el servidor.
- Usar la URL base `http://127.0.0.1:8080` para interactuar con el servidor.

### Instalar el proyecto front - end
- Descargar o clonar el repositorio.
- Instalar las dependencias necesarias con el comando `npm install`.
- Usar el comando `npm start` para iniciar la página.
- La página se abrirá automáticamente en el navegador, puede demorar un poco. La url que se usara es: http://localhost:3000
---

### Autor
| [<img src='https://avatars.githubusercontent.com/u/105408069?v=4' width=115><br><sub>Javier Anibal Villca</sub>](https://github.com/Javier104-dev) |
| :------------------------------------------------------------------------------------------------------------------------------------------------: |
