import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Link } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verificacaoLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('ERRO', 'Todos os campos devem estar preenchidos.');
    } else {  X=    
      Alert.alert('Login', `Bem-vindo, ${email}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo de volta</Text>
     
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
     
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
     
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={verificacaoLogin} color="#1DB954" />
      </View>

      <Link style={styles.buttonLink} href='/Registro'>Cadastre-se</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#191414',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#404040',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#121212',
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
  },
  buttonLink: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: '#1DB954',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
  },
});

export default LoginScreen;
