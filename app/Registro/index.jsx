import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [data, setDataNascimento] = useState('')

const registrarUsuario = async function () {
  if (!nome || !email || !senha) {
      console.log('os parametros nome, email e senha devem ser fornecidos')
      return
  }
  const resposta = await fetch('http://localhost:1000/registro',{
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
  },
      body: JSON.stringify({ name: nome, email: email, senha: senha, sobrenome: sobrenome, data: data })
  })
    
if (!resposta) {
    console.log('erro')
} else if (resposta.status == 200) {
    console.log('user criado com sucesso')
} else {
    console.log('ocorreu um erro')
}
}

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        placeholderTextColor="#aaa"
        value={sobrenome}
        onChangeText={setSobrenome}
      />

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
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        placeholderTextColor="#aaa"
        value={data}
        onChangeText={setDataNascimento}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Registrar" onPress={registrarUsuario} color="#1DB954" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    marginBottom: 15,
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
    overflow: 'hidden',
  },
});

export default RegisterScreen;
