import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const urlAPI = "https://5c1c-179-127-67-47.ngrok-free.app/api/user";
  const navigation = useNavigation();



  async function cadastrar(name, username, email, password) {
    const usernameMinusculo = username.toLowerCase();
    try {
        const response = await axios.post(urlAPI, {
            'name': name,
            'username': usernameMinusculo,
            'email': email,
            'password': password
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
                            errorMessages.push(`${errorMessage}`);
                        }
                    }
                }
                throw errorMessages.join('\n'); // Junte todos os erros em uma única string
            }
        }
        throw new Error('Ocorreu um erro ao fazer o login');
    }
}


  async function handlesubmit() {
    if (/[A-Z]/.test(username)) {
      Alert.alert("Erro de cadastro", "O username deve conter apenas letras minúsculas.");
      return; // Saia da função se houver letras maiúsculas no username
    }

    try {
      const cadastro = await cadastrar(name, username, email, password);
      if(cadastro){
        console.log('Cadastro Feito!', cadastro);
        Alert.alert('Cadastro Feito!');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log('Erro de cadastro!', error);
      if (Array.isArray(error)) {
        // Se error for um array, exibe os erros separados por quebras de linha
        Alert.alert('Erro de cadastro!', error.join('\n'));
      } else if (typeof error === 'string') {
        Alert.alert('Erro de cadastro!', error);
      } else {
        Alert.alert('Erro de cadastro!' ,'Ocorreu um erro ao fazer o cadastro, tente novamente!');
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.pagecontainer}>
      <View style={styles.container}>
        <Text style={styles.textoinicial}>Muito bom te ver por aqui!</Text>
        <Text style={styles.textoinicial2}>Agora crie seu usuário:</Text>

        <View style={styles.container2}>
          <TextInput
            style={styles.input}
            placeholder="Insira seu nome"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Insira um nome de usuário para você"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Insira seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Insira uma senha para você"
            value={password}
            keyboardType="number-pad"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handlesubmit}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setName("")
              setUsername("")
              setEmail("")
              setPassword("")
            }}
          >
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pagecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 20
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoinicial: {
    fontWeight: "bold",
    fontSize: 22,
    margin: 25,
    textAlign: 'center'
  },
  textoinicial2: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 20,
    textAlign: 'center'
  },
  input: {
    width: 260,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    margin: 5,
    backgroundColor: '#f0f0f0'
  },
  button: {
    backgroundColor: "blue",
    width: 180,
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
})