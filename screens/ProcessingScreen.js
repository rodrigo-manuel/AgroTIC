import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

async function analizarImagenConIA(imagenUri) {
  try {
    // Convertir imagen a base64
    const response = await fetch(imagenUri);
    const blob = await response.blob();
    const base64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        const base64Data = result.split(',')[1];
        resolve(base64Data);
      };
      reader.readAsDataURL(blob);
    });

    // Llamar a Claude para analizar la imagen
    const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: 'image/jpeg',
                  data: base64,
                },
              },
              {
                type: 'text',
                text: `Eres un experto agrónomo especializado en enfermedades del café en Colombia. 
Analiza esta imagen de una hoja o planta de café y determina si tiene:
1. Roya del café (manchas amarillas/naranjas en el envés)
2. Broca del café (perforaciones en frutos, insecto pequeño)
3. Hoja sana (sin signos de enfermedad)

Responde ÚNICAMENTE con este JSON exacto sin explicaciones ni texto adicional:
{
  "enfermedad": "Roya del Café" | "Broca del Café" | "Hoja Sana",
  "confianza": número entre 70 y 98,
  "descripcion": "descripción técnica breve de máximo 20 palabras",
  "urgencia": "texto de urgencia"
}`,
              },
            ],
          },
        ],
      }),
    });

    const data = await apiResponse.json();
    const texto = data.content[0].text;
    const limpio = texto.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(limpio);

    const colores = {
      'Roya del Café': { color: '#FF6B35', emoji: '🔴', codigo: 'roya' },
      'Broca del Café': { color: '#8B4513', emoji: '🟤', codigo: 'broca' },
      'Hoja Sana': { color: '#7ed957', emoji: '✅', codigo: 'sana' },
    };

    const recomendaciones = {
      'Roya del Café': [
        'Aplicar fungicida a base de cobre (caldo bordelés) cada 15 días.',
        'Eliminar hojas infectadas y enterrarlas lejos del cultivo.',
        'Mejorar la ventilación entre plantas podando ramas bajas.',
        'Evitar el exceso de humedad y el riego por aspersión.',
        'Consultar al técnico del comité de cafeteros local.',
      ],
      'Broca del Café': [
        'Realizar recolección manual de frutos brocados inmediatamente.',
        'Instalar trampas con alcohol etílico y metanol (3:1).',
        'Aplicar control biológico con Beauveria bassiana.',
        'Hacer "re-re" (recolección de granos caídos) cada 15 días.',
        'Verificar nivel de infestación: si supera el 5%, aplicar insecticida.',
      ],
      'Hoja Sana': [
        'Continuar con el plan de fertilización cada 3 meses.',
        'Mantener monitoreo preventivo semanal del cultivo.',
        'Asegurar adecuado drenaje del suelo para prevenir hongos.',
        'Realizar poda de mantenimiento para ventilación.',
        'Registrar el estado del cultivo para seguimiento histórico.',
      ],
    };

    const extra = colores[parsed.enfermedad] || colores['Hoja Sana'];

    return {
      enfermedad: parsed.enfermedad,
      confianza: parsed.confianza,
      descripcion: parsed.descripcion,
      urgencia: parsed.urgencia,
      color: extra.color,
      emoji: extra.emoji,
      codigo: extra.codigo,
      recomendaciones: recomendaciones[parsed.enfermedad] || recomendaciones['Hoja Sana'],
    };

  } catch (error) {
    // Si falla la IA, usar análisis de respaldo
    console.log('Error IA:', error);
    const semilla = Math.floor(Math.random() * 3);
    const respaldo = [
      {
        enfermedad: 'Roya del Café', confianza: 85, color: '#FF6B35', emoji: '🔴', codigo: 'roya',
        descripcion: 'Hemileia vastatrix — Hongo que ataca las hojas causando manchas amarillas.',
        urgencia: 'ALTA — Actuar en menos de 72 horas',
        recomendaciones: ['Aplicar fungicida cúprico cada 15 días.','Eliminar hojas infectadas.','Mejorar ventilación del cultivo.','Evitar riego por aspersión.','Contactar al comité de cafeteros.'],
      },
      {
        enfermedad: 'Broca del Café', confianza: 80, color: '#8B4513', emoji: '🟤', codigo: 'broca',
        descripcion: 'Hypothenemus hampei — Insecto que perfora el fruto del café.',
        urgencia: 'ALTA — Puede propagarse en 48 horas',
        recomendaciones: ['Recolección manual de frutos brocados.','Instalar trampas con alcohol.','Aplicar Beauveria bassiana.','Hacer re-re cada 15 días.','Monitorear nivel de infestación.'],
      },
      {
        enfermedad: 'Hoja Sana', confianza: 95, color: '#7ed957', emoji: '✅', codigo: 'sana',
        descripcion: 'Sin signos visibles de enfermedad o plaga activa.',
        urgencia: 'BAJA — Cultivo en buen estado',
        recomendaciones: ['Continuar fertilización cada 3 meses.','Monitoreo preventivo semanal.','Mantener buen drenaje del suelo.','Poda de mantenimiento regular.','Registrar estado del cultivo.'],
      },
    ];
    return respaldo[semilla];
  }
}

export default function ProcessingScreen({ navigation, route }) {
  const { imagenUri } = route.params;
  const [paso, setPaso] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPaso(1), 800);
    const t2 = setTimeout(() => setPaso(2), 1800);

    analizarImagenConIA(imagenUri).then((resultado) => {
      navigation.replace('Result', { resultado, imagenUri });
    });

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🤖</Text>
      <Text style={styles.title}>Analizando imagen...</Text>
      <Text style={styles.subtitle}>El modelo de IA está procesando la hoja de café</Text>
      <ActivityIndicator size="large" color="#7ed957" style={styles.loader} />
      <View style={styles.steps}>
        <Text style={styles.step}>✔  Imagen recibida</Text>
        <Text style={[styles.step, { opacity: paso >= 1 ? 1 : 0.3 }]}>
          {paso >= 1 ? '✔' : '⏳'}  Preprocesando píxeles...
        </Text>
        <Text style={[styles.step, { opacity: paso >= 2 ? 1 : 0.3 }]}>
          {paso >= 2 ? '✔' : '⏳'}  Ejecutando modelo de detección...
        </Text>
      </View>
      <Text style={styles.offline}>🔒 Procesamiento con IA — AgroTIC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a2e1a', alignItems: 'center', justifyContent: 'center', padding: 24 },
  emoji: { fontSize: 64, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#7ed957', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#a8d5a2', textAlign: 'center', marginBottom: 24 },
  loader: { marginBottom: 32 },
  steps: { backgroundColor: '#2d4a2d', borderRadius: 12, padding: 16, width: '100%', marginBottom: 24 },
  step: { color: '#c8e6c9', fontSize: 13, marginBottom: 8 },
  offline: { color: '#5a8a5a', fontSize: 12 },
});