import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Cabecalho2 from "./cabecalho2";

export default () => {

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
