import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from "react-native";
import Cabecalho2 from "./cabecalho2";

export default () => {
 
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

  <NewsItem2
  title={<Text>Informações do novo Relatório Mundial sobre água: {'\n'}</Text>}
  subtitle={<Text>Confira alguns dados interessantes - e alarmantes - levantados pelo novo Relatório Mundial das Nações Unidas sobre Desenvolvimento dos Recursos Hídricos:{'\n'}</Text>}
  content={
    <Text>
      - Mais de 2 bilhões de pessoas vivem em países que experimentam estresse hídrico (proporção anual entre o total de água potável retirada pelos principais setores e a quantidade total de recursos hídricos renováveis); {'\n\n'}
      - 31 países experimentam estresse hídrico entre 25% (que é definido como o patamar mínimo) e 70%. Outros 22 países estão acima do nível de 70% e, por isso, encontram-se em uma grave situação; {'\n\n'}
      - Cerca de 4 bilhões de pessoas (quase dois terços da população mundial) vivenciam uma escassez de água grave durante, pelo menos, um mês do ano; {'\n\n'}
      - Cerca de 90% de todos os desastres naturais são relacionados à água; {'\n\n'}
      - 5% dos desastres naturais são causados pela seca. Ela afeta 1,1 bilhão de pessoas, matando mais 22 mil e causando US$ 100 bilhões em prejuízos; {'\n\n'}
      - Mais de 80% das águas residuais, em todo o mundo, retornam ao meio ambiente sem tratamento; {'\n\n'}
      - Várias doenças relacionadas à água continuam aumentando, como a cólera e esquistossomose. A maioria dos casos ocorre nos países onde apenas uma proporção muito pequena de águas residuais e urbanas é tratada; {'\n\n'}
      - Em todo o mundo, apenas 2,9 bilhões de pessoas (39% da população mundial) tiveram acesso a serviços sanitários gerenciados de forma segura em 2015.
    </Text>
  }
/>
<View style={styles.newsItem}>
  <Text style={styles.newsTitle}>Metas da ONU para garantir água potável e saneamento básico para todos:</Text>
  <View style={styles.metaContainer}>
    <Text style={styles.newsSubtitle}>Meta 6.1</Text>
    <Text style={styles.newsText}>Até 2030, alcançar o acesso universal e equitativo a água potável e segura para todos.</Text>

    <Text style={styles.newsSubtitle}>Meta 6.2</Text>
    <Text style={styles.newsText}>
      Até 2030, alcançar o acesso a saneamento e higiene adequados e equitativos para todos, e acabar com a defecação a céu aberto, com especial atenção para as necessidades das mulheres e meninas e daqueles em situação de vulnerabilidade.
    </Text>

    <Text style={styles.newsSubtitle}>Meta 6.3</Text>
    <Text style={styles.newsText}>
      Até 2030, melhorar a qualidade da água, reduzindo a poluição, eliminando despejo e minimizando a liberação de produtos químicos e materiais perigosos, reduzindo à metade a proporção de águas residuais não tratadas e aumentando substancialmente a reciclagem e reutilização segura globalmente.
    </Text>

    <Text style={styles.newsSubtitle}>Meta 6.4</Text>
    <Text style={styles.newsText}>
      Até 2030, aumentar substancialmente a eficiência do uso da água em todos os setores e assegurar retiradas sustentáveis e o abastecimento de água doce para enfrentar a escassez de água, e reduzir substancialmente o número de pessoas que sofrem com a escassez de água.
    </Text>

    <Text style={styles.newsSubtitle}>Meta 6.5</Text>
    <Text style={styles.newsText}>
      Até 2030, implementar a gestão integrada dos recursos hídricos em todos os níveis, inclusive via cooperação transfronteiriça, conforme apropriado.
    </Text>

    <Text style={styles.newsSubtitle}>Meta 6.6</Text>
    <Text style={styles.newsText}>
      Até 2020, proteger e restaurar ecossistemas relacionados com a água, incluindo montanhas, florestas, zonas úmidas, rios, aquíferos e lagos.
    </Text>
  </View>
</View>

      </ScrollView>
      <Footer />
    </View>
  );
};

const NewsItem2 = ({ title, subtitle, content, }) => (
  <View style={styles.newsItem}>
    <Text style={styles.newsTitle2}>{title}</Text>
    <View style={styles.newsContent}>
      <Text style={styles.newsSubtitle}>{subtitle}</Text>
      <Text style={styles.newsText2}>{content}</Text>
      
    </View>
  </View>
)

const abrirLink = (url) => {
  Linking.openURL(url).catch((err) => console.error("Erro ao abrir a URL", err));
}
const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2023 Felipe Silveira. Todos os direitos reservados.</Text>
  </View>
);

const NewsItem = ({ title, subtitle, date, imageSource, content, link }) => (
  <View style={styles.newsItem}>
    <Text style={styles.newsTitle}>{title}</Text>
    <View style={styles.newsContent}>
      <Text style={styles.newsSubtitle}>{subtitle}</Text>
      <TouchableOpacity onPress={() => abrirLink(link)}>
        <Image source={imageSource} style={styles.newsImage} />
      </TouchableOpacity>
      <Text style={styles.newsDate}>{date}</Text>
      <Text style={styles.newsText}>{content}</Text>
    </View>
  </View>
);


const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container1: {
    margin: 9,
  },
  pageTitle: {
    fontSize: 18, // Fonte menor para o título
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
    fontSize: 24, // Fonte menor para o título da notícia
    fontWeight: "bold",
    marginBottom:10
  },
  newsTitle2: {
    fontSize: 27, // Fonte menor para o título da notícia
    fontWeight: "bold",
  },
  newsContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  newsSubtitle: {
    fontWeight: "bold",
    fontSize: 20, // Fonte menor para o subtítulo
    textAlign:'center',
    right:10,
    margin:10
  },
  metaContainer: {
    marginLeft: 15,
  },
  newsImage: {
    width: 300, 
    height: 270, 
    resizeMode: "contain",
  },
  newsDate: {
    fontSize: 8, // Fonte menor para a data
    bottom: 20,
  },
  newsText: {
    fontSize: 14, // Fonte menor para o conteúdo da notícia
    fontWeight: "bold",
  },
  newsText2: {
    fontSize: 18, // Fonte menor para o conteúdo da notícia
    fontWeight: "bold",
  },
  footer: {
    width: "100%",
    height: 60, 
    backgroundColor: "#1345",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 18, 
  },
});
