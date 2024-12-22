# SocialNetwork

## Español
### Sobre el proyecto
A lo largo de este proyecto, desarrollado en la unidad de Next.js del curso de Certificado Frontend de Digital House, creé una red social similar a Twitter/X, utilizando un backend proporcionado específicamente para la unidad.
En este proyecto, aprendí a realizar llamados a la API de manera efectiva, implementando métodos GET y POST que permiten al usuario interactuar con la interfaz de una forma fluida y realista. Las funcionalidades desarrolladas incluyen:
- Inicio de sesión.
- Creación de usuarios.
- Publicación de mensajes.
- Respuesta a mensajes.
- Cierre de sesión.
Además, utilicé cookies temporales para gestionar la verificación de inicio de sesión y la creación de usuarios, garantizando un manejo seguro y eficiente de las sesiones.

### Dependencias
- Next.js (version 15.0.3)
- React (version 18.3.1)
- React-dom (version 18.3.1)
- React-hook-form (version 7.53.2)
- React-infinite-scroll-component (version 6.1.0)
- Redis (version 4.7.0) - (port 6379)
- Tailwind (version 3.4.15)
- uuid (version 11.0.3)
- yup (react-hook-form resolver) (version 1.5.0)
- storybook (version 8.4.5)
- postcss (version 8.4.49)
- autoprefixer (version 10.4.20)

### Softwares y tecnologias utilizados
- React
- Next.js
- Insomnia
- Docker
- Tailwind

### Instrucciones para correr el proyecto
1. Clonear el repositorio.
2. Instalar las dependencias mencionadas.
3. Instalar y abrir Docker.
4. Desde la terminal, en la carpeta del proyecto, ejecutar en orden:

   ```bash
   docker-compose up db
   ```
   ```bash
   docker-compose up javaapp
   ```
   ```bash
   docker-compose up redis
   ```
   ```bash
   npm run dev
   ```
5. En el caso de querer navegar a la pagina de FAQ es necesario clonar el siguiente repositorio de Strapi ejecutando:
```
```bash
   git clone https://github.com/MaxiCo1/Strapi-SocialNetwork.git
```
6. Luego de clonar el repositorio strapi es necesario inicializarlo, accediendo a la ruta del proyecto en sus archivo y ejecutar:
```
```bash
   npm run develop
```


## English
### About the project
Throughout this project, developed in the Next.js module of the Frontend Certificate course at Digital House, I created a social network similar to Twitter/X, utilizing a backend specifically provided for the module.
In this project, I learned to effectively make API calls, implementing GET and POST methods that enable users to interact with the interface in a smooth and realistic way. The functionalities developed include:
- User login.
- User registration.
- Posting messages.
- Replying to messages.
- Logging out.

Additionally, I utilized temporary cookies to manage login verification and user registration, ensuring secure and efficient session handling.

### Dependencies
- Next.js (version 15.0.3)
- React (version 18.3.1)
- React-dom (version 18.3.1)
- React-hook-form (version 7.53.2)
- React-infinite-scroll-component (version 6.1.0)
- Redis (version 4.7.0) - (port 6379)
- Tailwind (version 3.4.15)
- uuid (version 11.0.3)
- yup (react-hook-form resolver) (version 1.5.0)
- storybook (version 8.4.5)
- postcss (version 8.4.49)
- autoprefixer (version 10.4.20)

### Used softwares and technologies
- React
- Next.js
- Insomnia
- Docker
- Tailwind

### Instructions
1. Clone the repository.
2. Install the mentioned dependencies.
3. Install and open Docker.
4. From the terminal, in the project folder, execute the following commands in order:
   ```bash
   docker-compose up db
   ```
   ```bash
   docker-compose up javaapp
   ```
   ```bash
   docker-compose up redis
   ```
   ```bash
   npm run dev
   ```
5. If you want to navigate to the FAQ page, you need to clone the following Strapi repository by running:
```
```bash
   git clone https://github.com/MaxiCo1/Strapi-SocialNetwork.git
```
6. After cloning the Strapi repository, you need to initialize it by navigating to the project's directory and running:
```
```bash
   npm run develop
```