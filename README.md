AgroTIC — Diagnóstico Inteligente de Cultivos de Café

Aplicación móvil desarrollada con React Native + Expo que utiliza Inteligencia Artificial (Claude Vision) para detectar enfermedades en plantas de café colombianas.

Universidad Cooperativa de Colombia · Ingeniería de Software · 2026
📍 Zona de referencia: Minca, Magdalena — Colombia

📋 Tabla de Contenidos

Descripción del Proyecto
Arquitectura del Sistema
Estructura de Carpetas
Flujo de Navegación
Enfermedades Detectadas
Stack Tecnológico
Instalación y Ejecución
Variables de Entorno
Módulos y Pantallas
API de Inteligencia Artificial
Sistema de Respaldo (Fallback)
Consideraciones de Seguridad


📱 Descripción del Proyecto
AgroTIC es una aplicación móvil multiplataforma (Android, iOS, Web) que permite a caficultores de la región de Minca, Magdalena, diagnosticar enfermedades en sus cultivos de café de manera rápida e inteligente. El agricultor toma una foto de la hoja afectada y recibe en segundos un diagnóstico con recomendaciones técnicas agronómicas.
Capacidades principales
CapacidadDescripción📷 Captura de imagenCámara en tiempo real o selección desde galería🤖 Análisis IAProcesamiento mediante Claude Vision API (claude-sonnet-4)🦠 Detección de enfermedadesRoya del Café, Broca del Café, Hoja Sana📋 Recomendaciones5 recomendaciones técnicas por diagnóstico🔄 Sistema de respaldoFallback local si la API no está disponible

🏗️ Arquitectura del Sistema
┌─────────────────────────────────────────────────────┐
│                  USUARIO (Caficultor)                │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│           APLICACIÓN REACT NATIVE (Expo)             │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌────────────────────┐ │
│  │HomeScreen│→ │CameraScr.│→ │  ProcessingScreen  │ │
│  │          │  │          │  │                    │ │
│  │ Bienvenida│  │ Captura  │  │  - Fetch imagen    │ │
│  │ + Info   │  │ + Preview│  │  - Base64 encode   │ │
│  └──────────┘  └──────────┘  │  - Llamada API IA  │ │
│                               └────────┬───────────┘ │
│                                        │             │
│  ┌─────────────────────────────────────▼───────────┐ │
│  │               ResultScreen                       │ │
│  │  - Muestra diagnóstico                          │ │
│  │  - Nivel de confianza                           │ │
│  │  - Recomendaciones técnicas                     │ │
│  └──────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────┘
                           │ HTTPS / REST
                           ▼
┌──────────────────────────────────────────────────────┐
│           ANTHROPIC CLAUDE API                        │
│         /v1/messages (Vision Multimodal)              │
│                                                      │
│  Modelo: claude-sonnet-4-20250514                    │
│  Entrada: imagen base64 + prompt agrónomo            │
│  Salida:  JSON { enfermedad, confianza, descripcion, │
│                  urgencia }                          │
└──────────────────────────────────────────────────────┘

📁 Estructura de Carpetas
AgroTIC/
├── index.js                  # Punto de entrada — registra el componente raíz con Expo
├── App.js                    # Navegador principal (Stack Navigator)
├── app.json                  # Configuración de la app (nombre, íconos, orientación)
├── package.json              # Dependencias y scripts npm
├── babel.config.js           # Configuración del compilador Babel
├── .gitignore                # Archivos excluidos del repositorio
│
├── screens/                  # Pantallas de la aplicación
│   ├── HomeScreen.js         # Pantalla de bienvenida e información
│   ├── CameraScreen.js       # Captura de imagen (cámara / galería)
│   ├── ProcessingScreen.js   # Análisis IA + lógica de detección
│   └── ResultScreen.js       # Visualización del diagnóstico
│
└── assets/                   # Recursos estáticos
    ├── icon.png                        # Ícono principal de la app
    ├── splash-icon.png                 # Pantalla de carga
    ├── favicon.png                     # Ícono web
    ├── android-icon-background.png     # Ícono adaptativo Android (fondo)
    ├── android-icon-foreground.png     # Ícono adaptativo Android (frente)
    └── android-icon-monochrome.png     # Ícono monocromático Android

🔄 Flujo de Navegación
Home ──────► Camera ──────► Processing ──────► Result
  ↑                                               │
  └───────────────────────────────────────────────┘
              (Nuevo Diagnóstico / Volver)
PantallaRutaDescripciónHomeScreen/HomePantalla inicial. Presenta el proyecto y contexto geográficoCameraScreen/CameraPermite tomar foto con cámara o seleccionar de galeríaProcessingScreen/ProcessingCodifica la imagen y llama a la API de ClaudeResultScreen/ResultMuestra el diagnóstico, confianza y recomendaciones agronómicas

🦠 Enfermedades Detectadas
DiagnósticoColorCódigoUrgenciaRoya del Café (Hemileia vastatrix)🔴 Naranja #FF6B35royaALTA — Actuar en < 72 horasBroca del Café (Hypothenemus hampei)🟤 Marrón #8B4513brocaALTA — Puede propagarse en 48 horasHoja Sana✅ Verde #7ed957sanaBAJA — Cultivo en buen estado

