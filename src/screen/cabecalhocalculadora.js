import { View, Image, Text, StyleSheet} from "react-native";
import React from "react";


const cabecalhocalculadora = () => {

  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: 30, marginLeft: 22, left:5, top:15 }}>
          Sustenta Água
        </Text>
        <Image style={styles.logo2} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.news}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column', // Alterado para 'column' para empilhar elementos verticalmente
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5d7afc',
    padding: 40,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
    top:15
  },
  logo2: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 40, // Alterado para marginLeft para dar espaço entre os logos
    top:15
  },
  news: {
    marginTop: 10,
    right:10,
  },
});

export default cabecalhocalculadora;
