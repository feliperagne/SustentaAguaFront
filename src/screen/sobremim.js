import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/felipe.jpg')}
      />

      <Text style={styles.title}>Sobre o Criador</Text>

      <Text style={styles.text}>
        Felipe é um estudante apaixonado por tecnologia, focado em programação.
        Ele dedica-se diariamente a aprimorar suas habilidades e criar aplicativos
        incríveis como este. Este aplicativo foi desenvolvido em um ambiente acadêmico,
        mas continuará a ser aprimorado para atender às suas expectativas!
      </Text>

      <Text style={styles.text}>Espero que aproveitem!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    height: 350,
    width: 350,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
