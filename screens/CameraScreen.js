import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen({ navigation }) {
  const [imagen, setImagen] = useState(null);

  const tomarFoto = async () => {
    const permiso = await ImagePicker.requestCameraPermissionsAsync();
    if (!permiso.granted) {
      Alert.alert('Permiso requerido', 'Necesitamos acceso a tu cámara para analizar el cultivo.');
      return;
    }
    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });
    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  const seleccionarDeGaleria = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });
    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  const analizarImagen = () => {
    if (!imagen) {
      Alert.alert('Sin imagen', 'Primero toma o selecciona una foto de la hoja.');
      return;
    }
    navigation.navigate('Processing', { imagenUri: imagen });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📷 Captura de Hoja</Text>
      <Text style={styles.subtitle}>Fotografía la hoja del café que deseas analizar</Text>

      {imagen ? (
        <Image source={{ uri: imagen }} style={styles.preview} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderEmoji}>🍃</Text>
          <Text style={styles.placeholderText}>Sin imagen seleccionada</Text>
        </View>
      )}

      <TouchableOpacity style={styles.btnCamera} onPress={tomarFoto}>
        <Text style={styles.btnText}>📷  Tomar Foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnGaleria} onPress={seleccionarDeGaleria}>
        <Text style={styles.btnTextSecondary}>🖼️  Seleccionar de Galería</Text>
      </TouchableOpacity>

      {imagen && (
        <TouchableOpacity style={styles.btnAnalizar} onPress={analizarImagen}>
          <Text style={styles.btnText}>🔍  Analizar Imagen</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.btnVolver} onPress={() => navigation.goBack()}>
        <Text style={styles.btnVolverText}>← Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a2e1a', alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#7ed957', marginBottom: 6 },
  subtitle: { fontSize: 13, color: '#a8d5a2', marginBottom: 24, textAlign: 'center' },
  preview: { width: 280, height: 210, borderRadius: 16, marginBottom: 24, borderWidth: 2, borderColor: '#7ed957' },
  placeholder: { width: 280, height: 210, backgroundColor: '#2d4a2d', borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 24, borderWidth: 2, borderColor: '#4a7a4a', borderStyle: 'dashed' },
  placeholderEmoji: { fontSize: 48, marginBottom: 8 },
  placeholderText: { color: '#5a8a5a', fontSize: 13 },
  btnCamera: { backgroundColor: '#7ed957', borderRadius: 25, paddingVertical: 14, paddingHorizontal: 32, width: '100%', alignItems: 'center', marginBottom: 12 },
  btnGaleria: { backgroundColor: '#2d4a2d', borderRadius: 25, paddingVertical: 14, paddingHorizontal: 32, width: '100%', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#7ed957' },
  btnAnalizar: { backgroundColor: '#4CAF50', borderRadius: 25, paddingVertical: 14, paddingHorizontal: 32, width: '100%', alignItems: 'center', marginBottom: 12 },
  btnVolver: { marginTop: 8 },
  btnText: { color: '#1a2e1a', fontWeight: 'bold', fontSize: 16 },
  btnTextSecondary: { color: '#7ed957', fontWeight: 'bold', fontSize: 16 },
  btnVolverText: { color: '#5a8a5a', fontSize: 14 },
});