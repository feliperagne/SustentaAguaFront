import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import axios from "axios";
import { useFonts, Arimo_500Medium,Arimo_600SemiBold,Arimo_700Bold,Arimo_400Regular } from "@expo-google-fonts/arimo";
import AsyncStorage from '@react-native-async-storage/async-storage';





const cabecalho2 = () => {

  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image style={styles.logo} source={require('../../assets/agua.webp')} />
        <Text style={{ fontWeight: 'bold', fontSize: 30, marginLeft: 22 }}>
          Sustenta Água
        </Text>
        <Image style={styles.logo2} source={require('../../assets/agua.webp')} />
      </View>
      <View style={styles.news}>
        <Text
        style={{fontSize:23, fontWeight: 'bold'}}
        >Notícias</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column', // Alterado para 'column' para empilhar elementos verticalmente
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5887',
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
  },
});

export default cabecalho2;