🛠️ Stack Tecnológico
TecnologíaVersiónUsoReact Native0.83.6Framework principal de UI móvilExpo~55.0.25Plataforma de desarrollo y buildReact19.2.0Librería de componentesexpo-camera~55.0.18Acceso a la cámara del dispositivoexpo-image-picker~55.0.20Selector de imágenes de galeríaexpo-sqlite~55.0.16Base de datos local (SQLite)@react-navigation/native^7.2.4Sistema de navegación@react-navigation/stack^7.9.2Navegación tipo stack (apilada)react-native-web^0.21.0Soporte para despliegue webClaude Vision APIclaude-sonnet-4Inteligencia Artificial de análisis

🚀 Instalación y Ejecución
Prerrequisitos

Node.js >= 18
npm o yarn
Expo CLI (npm install -g expo-cli)
Cuenta en Anthropic con API Key

Pasos
bash# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd AgroTIC

# 2. Instalar dependencias
npm install

# 3. Configurar la API Key de Claude (ver sección Variables de Entorno)

# 4. Iniciar la aplicación
npm start          # Modo general (QR para Expo Go)
npm run android    # Android
npm run ios        # iOS (requiere macOS)
npm run web        # Navegador web

🔑 Variables de Entorno

⚠️ Importante: En la versión actual (demo), la API Key de Anthropic se incluye directamente en ProcessingScreen.js. Para producción, se debe mover a un backend seguro o usar variables de entorno.

La llamada a la API está en screens/ProcessingScreen.js dentro de la función analizarImagenConIA(). Reemplaza la lógica de fetch para incluir tu API Key mediante un header o proxy backend.
js// Recomendado para producción: usar un proxy backend
const apiResponse = await fetch('https://TU-BACKEND/api/analizar', {
  method: 'POST',
  body: JSON.stringify({ imagenBase64: base64 }),
});

🖥️ Módulos y Pantallas
index.js — Punto de entrada
Registra el componente raíz de la aplicación usando registerRootComponent de Expo, que configura correctamente el entorno tanto en Expo Go como en builds nativas.
App.js — Navegador principal
Configura el NavigationContainer con un Stack.Navigator que agrupa las cuatro pantallas sin cabecera visible (headerShown: false).
screens/HomeScreen.js — Pantalla de Bienvenida
Muestra la identidad del proyecto (nombre, subtítulo, zona geográfica) y el botón principal para iniciar el diagnóstico navegando a CameraScreen.
screens/CameraScreen.js — Captura de Imagen
Gestiona los permisos de cámara, la captura de foto y la selección desde galería usando expo-image-picker. Muestra una previsualización de la imagen seleccionada antes de enviarla a análisis.
screens/ProcessingScreen.js — Análisis con IA
Módulo central de la aplicación. Codifica la imagen a base64, la envía a la API de Claude Vision con un prompt especializado en agro-diagnóstico, parsea la respuesta JSON y navega automáticamente a ResultScreen con el resultado.
screens/ResultScreen.js — Resultado del Diagnóstico
Renderiza el diagnóstico completo: imagen analizada, enfermedad detectada, barra de confianza del modelo, alerta de urgencia y lista de 5 recomendaciones técnicas agronómicas. Implementada con elementos web HTML/CSS inline (compatible con la plataforma web de Expo).

🤖 API de Inteligencia Artificial
La función analizarImagenConIA(imagenUri) en ProcessingScreen.js realiza los siguientes pasos:

Fetch de la imagen desde la URI local
Conversión a Blob y luego a Base64 usando FileReader
POST a https://api.anthropic.com/v1/messages con:

Modelo: claude-sonnet-4-20250514
Contenido: imagen base64 + texto de prompt especializado


Parseo de respuesta JSON con los campos:

json{
  "enfermedad": "Roya del Café" | "Broca del Café" | "Hoja Sana",
  "confianza": 70-98,
  "descripcion": "descripción técnica breve",
  "urgencia": "nivel de urgencia y tiempo de acción"
}

Enriquecimiento del resultado con colores, emojis, código interno y lista de recomendaciones técnicas.


🔄 Sistema de Respaldo (Fallback)
Si la llamada a la API de Claude falla (sin conexión, error de red, cuota agotada), la aplicación selecciona aleatoriamente uno de tres diagnósticos de respaldo predefinidos para garantizar una experiencia continua:

Roya del Café (confianza 85%)
Broca del Café (confianza 80%)
Hoja Sana (confianza 95%)

Cada diagnóstico de respaldo incluye sus propias recomendaciones técnicas completas.

🔒 Consideraciones de Seguridad
AspectoEstado ActualRecomendación para ProducciónAPI KeyHardcodeada en el clienteMover a backend (Node.js/Python)PermisosSolicitados en tiempo de ejecuciónCorrecto ✅ImágenesSolo URI local, no se almacenan en la nubeCorrecto ✅ComunicaciónHTTPS con AnthropicCorrecto ✅

👥 Créditos
Desarrollado en el marco del curso de Ingeniería de Software de la Universidad Cooperativa de Colombia como solución tecnológica para caficultores de la región de Minca, Magdalena.

Documentación generada — Mayo 2026
