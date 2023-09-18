import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cabecalho = () => {
  const urlAPI = 'https://0cd9-201-49-195-24.ngrok-free.app/api/logout';
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function loadUsername() {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        const usuarioMaiusculo = storedUsername.toUpperCase()
        if (usuarioMaiusculo) {
          setUsername(usuarioMaiusculo);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadUsername();
  }, []);

  async function sair(navigation) {
    try {
      const response = await axios.post(urlAPI);
      if (response.status === 200) {
        Alert.alert('Logout bem-sucedido', 'Você saiu com sucesso.');
        navigation.navigate('Login'); 
      } else {
        Alert.alert('Erro no logout', 'Ocorreu um erro durante o logout.');
      }
    } catch (error) {
      console.error('Erro:', error);
      Alert.alert('Erro no logout', 'Ocorreu um erro durante o logout.');
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.logoText}>Sustenta Água</Text>
      </View>
      <View style={{flexDirection:'column', left:20}}>
      <Text style={{fontSize:15,fontWeight:'bold', color:'#fff'}}>Bem vindo, {username}!</Text>
      <TouchableOpacity onPress={() => sair(navigation)}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5d7afc', // Cor de fundo do cabeçalho
    padding: 23,
    paddingHorizontal:47
  },
  logout: {
    color: 'red',
    fontSize: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Cabecalho;