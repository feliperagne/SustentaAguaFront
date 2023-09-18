import React from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cabecalho from '../screen/tela3';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Cabecalho></Cabecalho>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/savingWater.png")}
        ></Image>
        <Text style={styles.text}>
          Bem-vindo ao Sustenta Água, seu calculador de gasto de água e noticiário sobre o consumo mundial de água
        </Text>
        <Text style={styles.text2}>
          Navegue pelo aplicativo! Eis as opções: você pode ver as metas da ONU
          para a economia de água até 2050 e pode entrar na página da
          calculadora sustentável:
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Notícias")}
        >
          <Text style={styles.buttonText}>Noticiário da Onu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate("Calculadora Sustentável")}
        >
          <Text style={styles.buttonText}>Calculadora Sustentável</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Felipe Silveira. Todos os direitos reservados.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
    bottom:20
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    bottom:20
  },
  image: {
    marginBottom: 20,
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '110%',
    height:50,
    backgroundColor: '#7885',
    alignContent:'center',
    justifyContent:'center'
  },
  footerText: {
    color: '#333',
    left:50
  },
});
