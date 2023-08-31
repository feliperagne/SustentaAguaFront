import { View, Image,Text,StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { StatusBar } from "react-native";
import { TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//EXEMPLOS DE COMO IMPORTAR IMAGENS, FLATLIST E TOUCHABLE


const DATA = [
    {
        id:'felipe',
        title:'felipao lindao'
    },
    {
        id:'lanza',
        title:'lanza paga uma pra nois'
    }
]
export default({navigation}) =>{
    return (
        <ScrollView>
        <View style={styles.container}>
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
            <View style={styles.container}>
               <Button
               title='Ir para a calculadora'
               onPress={() => navigation.navigate('Calculadora Sustentável')}
               >
                
                </Button>
                </View>
                <View style={styles.container}> 
               <Button
               title='Tela de login'
               onPress={() => navigation.navigate('login')}
               >
                
                </Button>
                </View> 
        </View>
        </ScrollView>

    )
    
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
        margin:9
    },
    image:{
        height:300,
        width:300,
        resizeMode: 'contain',
    },
    list:{
        padding:10,
        backgroundColor:'#4825',
        marginHorizontal:10,
        marginVertical:10,
        marginTop: StatusBar.currentHeight || 0
    }



});