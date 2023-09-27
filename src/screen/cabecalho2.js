import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const Cabecalho2 = () => {
 // const urlAPI = 'https://5c1c-179-127-67-47.ngrok-free.app/api/logout'
  const navigation = useNavigation()

  /*async function sair(navigation) {
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
  };*/

  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.title}>
          Sustenta Água
        </Text>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.news}>
        <Text style={styles.newsTitle}>Notícias</Text>
       {/* <TouchableOpacity onPress={() => sair(navigation)}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5d7afc',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
    margin: 10,
    top:20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
    top:20
  },
  news: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  newsTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    top:10
  },
  logout: {
    color: '#fa3b22',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 23,
  },
});

export default Cabecalho2;