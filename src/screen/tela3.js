import { View, Image,Text,StyleSheet } from "react-native";
import React from "react";
/*import { FlatList } from "react-native";
import { StatusBar } from "react-native";
import { TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";*/

const cabecalho = () => {
    return (
        <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/felipe.jpg')} // Substitua pelo caminho da sua imagem de perfil
          />
          <Text style={styles.welcomeText}>Bem-vindo,Felipe</Text>
        </View>
        <Image
          style={styles.logo}
          source={require('../../assets/agua.webp')} // Substitua pelo caminho do seu logotipo fictício
        />
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
        backgroundColor: 'blue', // Cor de fundo do cabeçalho
        padding: 30,
      },
      userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileImage: {
        width: 60,
        height: 60,
        borderRadius: 20, // Isso torna a imagem circular
        marginRight: 10,
      },
      welcomeText: {
        color: 'white', // Cor do texto
        fontSize: 16,
      },
      logo: {
        width: 120,
        height: 80,
        resizeMode: 'contain', // Isso garante que o logotipo se ajuste ao espaço
      },


});
export default cabecalho