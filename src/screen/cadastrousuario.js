import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { useState } from "react";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const urlAPI = "https://f7e6-201-63-132-162.ngrok-free.app/api/user";
  const navigation = useNavigation();


  async function cadastrarusuario(username, email, password) {
    try {
      const response = await axios.post(urlAPI, {
        username: username,
        email: email,
        password: password,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        const errors = error.response.data.errors;
        if (errors) {
          const errorMessages = [];
          for (const errorKey in errors) {
            if (errors.hasOwnProperty(errorKey)) {
              const errorList = errors[errorKey];
              for (const errorMessage of errorList) {
                errorMessages.push(`${errorKey}: ${errorMessage}`);
              }
            }
          }
          throw errorMessages.join("\n"); // Junte todos os erros em uma única string
        }
      }
      throw "Ocorreu um erro ao fazer o cadastro!";
    }
  }

  async function handlesubmit() {
    try {
      const response = await cadastrarusuario(username, email, password);
      console.log('Cadastro bem sucedido', response);
      Alert.alert('Cadastro bem sucedido!');
      navigation.navigate('Login');
    } catch (error) {
      console.log('Deu erro aqui!', error);
      Alert.alert('Erro de cadastro', error);
    }
  }

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
          value={username}
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Insira seu email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Insira uma senha para você"
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            handlesubmit()
          }
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setUsername("");
              setEmail("");
              setPassword("");
            }}
          >
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "blue",
    width: "100%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
