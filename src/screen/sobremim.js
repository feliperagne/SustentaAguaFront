import React from "react";
import { Image, View, StyleSheet, Text, Button } from "react-native";

export default({navigation}) => {

    return (
    <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('../../assets/felipe.jpg')}
        >
        </Image>

        <Text
        style={styles.text}
        >Felipe é um estudante de tecnologia com foco em programação, 
        área em que se identificou e treina diariamente para melhorar as habilidades. 
        Esse aplicativo foi feito em um ambiente acadêmico, 
        mas será sempre refinado para atender as melhores expectativas!</Text>
        <Text style={styles.text}>Espero que gostem!</Text>

        <View>
        <Button
        title="Voltar para o Login"
        onPress={() => navigation.goBack()}
        >
        </Button>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height:350,
        width:350,
        resizeMode: 'contain',
    },
    text:{
        fontSize:22,
        fontWeight: 'bold',
        margin:10,
        marginTop:30
    }
})
