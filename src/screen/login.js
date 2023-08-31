import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const urlAPI = 'https://df58-201-63-132-162.ngrok-free.app/api';;

   async function login(username, password) {
    try {
      const response = await axios.post(`${urlAPI}/login`, { 'username': username, 'password': password });
      console.log(response)
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw error.response.data;
      } else {
        throw { message: 'Ocorreu um erro ao fazer o login.' };
      }
    }
  } 

  async function handleLogin() {
    try {
      const response = await login(username, password);
      console.log('Login successful', response);
      Alert.alert('Login bem sucedido!');
      navigation.navigate('principal');
    } catch (error) {
      console.log('Login error', error);
      if (error.message) {
        Alert.alert('Erro de Login', error.message);
      } else {
        Alert.alert('Erro de Login: Ocorreu um erro ao fazer o login.');
      }
    }
  }
 
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Sustenta Água!</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>


      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('cadastrousuario')}
        >
          <Text style={styles.linktext}>Não possui seu usuário? Crie agora!</Text>
        </TouchableOpacity>
      <Text style={styles.footerText}>© 2023 Felipe Silveira. Todos os direitos reservados.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
    linktext:{
      color: 'blue',
      textDecorationLine: 'underline',
      marginBottom: 5,
    },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '110%',
    height: '10%',
    backgroundColor: '#7885',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#000',
    marginTop:20,
  },
});
export default Login;
