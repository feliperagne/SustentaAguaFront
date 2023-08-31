// Importar os componentes e funções necessários
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";


// Renderizar a calculadora
function App() {

  // Definir os estados da calculadora
const [valor, setValor] = useState('');
const [populacao, setPopulacao] = useState('');
const [resultado, setResultado] = useState('');

// Definir o consumo médio por pessoa
const consumoMedio = 110;

// Definir a função para calcular o consumo de água
function calcularConsumo() {
  // Obter os dados necessários
  const valorInserido = parseFloat(valor);
  const populacaoInserida = parseFloat(populacao);

  // Calcular o consumo de água
  const consumo = valorInserido / 100 / consumoMedio * 30 * populacaoInserida;
  const consumoFormatado = consumo.toFixed(2);
  // Atualizar o estado do resultado
  setResultado(consumoFormatado);
}





  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Sustentável</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor que você pode gastar na conta de água no mês"
        onChangeText={(valor) => setValor(valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a população da cidade"
        onChangeText={(populacao) => setPopulacao(populacao)}
      />

      <Button
        style={styles.botao}
        title="Calcular"
        onPress={calcularConsumo}
      />

      <Text style={styles.resultado}>
        O consumo de água recomendado é de {resultado} m³ por mês.
      </Text>
    </View>
  );
}

// Definir os estilos da calculadora
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    width: 200,
    height: 40,
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    borderRadius: 5,
  },
  resultado: {
    fontSize: 16,
    margin: 10,
  },
});

// Exportar o componente App
export default App;
