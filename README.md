# 🌿 AgroTIC — Diagnóstico Inteligente de Cultivos de Café

![React Native](https://img.shields.io/badge/React_Native-Expo-blue)
![Prototipo](https://img.shields.io/badge/Estado-Prototipo_de_interfaz-yellow)
![Offline](https://img.shields.io/badge/Modo-100%25_Offline-brightgreen)
![Universidad](https://img.shields.io/badge/UCC-Ingeniería_de_Software-orange)

## 📱 Descripción

AgroTIC es el **prototipo de interfaz** (React Native + Expo) con el que validé el flujo de una app de diagnóstico de enfermedades del café para caficultores de Minca, Magdalena: captura de la foto, pantalla de análisis, resultado con recomendaciones e historial local sin conexión.

> **Importante:** en este prototipo el resultado del análisis es **simulado** (no hay un modelo de IA conectado). La versión con modelos reales de visión por computadora ejecutándose en el teléfono es **[Gotera IA](https://github.com/rodrigo-manuel/gotera-ia)**, desarrollada en Kotlin.

---

## 🚀 Funcionalidades del prototipo

- Captura de imagen desde cámara o galería del dispositivo
- Flujo de análisis con resultado y nivel de confianza (simulados)
- 5 recomendaciones técnicas por diagnóstico (roya, broca y hoja sana)
- Historial local sin conexión con expo-sqlite
- Registro de zona geográfica (Minca, Magdalena) y marca de tiempo

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| React Native + Expo SDK 55 | Framework móvil multiplataforma |
| JavaScript ES6+ | Lenguaje de programación |
| React Navigation | Navegación entre pantallas |
| expo-image-picker | Captura de imágenes |
| expo-sqlite | Almacenamiento local offline |
| Git + GitHub | Control de versiones |
| Trello | Gestión ágil SCRUM y Kanban |

---

## 📁 Estructura del Proyecto

    AgroTIC/
    ├── App.js                    
    ├── app.json                  
    ├── package.json              
    ├── screens/
    │   ├── HomeScreen.js         
    │   ├── CameraScreen.js       
    │   ├── ProcessingScreen.js   
    │   └── ResultScreen.js       
    └── assets/                   

---

## ⚙️ Instalación y Ejecución

Requisitos previos: Node.js v18 o superior, npm v9 o superior, Expo Go instalado en el dispositivo móvil.

**1. Clonar el repositorio:**

    git clone https://github.com/rodrigo-manuel/AgroTIC.git
    cd AgroTIC

**2. Instalar dependencias:**

    npm install

**3. Instalar módulos Expo:**

    npx expo install expo-image-picker expo-sqlite @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context

**4. Ejecutar la aplicación:**

    npx expo start

**5. Abrir en dispositivo:**

Escanea el QR con la app Expo Go en tu iPhone o Android. O presiona w para abrir en el navegador web.

---

## 📱 Pantallas de la Aplicación

| Pantalla | Descripción |
|---|---|
| Inicio | Logo AgroTIC, información del proyecto y botón principal |
| Cámara | Captura o selección de imagen de la hoja |
| Procesando | Animación del análisis (resultado simulado en el prototipo) |
| Resultado | Diagnóstico, porcentaje de confianza y recomendaciones |

---

## 🔄 Metodología SCRUM

El proyecto fue gestionado con la metodología ágil SCRUM:

- Sprint 1: Configuración del entorno, pantallas base y captura de imagen
- Sprint 2: Flujo de diagnóstico con resultados simulados y recomendaciones
- Sprint 3: Refinamiento, pruebas y documentación

---

## 🧪 Casos de Prueba

| Prueba | Acción | Resultado esperado |
|---|---|---|
| Prueba 1 | Tomar foto con la cámara | La imagen pasa a la pantalla de análisis |
| Prueba 2 | Elegir imagen de la galería | La imagen pasa a la pantalla de análisis |
| Prueba 3 | Completar el análisis | Se muestran diagnóstico simulado y recomendaciones |
| Prueba 4 | Sin WiFi | La app funciona y guarda el historial local |


---

## 🏫 Información Académica

| Campo | Detalle |
|---|---|
| Universidad | Universidad Cooperativa de Colombia |
| Facultad | Ingeniería de Software |
| Curso | Gestión de Proyectos de Software |
| Docente | Sabina Rada |
| Estudiante | Rodrigo Manuel Alfaro Giraldo |
| Año | 2026 |
| Contexto | Minca, Magdalena, Colombia |

---

## 📚 Referencias

- Cenicafé. (2023). Manejo integrado de la Roya del cafeto. Chinchiná, Colombia.
- Schwaber, K y Sutherland, J. (2020). The Scrum Guide. Scrum.org.
- Expo. (2024). Expo Documentation SDK 55. https://docs.expo.dev
- React Navigation. (2024). Stack Navigator. https://reactnavigation.org

---

## 📄 Licencia

Proyecto académico — Universidad Cooperativa de Colombia 2026

Desarrollado para los caficultores de Minca, Magdalena, Colombia
