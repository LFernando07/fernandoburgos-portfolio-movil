# FerDev_Portafolio - Mi Portafolio Móvil Personal 📱✨

Aplicación móvil nativa multiplataforma para la **visualización de mi perfil profesional, trayectoria y certificaciones**, diseñada detalladamente con una interfaz moderna, animaciones interactivas de alto rendimiento y conectividad en tiempo real.

![demo](./assets/images/portafolio_movil.png)

## ✍️ Características

- **Presentación Dinámica:** Cabecera de perfil personalizada con carga animada.
- **Línea de Tiempo Interactiva:** Vista de experiencia profesional con despliegue vertical fluido e interpolación en cascada.
- **Gestión de Certificaciones:** Listado optimizado mediante contenedores virtualizados que previenen fugas de memoria y bloqueos de scroll.
- **Conectividad Externa:** Redirección interna nativa hacia enlaces de credenciales y certificados en línea.
- **Formulario de Contacto Directo:** Validación reactiva de campos y envío de correos automatizado sin exponer credenciales en el cliente.
- **Soporte Adaptativo Inteligente:** Interfaz nativa optimizada tanto para Modo Claro como para Modo Oscuro a nivel de sistema.
- **Arquitectura de Alto Rendimiento:** Transiciones a 60 FPS utilizando hilos de ejecución nativos (UI Thread) independientes de JavaScript.

## 👨‍💻 Tecnologías utilizadas

- React Native
- Expo (SDK 51)
- TypeScript
- Expo Router (File-based routing)
- React Native Reanimated
- EmailJS SDK Mobile
- React Native Safe Area Context

[![Technologies Used](https://skillicons.dev/icons?i=ts,react,apple,android,git,visualstudio)](https://skillicons.dev)

<details><summary><b>Estructura del proyecto</b></summary>

```bash
my-portfolio-movil-v4/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── index.tsx
│   │   └── projects.tsx
│   ├── projects/
│   │   ├── _layout.tsx
│   │   └── modal.tsx
│   └── +not-found.tsx
├── assets/
│   └── images/
│       ├── android-icon-background.png
│       ├── android-icon-foreground.png
│       ├── android-icon-monochrome.png
│       ├── beecker.png
│       ├── creator.jpeg
│       ├── favicon.png
│       ├── icon.png
│       ├── logo_amelie.png
│       ├── logo_movil.png
│       ├── logo.png
│       ├── sockicon.png
│       ├── sockicon2.png
│       └── splash-icon.png
├── components/
│   ├── ui/
│   │   ├── icon-symbol.tsx
│   │   ├── TabBarBackground.ios.tsx
│   │   └── TabBarBackground.tsx
│   ├── Divider.tsx
│   ├── external-link.tsx
│   ├── haptic-tab.tsx
│   ├── hello-wave.tsx
│   ├── parallax-scroll-view.tsx
│   ├── ProjectCard.tsx
│   ├── SkillBadge.tsx
│   ├── themed-text.tsx
│   ├── themed-view.tsx
│   └── Timelineitem.tsx
├── constants/
│   └── theme.ts
├── data/
│   └── portfolio.ts
├── hooks/
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme-color.ts
├── scripts/
│   └── reset-project.js
├── types/
│   ├── images.d.ts
│   └── index.ts
├── .env
├── .gitignore
├── AGENTS.md
├── app.config.js
├── CLAUDE.md
├── eslint.config.js
├── expo-env.d.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

</details>

ara poner este proyecto en funcionamiento en tu entorno local o en tu emulador de desarrollo, sigue estas instrucciones paso a paso.

⚙️ Instalación & Correrlo en Local
Note :bangbang: Variables de Entorno: La aplicación utiliza el SDK de EmailJS para procesar el envío del formulario de contacto. Asegúrate de declarar tus llaves públicas y privadas en el archivo .env en la raíz antes de inicializar Metro Bundler.

Step 1: Clone del repositorio
Descarga o clona este repositorio utilizando tu terminal:

Bash
git clone [https://github.com/LFernando07/fernandoburgos-portfolio-movil](https://github.com/LFernando07/fernandoburgos-portfolio-movil)
Step 2: Instalación de dependencias
Ejecute el siguiente comando en la raíz del proyecto para instalar los paquetes compatibles con el SDK:

Bash
npm install
Step 3: Inicializar el servidor local (Metro)
Ejecute el servidor de desarrollo limpiando profundamente la caché acumulada de los componentes nativos y assets:

Bash
npx expo start --clear
Step 4: Desplegar en entornos de prueba
Dentro de la interfaz interactiva de la terminal de Metro, puedes lanzar la aplicación seleccionando tu entorno:

Presiona a para abrir en tu Emulador de Android (Android Studio).

Presiona i para abrir en tu Simulador de iOS (Xcode).

Escanea el código QR en pantalla desde tu dispositivo físico usando la app Expo Go.

🔒 Environment Variables
Cree un archivo .env en el directorio raíz del proyecto y agregue las siguientes variables de configuración requeridas por el transcriptor de correo electrónico:

Fragmento de código
EXPO*PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
EXPO_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
EXPO_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
Nota: Expo leerá automáticamente estos prefijos EXPO_PUBLIC* para inyectarlos de manera segura a través de app.config.js mediante la API de Constants.expoConfig en caliente.

📋 Licencia
FerDev_Portafolio es software de código abierto distribuido bajo la Licencia MIT y es completamente libre para uso personal y educativo.
