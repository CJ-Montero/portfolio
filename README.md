# Portafolio Personal de CJ Montero

Este repositorio contiene el código fuente del portafolio personal de CJ Montero, desarrollado con [Astro](https://astro.build/), un moderno framework para sitios web rápidos y optimizados. El sitio está diseñado para presentar información profesional, proyectos destacados y enlaces de contacto.

## 🚀 Tecnologías Utilizadas

- **Astro**: Framework para sitios web estáticos y rápidos.
- **TypeScript**: Tipado estático para JavaScript.
- **Netlify**: Plataforma de despliegue continuo.
- **HTML/CSS**: Estructura y estilos personalizados.
- **VS Code**: Configuración del entorno de desarrollo.

## 📁 Estructura del Proyecto

```
/
├── public/                # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── layouts/           # Plantillas base (Layout.astro)
│   └── pages/             # Páginas del sitio (index.astro, about.astro, etc.)
├── .vscode/               # Configuraciones del editor
├── astro.config.mjs       # Configuración de Astro
├── netlify.toml           # Configuración de despliegue en Netlify
├── package.json           # Dependencias y scripts del proyecto
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Documentación del proyecto
```

## 🛠️ Instalación y Desarrollo Local

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/CJ-Montero/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   El sitio estará disponible en `http://localhost:4321`.

## 🌐 Despliegue

Este proyecto está configurado para desplegarse automáticamente en [Netlify](https://www.netlify.com/) mediante el archivo `netlify.toml`. Para realizar un despliegue manual:

1. Crear una cuenta en Netlify y conectar el repositorio.
2. Configurar los comandos de construcción y la carpeta de salida:
   - **Comando de construcción:** `npm run build`
   - **Carpeta de salida:** `dist/`
3. Iniciar el despliegue.

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
