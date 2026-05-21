# 🌿 AgroTIC — Diagnóstico Inteligente de Cultivos de Café

![React Native](https://img.shields.io/badge/React_Native-Expo-blue)
![IA](https://img.shields.io/badge/IA-Visión_por_Computadora-green)
![Offline](https://img.shields.io/badge/Modo-100%25_Offline-brightgreen)
![Universidad](https://img.shields.io/badge/UCC-Ingeniería_de_Software-orange)

## 📱 Descripción

AgroTIC es una aplicación móvil desarrollada con React Native y Expo que permite a los caficultores de Minca, Magdalena, Colombia diagnosticar automáticamente enfermedades y plagas en sus cultivos de café mediante visión por computadora e inteligencia artificial.

La app funciona 100% offline, ideal para zonas rurales sin conectividad a internet.

---

## 🎯 Problema que Resuelve

Los caficultores de zonas rurales no tienen acceso a herramientas tecnológicas para detectar enfermedades como la Roya y la Broca del café a tiempo, lo que genera pérdidas de hasta el 80% de la cosecha.

---

## 🦠 Enfermedades que Detecta

| Enfermedad | Agente | Síntomas |
|---|---|---|
| Roya del Café | Hemileia vastatrix | Manchas amarillas y naranjas en el envés de la hoja |
| Broca del Café | Hypothenemus hampei | Perforaciones en el fruto del café |
| Hoja Sana | Sin agente | Sin signos de enfermedad |

---

## 🚀 Funcionalidades

- Captura de imagen desde cámara o galería del dispositivo
- Análisis con IA y nivel de confianza en porcentaje
- 5 recomendaciones técnicas específicas por diagnóstico
- Funcionamiento 100% offline sin internet
- Registro de zona geográfica (Minca, Magdalena)
- Marca de tiempo en cada diagnóstico

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
| Procesando | Animación mientras la IA analiza la imagen |
| Resultado | Diagnóstico, porcentaje de confianza y recomendaciones |

---

## 🔄 Metodología SCRUM

El proyecto fue gestionado con la metodología ágil SCRUM:

- Sprint 1: Configuración del entorno, pantallas base y captura de imagen
- Sprint 2: Integración del modelo IA y sistema de diagnóstico
- Sprint 3: Refinamiento, pruebas y documentación

---

## 🧪 Casos de Prueba

| Prueba | Imagen de entrada | Resultado esperado | Estado |
|---|---|---|---|
| Prueba 1 | Hoja con Roya | Roya del Café 87% | Correcto |
| Prueba 2 | Fruto con Broca | Broca del Café 82% | Correcto |
| Prueba 3 | Hoja sana | Hoja Sana 95% | Correcto |
| Prueba 4 | Sin WiFi | Funciona offline | Correcto |
| Prueba 5 | Imagen de galería | Diagnóstico exitoso | Correcto |

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
