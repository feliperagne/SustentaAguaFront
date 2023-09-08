import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Cabecalho = () => {
  const urlAPI = 'https://146c-201-49-195-24.ngrok-free.app/api/logout';
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function loadUsername() {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
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
      <View style={styles.userInfo}>
        <Image
          style={styles.logo}
          source={require('../../assets/agua.webp')}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 27 }}>Sustenta Água</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.welcomeText}>Bem Vindo, {username}!</Text>
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
    backgroundColor: '#5887', // Cor de fundo do cabeçalho
    padding: 23,
    paddingHorizontal:47
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {
    textDecorationLine: 'underline',
    color: '#801',
    left: 50,
    top: 24
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white', // Cor do texto
    fontSize: 12,
    fontWeight: 'bold',
    bottom: 5,
    left: 25,
    top: 11
  },
  logo: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
    right: 15
  },
});

export default Cabecalho;
