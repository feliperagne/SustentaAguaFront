import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default () => {
  return (
    <View>
      <Text style={styles.textoinicial}>Muito bom te ver por aqui!</Text>
      <Text style={styles.textoinicial2}>Agora crie seu usuário:</Text>

      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
          marginTop: 50,
          flexDirection: "column",
          margin: 15,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Insira o nome que seu usuário terá"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Insira seu email"
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Insira uma senha para você"
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  textoinicial: {
    fontWeight: "bold",
    fontSize: 26,
    justifyContent: "center",
    margin: 10,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 100,
  },
  textoinicial2: {
    fontWeight: "bold",
    fontSize: 26,
    justifyContent: "center",
    margin: 10,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    margin: 5,
  },
  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
