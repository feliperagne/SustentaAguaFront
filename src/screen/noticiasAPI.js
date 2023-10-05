import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

const NoticiasScreen = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('Selecione um país'); // Padrão para ficar na posicao de escolher um país

  useEffect(() => {
    // Faça uma solicitação HTTP para obter as manchetes da API com base no país selecionado
    axios
      .get(`https://5c1c-179-127-67-47.ngrok-free.app/api/noticias/${selectedCountry}`)
      .then((response) => {
        // Defina o estado das manchetes com os dados da API
        setArticles(response.data.articles);
       // console.log(response.data.articles);
      })
      .catch((error) => {
        console.error("Erro ao buscar as manchetes:", error);
      });
  }, [selectedCountry]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manchetes de Notícias</Text>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={handleCountryChange}
        style={styles.picker}
      >
        <Picker.Item label="Selecione um país" value="" />
        <Picker.Item label="Emirados Árabes Unidos" value="ae" />
        <Picker.Item label="Argentina" value="ar" />
        <Picker.Item label="Áustria" value="at" />
        <Picker.Item label="Austrália" value="au" />
        <Picker.Item label="Bélgica" value="be" />
        <Picker.Item label="Bulgária" value="bg" />
        <Picker.Item label="Brasil" value="br" />
        <Picker.Item label="Canadá" value="ca" />
        <Picker.Item label="Suíça" value="ch" />
        <Picker.Item label="China" value="cn" />
        <Picker.Item label="Colômbia" value="co" />
        <Picker.Item label="Cuba" value="cu" />
        <Picker.Item label="República Tcheca" value="cz" />
        <Picker.Item label="Alemanha" value="de" />
        <Picker.Item label="Egito" value="eg" />
        <Picker.Item label="França" value="fr" />
        <Picker.Item label="Reino Unido" value="gb" />
        <Picker.Item label="Grécia" value="gr" />
        <Picker.Item label="Hong Kong" value="hk" />
        <Picker.Item label="Hungria" value="hu" />
        <Picker.Item label="Indonésia" value="id" />
        <Picker.Item label="Irlanda" value="ie" />
        <Picker.Item label="Israel" value="il" />
        <Picker.Item label="Índia" value="in" />
        <Picker.Item label="Itália" value="it" />
        <Picker.Item label="Japão" value="jp" />
        <Picker.Item label="Coreia do Sul" value="kr" />
        <Picker.Item label="Lituânia" value="lt" />
        <Picker.Item label="Letônia" value="lv" />
        <Picker.Item label="Marrocos" value="ma" />
        <Picker.Item label="México" value="mx" />
        <Picker.Item label="Malásia" value="my" />
        <Picker.Item label="Nigéria" value="ng" />
        <Picker.Item label="Holanda" value="nl" />
        <Picker.Item label="Noruega" value="no" />
        <Picker.Item label="Nova Zelândia" value="nz" />
        <Picker.Item label="Filipinas" value="ph" />
        <Picker.Item label="Polônia" value="pl" />
        <Picker.Item label="Portugal" value="pt" />
        <Picker.Item label="Romênia" value="ro" />
        <Picker.Item label="Sérvia" value="rs" />
        <Picker.Item label="Rússia" value="ru" />
        <Picker.Item label="Arábia Saudita" value="sa" />
        <Picker.Item label="Suécia" value="se" />
        <Picker.Item label="Singapura" value="sg" />
        <Picker.Item label="Eslovênia" value="si" />
        <Picker.Item label="Eslováquia" value="sk" />
        <Picker.Item label="Tailândia" value="th" />
        <Picker.Item label="Turquia" value="tr" />
        <Picker.Item label="Taiwan" value="tw" />
        <Picker.Item label="Ucrânia" value="ua" />
        <Picker.Item label="Estados Unidos" value="us" />
        <Picker.Item label="Venezuela" value="ve" />
        <Picker.Item label="África do Sul" value="za" />
      </Picker>

      <FlatList
  data={articles} // Acesse o array de notícias
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={styles.noticiaContainer}>
      <Text style={styles.titulo}>{item.title}</Text>
      <Text style={styles.autor}>Autor: {item.author}</Text>
      {item.description && <Text style={styles.descricao}>{item.description}</Text>} 
      {/* se descricao existir, vai mostrar no flat list*/}
      <Text style={styles.source}>Fonte: {item.source.name}</Text>
      <Text style={styles.publishedAt}>Publicado em: {item.publishedAt}</Text>
      {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.imagem} />} 
      {/* se a noticia ter imagem, vai mostrar no flat list*/}
      {item.content && <Text style={styles.content}>{item.content}</Text>} 
      {/* se a noticia ter um conteudo extra, vai mostrar */}
    </View>
  )}
/>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    backgroundColor:'#5d7afc',
    padding:50
  },
  picker: {
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 8,
    width:'80%',
    left:'10%'
  },
  noticiaContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: "gray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "black",
    borderBottomWidth: 1, // Adiciona uma borda inferior
    borderBottomColor: "gray",
  },
  descricao: {
    fontSize: 16,
    color: "gray",
     borderBottomWidth: 1, // Adiciona uma borda inferior
    borderBottomColor: "gray", // Cor da borda inferior
  },
  imagem:{
    resizeMode:'contain',
    width:200,
    height:200,
    justifyContent: 'center',
    alignSelf:'center'
  }
});


export default NoticiasScreen;
