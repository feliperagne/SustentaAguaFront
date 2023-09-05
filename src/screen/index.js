import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import Cabecalho from "./tela3";
import { useNavigation } from "@react-navigation/native";



export default () => {
  
  const navigation = useNavigation();
  return (
    <View>
      <Cabecalho></Cabecalho>
      <View style={styles.container}>
        <Text style={styles.text}>
          Bem vindo ao Sustenta Água, seu calculador de gasto de água e
          estabelecimento de metas!
        </Text>

        <Image
          style={styles.image}
          source={require("../../assets/savingWater.png")}
        ></Image>
        <Text style={styles.text2}>
          Navegue pelo aplicativo! Eis as opções: você pode ver as metas da ONU
          para a economia de água até 2050 e pode entrar na página da
          calculadora sustentável.
        </Text>

        <Button
          title="Metas da ONU - 2050"
          onPress={() => navigation.navigate("Notícias")}
        ></Button>
        <View style={{ top: 20 }}>
          <Button
            title="Calculadora Sustentável"
            onPress={() => navigation.navigate("Calculadora Sustentável")}
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    top: 60,
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
    bottom: 10,
  },
  image: {
    top: 30,
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue", // Cor de fundo do cabeçalho
    padding: 28,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 20, // Isso torna a imagem circular
    marginRight: 10,
  },
  welcomeText: {
    color: "white", // Cor do texto
    fontSize: 16,
  },
  logo: {
    width: 120,
    height: 80,
    resizeMode: "contain", // Isso garante que o logotipo se ajuste ao espaço
  },
});
