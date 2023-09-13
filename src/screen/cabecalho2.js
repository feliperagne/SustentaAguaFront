import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";





const cabecalho2 = () => {
  const urlAPI = 'https://0cd9-201-49-195-24.ngrok-free.app/api/logout'
  const navigation = useNavigation()


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
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: 30, left:17}}>
          Sustenta Água
        </Text>
        <Image style={styles.logo2} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.news}>
        <Text
        style={{fontSize:23, fontWeight: 'bold', left:30}}
        >Notícias</Text>
        <TouchableOpacity
        onPress={()=> sair(navigation)}
        style={{fontWeight: 'bold', left:115, }}
        >
          <Text style={{color:'#fa3b22', textDecorationLine:'underline',fontSize:23}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column', // Alterado para 'column' para empilhar elementos verticalmente
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5d7afc',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
  logo2: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 40, // Alterado para marginLeft para dar espaço entre os logos
  },
  news: {
    marginTop: 10,
    right:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
});

export default cabecalho2;
