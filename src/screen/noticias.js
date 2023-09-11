import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Cabecalho2 from "./cabecalho2";
import * as Font from 'expo-font';

export default () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Nunito-Italic': require('../../assets/fonts/Nunito-Italic.ttf'),
        'Nunito-Light': require('../../assets/fonts/Nunito-Light.ttf'),
        // Adicione outras fontes aqui, se necessário
      });
      console.log('fonte deu bom')
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando fonte...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Cabecalho2></Cabecalho2>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.container}>
          Esta é a página de metas de ONU para a economia mundial e o salvamento da água.
          Fique de olho e se baseie nas metas para se conscientizar!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    margin: 9,
    fontSize: 20,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
