import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>🌿</Text>
        <Text style={styles.title}>AgroTIC</Text>
        <Text style={styles.subtitle}>Diagnóstico inteligente de cultivos de café</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>📍 Minca, Magdalena — Colombia</Text>
        <Text style={styles.infoDesc}>
          Detecta enfermedades como Roya y Broca en tus plantas de café tomando una foto de la hoja afectada.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.buttonText}>📷  Tomar foto del cultivo</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Universidad Cooperativa de Colombia</Text>
      <Text style={styles.footerSub}>Ingeniería de Software · 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a2e1a', alignItems: 'center', justifyContent: 'center', padding: 24 },
  header: { alignItems: 'center', marginBottom: 32 },
  emoji: { fontSize: 64, marginBottom: 8 },
  title: { fontSize: 42, fontWeight: 'bold', color: '#7ed957', letterSpacing: 2 },
  subtitle: { fontSize: 14, color: '#a8d5a2', textAlign: 'center', marginTop: 6 },
  infoBox: { backgroundColor: '#2d4a2d', borderRadius: 16, padding: 20, marginBottom: 32, width: '100%' },
  infoText: { color: '#7ed957', fontWeight: 'bold', marginBottom: 8, fontSize: 14 },
  infoDesc: { color: '#c8e6c9', fontSize: 13, lineHeight: 20 },
  button: { backgroundColor: '#7ed957', borderRadius: 30, paddingVertical: 16, paddingHorizontal: 40, width: '100%', alignItems: 'center', marginBottom: 40 },
  buttonText: { color: '#1a2e1a', fontWeight: 'bold', fontSize: 18 },
  footer: { color: '#5a8a5a', fontSize: 12 },
  footerSub: { color: '#4a7a4a', fontSize: 11, marginTop: 2 },
});