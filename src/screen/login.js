import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity,Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const urlAPI = 'https://f7e6-201-63-132-162.ngrok-free.app/api'

  async function login(username, password) {
    try {
      const response = await axios.post(`${urlAPI}/login`, { 'username': username, 'password': password });
      console.log(response);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data.errors;
        if (errors) {
          const errorMessages = [];
          for (const errorKey in errors) {
            if (errors.hasOwnProperty(errorKey)) {
              const errorList = errors[errorKey];
              for (const errorMessage of errorList) {
                errorMessages.push(`${errorKey}: ${errorMessage}`);
              }
            }
          }
          throw errorMessages.join('\n'); // Junte todos os erros em uma única string
        }
      }
      throw 'Ocorreu um erro ao fazer o login';
    }
  }

  async function handleLogin() {
    try {
      const user = await login(username, password);
      if(user){
      console.log('Login bem sucedido', user);
      Alert.alert('Login bem sucedido!');
      setUsername(user.username)
      navigation.navigate('Página inicial');
      }
    } catch (error) {
      console.log('Login error', error);
      if (Array.isArray(error)) {
        // Se error for um array, exibe os erros separados por quebras de linha
        Alert.alert('Erro de Login', error.join('\n'));
      } else if (typeof error === 'string') {
        Alert.alert('Erro de Login', error);
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
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastrando Seu Usuário')}
        >
          <Text style={styles.linktext}>Não possui seu usuário? Crie agora!</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{marginLeft:10}}
          onPress={() => navigation.navigate('Quem sou eu?')}
        >
          <Text style={styles.linktext}>Sobre o criador</Text>
        </TouchableOpacity>
        </View>
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
