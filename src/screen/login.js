import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image, ScrollView} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const urlAPI = 'https://13cf-179-127-67-47.ngrok-free.app/api'

  async function login(username, password) {
    try {
      const response = await axios.post(`${urlAPI}/login`, { 'username': username, 'password': password });
      //console.log(response);
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
                errorMessages.push(`${errorMessage}`);
              }
            }
          }
          throw errorMessages.join('\n'); // Junte todos os erros em uma única string
        }
      }
      throw new Error('Ocorreu um erro ao fazer o login');
    }
  }

  async function handleLogin() {
    try {
      const user = await login(username, password);
      if(user){
      console.log('Login bem sucedido', user);
      const response = await axios.get(`${urlAPI}/getNomeUsuarioPeloUsername/${username}`)
      
      const nomeDoUsuario = response.data.data.nome;

      await AsyncStorage.setItem('name', nomeDoUsuario);

      await AsyncStorage.setItem('username', username);



      Alert.alert('Login bem sucedido!');
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
        Alert.alert('Erro de Login','Ocorreu um erro ao fazer o login.');
      }
    }
  }

  function limparCampos() {
    setPassword('')
    setUsername('')
  }
  
  return (
    
    <ScrollView contentContainerStyle={styles.pageContainer}>
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Bem-vindo ao Sustenta Água!</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={limparCampos} >
          <Text style={styles.buttonText}>Limpar Campos</Text>
        </TouchableOpacity>
     
    </View>
    
    <View style={styles.footer}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastrando Seu Usuário')}
        >
          <Text style={styles.linkText}>Não possui seu usuário? Crie agora!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => navigation.navigate('Quem sou eu?')}
        >
          <Text style={styles.linkText}>Sobre o criador</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>© 2023 Felipe Silveira. Todos os direitos reservados.</Text>
    </View>
    
  </ScrollView>
  
);
};

const styles = StyleSheet.create({
pageContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
},
container: {
  width: '90%',  // Largura do quadrado menor
  borderWidth: 2,
  borderColor: 'gray',
  borderRadius: 15,
  alignItems: 'center', // Centralizar o conteúdo horizontalmente
  justifyContent:'center',
  padding:60,
  backgroundColor:'#4583'
},
contentContainer: {
  padding: 60,
},
  imageContainer: {
    position: 'sticky',
    bottom:100
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    top: 62,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
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
    margin:10
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 5,
    fontSize:16
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
    backgroundColor: '#1345',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#000',
    marginTop: 20,
  },
});
export default Login;
