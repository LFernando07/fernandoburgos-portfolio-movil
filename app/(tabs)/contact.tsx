import React, { useState } from 'react';
import {
  Text, TextInput,
  StyleSheet, Alert, KeyboardAvoidingView, Platform,
  Pressable,
} from 'react-native';
import { send, EmailJSResponseStatus } from '@emailjs/react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
// 1. Importamos Animated y los efectos correspondientes
import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated';

export default function ContactScreen() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSend = async (): Promise<void> => {
    if (!name.trim() || !message.trim() || !email.trim()) {
      Alert.alert('Campos vacíos', 'Por favor llena todos los campos.');
      return;
    }

    const serviceId = Constants.expoConfig?.extra?.emailjsServiceId as string;
    const templateId = Constants.expoConfig?.extra?.emailjsTemplateId as string;
    const publicKey = Constants.expoConfig?.extra?.emailjsPublicKey as string;

    if (!serviceId || !templateId || !publicKey) {
      Alert.alert(
        'Error de configuración',
        'No se encontraron las variables de configuracion necesarias.'
      );
      return;
    }

    try {
      await send(
        serviceId,
        templateId,
        { name, email, message },
        { publicKey },
      );

      Alert.alert('¡Enviado!', `Gracias ${name}, te contactaré pronto.`);
      setName('');
      setEmail('');
      setMessage('');

    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        Alert.alert('EmailJS Error', `Status: ${err.status}\nText: ${err.text}`);
      } else {
        Alert.alert('Error desconocido', String(err));
      }
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        {/* 2. El título aparece escalando de fondo a frente */}
        <Animated.Text
          entering={FadeInRight.duration(400)}
          style={styles.title}
        >
          Contáctame
        </Animated.Text>

        {/* 3. Agrupamos los bloques de inputs en Animated.Views con delay escalonado */}
        {/* Campo Nombre */}
        <Animated.View entering={FadeInUp.duration(350).delay(100)} style={styles.fieldContainer}>
          <Text style={styles.label}>Tu nombre</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Ej. Ana García"
            autoCapitalize="words"
          />
        </Animated.View>

        {/* Campo Correo */}
        <Animated.View entering={FadeInUp.duration(350).delay(200)} style={styles.fieldContainer}>
          <Text style={styles.label}>Tu correo</Text>
          <TextInput
            inputMode="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="example@outlook.com"
            autoCapitalize="none"
          />
        </Animated.View>

        {/* Campo Mensaje */}
        <Animated.View entering={FadeInUp.duration(350).delay(300)} style={styles.fieldContainer}>
          <Text style={styles.label}>Mensaje</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            value={message}
            onChangeText={setMessage}
            placeholder="Escribe tu mensaje..."
            multiline
            numberOfLines={4}
          />
        </Animated.View>

        {/* Botón de Enviar */}
        <Animated.View entering={FadeInUp.duration(300).delay(400)}>
          <Pressable style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>Enviar mensaje</Text>
          </Pressable>
        </Animated.View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { flex: 1, padding: 24 },
  fieldContainer: { width: '100%' }, // Asegura el correcto ancho para la envoltura de los inputs
  title: { fontSize: 22, fontWeight: 'bold', color: '#1a1a2e', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 6 },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textarea: { height: 100, textAlignVertical: 'top' },
  button: {
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});