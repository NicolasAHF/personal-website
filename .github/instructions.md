# Instrucciones del Proyecto - Personal Website

## Descripción General

Este es un sitio web personal construido con React, TypeScript y Vite. El proyecto presenta un portfolio profesional con información sobre experiencia, proyectos, habilidades y contacto. El sitio soporta modo oscuro/claro y bilingüismo (Inglés/Español).

## Tecnologías Principales

### Core
- **React 18.3.1**: Biblioteca principal para la UI
- **TypeScript 5.5.3**: Superset de JavaScript con tipado estático
- **Vite 5.4.2**: Build tool y servidor de desarrollo de nueva generación

### Estilos
- **Tailwind CSS 3.4.1**: Framework de CSS utility-first
- **PostCSS 8.4.35**: Procesador de CSS
- **Autoprefixer 10.4.18**: Plugin de PostCSS para prefijos de navegador

### Animaciones y UI
- **Framer Motion 12.0.11**: Biblioteca de animaciones para React
- **Lucide React 0.344.0**: Iconos SVG como componentes React
- **React Confetti 6.2.2**: Efectos de confetti
- **React Use 17.6.0**: Colección de hooks de React

### Linting y Calidad
- **ESLint 9.9.1**: Linter para JavaScript/TypeScript
- **eslint-plugin-react-hooks**: Reglas de ESLint para React Hooks
- **eslint-plugin-react-refresh**: Plugin para React Refresh

## Estructura del Proyecto

```
personal-website/
├── .github/                 # Configuraciones de GitHub
├── dist/                    # Archivos de producción compilados (generado)
├── node_modules/           # Dependencias (generado)
├── public/                 # Archivos estáticos públicos
│   ├── cv.pdf             # CV en formato PDF
│   └── images/            # Imágenes del sitio
│       ├── favicon.svg
│       ├── profile.webp
│       ├── cv-opt.webp
│       ├── globant.webp
│       ├── oracle.webp
│       ├── ort.webp
│       ├── tcs.webp
│       └── ukg.webp
├── src/
│   ├── components/         # Componentes React
│   │   ├── About.tsx      # Sección "Sobre mí"
│   │   ├── Contact.tsx    # Formulario de contacto
│   │   ├── Experience.tsx # Experiencia laboral
│   │   ├── Footer.tsx     # Pie de página
│   │   ├── Hero.tsx       # Sección hero/principal
│   │   ├── Navbar.tsx     # Barra de navegación
│   │   ├── Projects.tsx   # Proyectos destacados
│   │   └── Skills.tsx     # Habilidades técnicas
│   ├── data/              # Datos de la aplicación
│   │   ├── experience.ts  # Datos de experiencia laboral
│   │   ├── skills.ts      # Datos de habilidades
│   │   └── translation.ts # Traducciones EN/ES
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   ├── index.css          # Estilos globales
│   └── vite-env.d.ts      # Tipos de Vite
├── .gitignore
├── eslint.config.js        # Configuración de ESLint
├── index.html              # HTML principal
├── package.json
├── postcss.config.js       # Configuración de PostCSS
├── tailwind.config.js      # Configuración de Tailwind CSS
├── tsconfig.json           # Configuración de TypeScript (raíz)
├── tsconfig.app.json       # Configuración de TypeScript (app)
├── tsconfig.node.json      # Configuración de TypeScript (node)
└── vite.config.ts          # Configuración de Vite
```

## Comandos Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo con hot-reload en `http://localhost:5173`

### Construcción
```bash
npm run build
```
Compila el proyecto para producción en el directorio `dist/`
- Realiza type checking con TypeScript
- Optimiza y minifica el código
- Genera assets optimizados

### Linting
```bash
npm run lint
```
Ejecuta ESLint para verificar la calidad del código

### Preview
```bash
npm run preview
```
Previsualiza la build de producción localmente

### Instalación
```bash
npm install
```
Instala todas las dependencias del proyecto

## Características del Sitio

### Multilenguaje
- Soporta inglés (en) y español (es)
- Las traducciones están centralizadas en `src/data/translation.ts`
- El estado del idioma se maneja en el componente principal `App.tsx`

### Modo Oscuro/Claro
- Toggle entre modo oscuro y claro
- Implementado con Tailwind CSS usando `dark:` variants
- Estado manejado en `App.tsx` y aplicado a través de clases en `documentElement`

