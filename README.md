# Diego Rivera | Dev Blog & Portfolio

![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat&logo=astro)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-blue?style=flat&logo=tailwindcss)
![Alpine.js](https://img.shields.io/badge/Alpine.js-3.x-8bc0d0?style=flat&logo=alpinedotjs)
![Status](https://img.shields.io/badge/Status-Active-success)

Este repositorio contiene el código fuente de mi **Blog Personal y Portafolio Profesional**. Es una plataforma moderna diseñada para compartir conocimientos sobre **Ingeniería de Software**, **Python**, **Django** y **Arquitectura Backend**, además de mostrar mi trayectoria y proyectos destacados.

## 🚀 Características Principales

*   **Rendimiento Extremo**: Construido sobre [Astro 5](https://astro.build/) para generar un sitio estático ultra rápido (SSG/Hybrid).
*   **Diseño Moderno**: Estilizado con [Tailwind CSS v4](https://tailwindcss.com/) siguiendo principios de diseño limpio y minimalista (tema claro).
*   **Interactividad Ligera**: Funcionalidades dinámicas como filtrado, búsqueda y menús móviles impulsadas por [Alpine.js](https://alpinejs.dev/).
*   **Blog Completo**:
    *   Soporte para contenido en **MDX**.
    *   **Paginación** del lado del cliente.
    *   **Búsqueda en tiempo real** y filtrado por categorías.
    *   Badges dinámicos con colores temáticos.
*   **SEO Optimizado**: Etiquetas meta automáticas, soporte para OpenGraph, Twitter Cards y Sitemap generación.
*   **Transiciones de Vista**: Navegación suave entre páginas utilizando la API de View Transitions.

## 🛠️ Tecnologías

*   **Core**: Astro 5.x
*   **Estilos**: Tailwind CSS 4.x
*   **Scripting**: TypeScript, Alpine.js
*   **Contenido**: MDX (Markdown + JSX)
*   **Iconos**: Heroicons (vía SVG)
*   **Optimización**: Quicklink (precarga de enlaces), Partytown (scripts de terceros).

## 📂 Estructura del Proyecto

```text
/
├── public/             # Archivos estáticos (imágenes, favicon)
├── src/
│   ├── components/     # Componentes reutilizables UI (Botones, Cards, Header...)
│   ├── content/        # Configuración de colecciones de datos
│   ├── data/           # Contenido del blog (archivos .mdx y json)
│   ├── layouts/        # Plantillas base (Layout.astro, BlogLayout.astro)
│   ├── pages/          # Rutas del sitio (index, blog/, about, contact)
│   └── styles/         # CSS global y configuraciones
└── astro.config.mjs    # Configuración de Astro
```

## 🧞 Comandos de Desarrollo

Este proyecto utiliza **Bun** como gestor de paquetes recomendado, pero funciona perfectamente con npm.

| Acción | Comando (Bun) | Comando (npm) | Descripción |
| :--- | :--- | :--- | :--- |
| **Instalar** | `bun install` | `npm install` | Instala las dependencias del proyecto. |
| **Desarrollo** | `bun run dev` | `npm run dev` | Inicia el servidor local en `localhost:4321`. |
| **Construir** | `bun run build` | `npm run build` | Compila el sitio para producción en `./dist/`. |
| **Previsualizar**| `bun run preview`| `npm run preview`| Vista previa de la build de producción. |

## 📝 Gestión de Contenido

### Crear un nuevo artículo
1.  Crea un archivo `.mdx` en `src/data/posts/`.
2.  Asegúrate de incluir el frontmatter requerido:
    ```yaml
    ---
    slug: "mi-nuevo-post"
    title: "Título del Artículo"
    description: "Breve descripción para SEO y cards."
    publishDate: 2024-03-20
    tags: ["python", "django"]
    author: "Diego Rivera"
    readTime: "5 min"
    ---
    ```

### Gestionar Tags
Los colores y metadatos de los tags se gestionan en `src/data/tags.json`. Si usas un tag nuevo en un post, asegúrate de agregarlo allí para que tenga su color distintivo.

## 👤 Autor

**Diego Rivera Estefano**
*   **Rol**: Ingeniero de Software | Full Stack Developer
*   **Especialidad**: Python, Django, IA/ML, IoT.
*   **Ubicación**: Santiago, Chile.
*   [LinkedIn](https://linkedin.com/in/diego-rivera-estefano) | [GitHub](https://github.com/DiegoRiveraEstefano)

---