import { View, Image,Text,StyleSheet, TouchableOpacity,Alert } from "react-native";
import React from "react";
import axios from "axios";
import useNavigation from "@react-navigation/native";
import { StatusBar } from "react-native";
import { TouchableHighlight } from "react-native";
import { ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import useRoute from "@react-navigation/native";


const cabecalho = () => {
  const route = useRoute();
  const userName = route.params?.username || "Maluco";
  const urlAPI = 'https://f7e6-201-63-132-162.ngrok-free.app/api/logout'
  const navigation = useNavigation();
  
 async function sair(navigation) {
    try {
      const response = await axios.post(urlAPI);
      if (response.status === 200) {
        // Logout bem-sucedido, você pode executar ações adicionais aqui
        Alert.alert('Logout bem-sucedido', 'Você saiu com sucesso.');
        navigation.navigate('Login'); 
      } else {
      
        Alert.alert('Erro no logout', 'Ocorreu um erro durante o logout.');
      }
    } catch (error) {
      // Lidar com erros de rede ou outros erros que podem ocorrer
      console.error('Erro:', error);
      Alert.alert('Erro no logout', 'Ocorreu um erro durante o logout.');
    }
  };
  



    return (
        <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            style={styles.logo}
            source={require('../../assets/agua.webp')}
          />
         <Text
         style={{fontWeight:'bold', fontSize:27}}
         >Sustenta Água</Text>
        </View>
        <View style={{flexDirection:'column'}}>
          <Text
          style={styles.welcomeText}
          >Bem Vindo , {userName}</Text>
        <TouchableOpacity
        onPress={()=> sair(navigation)}
        >
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}
/*export default({navigation}) =>{
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image
             source={require('../../assets/favicon.png')}
            >
            </Image>
            <Image
             source={require('../../assets/favicon.png')}
            >
            </Image>
            <Image
             source={require('../../assets/favicon.png')}
            >
            </Image>
            <Image
             source={require('../../assets/favicon.png')}
            >
            </Image>
            <Image
            style={styles.image}
            source={{uri:'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'}}
            >
            </Image>
            <Image
            style={styles.image}
            source={{uri:'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'}}
            >
            </Image>
            <Image
            style={styles.image}
            source={{uri:'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'}}
            >
            </Image>
            
            <Button
            title='Voltar pra pagina inicial'
            onPress={()=> navigation.goBack()}
            >

            </Button>
                
        </View>
        </ScrollView>

    )
    
}*/


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5887', // Cor de fundo do cabeçalho
        padding: 23,
      },
      button: {
        backgroundColor: 'blue',
        width: '100%',
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logout:{
        textDecorationLine:'underline',
        color: '#801',
        left:50,
        top:24
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      
      welcomeText: {
        color: 'white', // Cor do texto
        fontSize: 12,
        fontWeight: 'bold',
        bottom:5,
        left:9,
        top:11
      },
      logo: {
        width: 70,
        height: 50,
        resizeMode: 'contain',
        right:15
      },


});
export default cabecalho