### Secciones del Sitio
1. **Hero**: Sección de bienvenida con foto de perfil y CTAs
2. **About**: Información personal, educación e intereses
3. **Skills**: Habilidades técnicas organizadas por categorías
4. **Experience**: Timeline de experiencia laboral con empresas
5. **Projects**: Proyectos destacados con demos y enlaces a GitHub
6. **Contact**: Formulario de contacto integrado con Netlify Forms

### Animaciones
- Utiliza Framer Motion para animaciones suaves y profesionales
- Animaciones en scroll con `whileInView`
- Transiciones de color y efectos hover

## Configuración de Tailwind

### Colores Personalizados
- `primary`: #1B263B
- `secondary`: #F76C6C
- `dark`: #121212
- `light`: #F0F4F8

### Fuentes
- **Poppins**: Fuente principal
- **Space Grotesk**: Fuente secundaria

### Animaciones Personalizadas
- `bounce-slow`: Animación de rebote lenta
- `pulse-slow`: Animación de pulso lenta

## Configuración de TypeScript

El proyecto utiliza un setup modular de TypeScript:
- `tsconfig.json`: Configuración raíz que referencia otros configs
- `tsconfig.app.json`: Configuración para el código de la aplicación
- `tsconfig.node.json`: Configuración para scripts de Node.js

## Integración con Netlify

El sitio está preparado para deployment en Netlify:
- Formulario de contacto configurado en `index.html` con atributo `netlify`
- Netlify Forms procesará los envíos del formulario automáticamente

## Buenas Prácticas para Desarrollo

### Al Agregar Nuevos Componentes
1. Crear el componente en `src/components/`
2. Usar TypeScript con interfaces apropiadas para props
3. Seguir el patrón de componentes funcionales con React.FC
4. Incluir animaciones de Framer Motion si es apropiado
5. Asegurar soporte para dark mode usando clases `dark:`
6. Importar y usar el componente en `App.tsx`

### Al Modificar Traducciones
1. Editar `src/data/translation.ts`
2. Mantener la estructura idéntica para ambos idiomas (en/es)
3. Asegurar que todas las claves existan en ambos idiomas

### Al Agregar Experiencia Laboral
1. Editar `src/data/experience.ts`
2. Seguir el formato existente con title, company, period, description, etc.
3. Agregar la imagen del logo de la empresa en `public/images/`

### Al Agregar Proyectos
1. Editar la sección de projects en `src/data/translation.ts`
2. Incluir title, description, technologies, demo, github, image
3. Agregar la imagen del proyecto en `public/images/`

### Estilos y CSS
- Usar clases de Tailwind CSS en lugar de CSS personalizado cuando sea posible
- Para estilos globales, editar `src/index.css`
- Mantener consistencia con el design system (colores, espaciado, tipografía)

### Optimización de Imágenes
- Usar formato WebP para imágenes cuando sea posible (mejor compresión)
- Mantener imágenes en `public/images/`
- Las imágenes en public/ son servidas directamente sin procesamiento

## Solución de Problemas Comunes

### El linter no funciona
```bash
npm install
npm run lint
```

### Build falla
1. Verificar errores de TypeScript
2. Asegurar que todas las dependencias estén instaladas
3. Verificar que no haya imports rotos

### Dark mode no funciona
- Verificar que la clase `dark` esté siendo agregada/removida del `documentElement`
- Asegurar que los estilos usen la variante `dark:` de Tailwind

### Animaciones no se muestran
- Verificar que Framer Motion esté instalado correctamente
- Revisar que los componentes usen `motion.div` en lugar de `div`

## Deployment

### Preparación para Production
1. Ejecutar `npm run build`
2. Verificar el directorio `dist/`
3. Probar con `npm run preview`

### Netlify Deployment
- El sitio se despliega automáticamente desde el repositorio de GitHub
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18.x o superior recomendado

## Mantenimiento

### Actualización de Dependencias
```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar dependencias menores
npm update

# Para actualizaciones mayores, revisar changelog y actualizar manualmente
```

### Auditoría de Seguridad
```bash
npm audit
npm audit fix  # Para solucionar vulnerabilidades automáticamente
```

## Contacto y Autor

- **Autor**: Nicolás Hernández
- **Rol**: Full Stack Software Engineer at Oracle
- **Educación**: B.S. in Systems Engineering – ORT University

## Notas Adicionales

- El proyecto no incluye tests automatizados por el momento
- No hay CI/CD configurado en GitHub Actions actualmente
- El sitio está optimizado para performance y SEO
- Responsive design implementado con Tailwind CSS breakpoints
- Accesibilidad considerada en componentes y navegación
