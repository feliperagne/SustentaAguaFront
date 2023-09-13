import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from "react-native";
import Cabecalho2 from "./cabecalho2";

export default () => {


  const abrirLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir a URL", err));
  }


  
const NewsItem = ({ title, subtitle, date, imageSource, content, link }) => (
  <View style={styles.newsItem}>
    <Text style={styles.newsTitle}>{title}</Text>
    <View style={styles.newsContent}>
      <Text style={styles.newsSubtitle}>{subtitle}</Text>
      <TouchableOpacity onPress={()=> abrirLink(link)}>
      <Image source={imageSource} style={styles.newsImage} />
      </TouchableOpacity>
      <Text style={styles.newsDate}>{date}</Text>
      <Text style={styles.newsText}>{content}</Text>
    </View>
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2023 Felipe Silveira. Todos os direitos reservados.</Text>
  </View>
);


  return (
    <View style={styles.pageContainer}>
      <Cabecalho2 />
      <ScrollView>
        <View style={styles.container1}>
          <Text style={styles.pageTitle}>
            Esta é a página de notícias da ONU sobre o meio ambiente global e a saúde. Fique de olho e se baseie nas notícias para se conscientizar!
          </Text>
        </View>
        <NewsItem
          title="Notícia 1"
          subtitle="Tratamento de esgoto pode ser solução para clima e natureza"
          date="23 Agosto 2023 - Clima e Meio Ambiente"
          imageSource={require("../../assets/onu1.jpg")}
          content="Novo relatório do Programa da ONU para o Meio Ambiente, Pnuma, aponta que problema com o 
          descarte da água tem potencial para se tornar solução para outras questões; atualmente, 11% das águas 
          residuais tratadas do mundo são reutilizadas e metade é despejada em rios, lagos e mares."
          link="https://news.un.org/pt/story/2023/08/1819452" 
        />
        <NewsItem
          title="Notícia 2"
          subtitle="OMS: Acesso à água limpa pode salvar 1,4 milhão de vidas"
          date="29 Junho 2023 - Saúde"
          imageSource={require("../../assets/onu2.jpg")}
          content="Doenças associadas à falta de água potável, 
          saneamento e higiene causam mortes que podem ser evitadas; em 2019, mais de 69% dos óbitos por diarreia 
          foram resultado da falta desses serviços básicos; OMS lança ferramenta para modelar impactos em diferentes 
          cenários"
          link="https://news.un.org/pt/story/2023/06/1816807"
        />
        <NewsItem
          title="Notícia 3"
          subtitle="Dia Mundial das Aves Migratórias destaca importância da água"
          date="13 Maio 2023 - Clima e Meio Ambiente"
          imageSource={require("../../assets/onu3.jpg")}
          content="Data celebrativa pede preservação de ecossistemas aquáticos 
          essenciais para os pássaros; 48% das espécies de aves em todo o mundo estão passando por declínios 
          populacionais; Cerca de 35% das zonas úmidas foram devastadas."
          link="https://news.un.org/pt/story/2023/05/1814352"
        />
        <NewsItem
          title="Notícia 4"
          subtitle="Universidade da ONU divulga estudo sobre como garrafas de água podem atrasar ODS"
          date="15 Abril 2023 - ODS"
          imageSource={require("../../assets/onu4.jpg")}
          content="Análise da instituição indica que venda anuais, 
          em todo o globo, devem dobrar para US$ 500 bilhões ainda nesta década; UNU diz que indústria promove ideia 
          de “água segura” enquanto explora aquíferos e águas superficiais a um preço baixo e revende até 1 mil vezes 
          mais caro."
          link="https://news.un.org/pt/story/2023/04/1812862"
        />
        
      </ScrollView>
      <Footer />
    </View>
  );
};



const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container1: {
    margin: 9,
  },
  pageTitle: {
    fontSize: 23,
    fontWeight: "bold",
  },
  newsItem: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    padding: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  newsTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  newsContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  newsSubtitle: {
    fontWeight: "bold",
    fontSize: 28,
  },
  newsImage: {
    width: 350,
    height: 320,
    resizeMode: "contain",
  },
  newsDate: {
    fontSize: 10,
    bottom: 20,
  },
  newsText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    width: "100%",
    height: 50,
    backgroundColor: "#1345",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
});
