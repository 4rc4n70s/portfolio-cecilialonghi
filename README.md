# Portafolio Cinematográfico - Cecilia Longhi

Este es el portafolio profesional de **Maria Cecilia Longhi** (Editora de Video y Diseñadora). Esta versión ha sido rediseñada desde cero con una estética cinematográfica premium de alta gama, optimizada específicamente para directores creativos, agencias y clientes de video.

## 🌟 Características Clave

- **Estética Editorial & Cinematográfica**: Esquema de color oscuro profundo con acentos dorados y tipografía contrastante (*Playfair Display* para titulares artísticos y *Outfit* para cuerpo de texto).
- **Tarjetas de Cobertura Dinámicas**: Hover de tarjetas con efectos de zoom, brillo ambiental dorado y animación de flecha direccional.
- **Navegación e Interacción Fluida**:
  - Transición de páginas instantánea y nativa vía la API de *View Transitions*.
  - Menú hamburguesa responsivo de deslizamiento lateral para dispositivos móviles.
- **Lightbox Masonry**: Galería de diseños con apertura a pantalla completa y fondo de desenfoque de cristal empañado (*backdrop-filter blur*).
- **Embeds Optimizados**: Reproductores de video cargados con `aspect-ratio: 16/9` responsive y `loading="lazy"` para máxima velocidad.
- **Totalmente Optimizado para Vercel**: Soporte nativo para URLs limpias mediante `vercel.json`.

## 📁 Estructura

```text
portfolio-cecilialonghi/
├── vercel.json          # Soporte de Vercel para URLs limpias
├── package.json         # Scripts de NPM y metadata
├── server.js            # Servidor local de desarrollo
├── styles.css           # Estilos editoriales cinematográficos
├── main.js              # Interacciones y Lightbox
├── index.html           # Portada principal ("Work")
├── about-me.html        # Biografía ("About me")
├── bigger-projects.html # Proyectos de gran escala
├── social-media-videos.html # Videos para Redes Sociales
├── youtube-videos.html  # Trabajos para YouTube
├── graphic-designs.html # Diseños e ilustraciones con Lightbox
├── other-videos.html    # Videos varios
├── 404.html             # Página de Error 404
└── images/              # Galería de imágenes y coberturas descargadas
```

## 🚀 Uso en Local

Ejecuta el servidor de desarrollo local para previsualizar el sitio con las URLs limpias:

1. Ingresa a la carpeta:
   ```bash
   cd ~/Projects/portfolio-cecilialonghi
   ```

2. Corre el servidor:
   ```bash
   npm run dev
   ```

3. Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

## ☁️ Subir a GitHub y Desplegar en Vercel

Este proyecto está inicializado como un repositorio Git local. Para subirlo a GitHub y desplegarlo en Vercel:

1. **Crear Repositorio en GitHub**: Crea un repositorio vacío llamado `portfolio-cecilialonghi` en tu cuenta de GitHub.
2. **Subir el código**:
   ```bash
   cd ~/Projects/portfolio-cecilialonghi
   git init
   git add .
   git commit -m "Initial commit - Modern Cinematic Portfolio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/portfolio-cecilialonghi.git
   git push -u origin main
   ```
3. **Desplegar en Vercel**: Importa el repositorio desde tu panel de Vercel y haz clic en **Deploy**. ¡Listo!
