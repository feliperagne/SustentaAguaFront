import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from "react-native";


export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const urlAPI = "https://795c-201-49-195-24.ngrok-free.app/api/user";
  const navigation = useNavigation();
  
  //const [profile_image, setProfile_image] = useState(null);

 /* const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfile_image(result.assets[0].uri);
    }
  };*/
  async function cadastrar(username, email,password) {

    const usernameMinusculo = username.toLowerCase();

    try {
      const response = await axios.post(urlAPI, { 'username': usernameMinusculo, 'email' : email, 'password': password });
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
          throw errorMessages.join('\n'); // Junte todos os erros em uma única string
        }
      }
      throw 'Ocorreu um erro ao fazer o login';
    }
  }

  async function handlesubmit() {

    if (/[A-Z]/.test(username)) {
      Alert.alert("Erro de cadastro", "O username deve conter apenas letras minúsculas.");
      return; // Saia da função se houver letras maiúsculas no username
    }

    try {
      const cadastro = await cadastrar(username, email, password);
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
        Alert.alert('Erro de cadastro! Ocorreu um erro ao fazer o cadastro, tente novamente!');
      }
    }
  }
  
  return (
    <ScrollView>
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
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => pickImage()}
          >
            <Text style={styles.buttonText}>Escolher Imagem</Text>
          </TouchableOpacity> 
           <View style={{justifyContent:"center", alignItems:"center", top:6}}>
          {profile_image && <Image source={{ uri: profile_image }} style={{ width: 200, height: 200 }} />}
          </View>  */}
        <TouchableOpacity style={styles.button} onPress={() => handlesubmit()}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setUsername("");
              setEmail("");
              setPassword("");
             // setProfile_image('')
              }}
          >
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
         
        </View>
      </View>
    </View>
    </ScrollView>
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
