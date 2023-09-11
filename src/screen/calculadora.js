import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import Cabecalho from "./tela3";
import Cabecalhocalculadora from "./cabecalhocalculadora";
import Modal from "react-native-modal"; // Importe o Modal

function App() {
  const [valor, setValor] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [resultado, setResultado] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const consumoMedio = 110;

  function calcularConsumo() {
    if (!valor || !populacao) {
      Alert.alert(
        "Há campos vazios na calculadora",
        "Por favor, preencha ambos os campos!"
      );
      return;
    }

    const valorInserido = parseFloat(valor);
    const populacaoInserida = parseFloat(populacao);

    const consumo = (valorInserido / 100 / consumoMedio) * 30 * populacaoInserida;

    const consumoFormatado = consumo.toFixed(2) * 1000;

    setResultado(consumoFormatado)
    setModalVisible(true); 
  }

  function limparCampos() {
    setValor("");
    setPopulacao("");
    setResultado(null);
  }

  return (
    <View style={styles.container}>
      <Cabecalhocalculadora></Cabecalhocalculadora>
      <Text style={styles.titulo}>Calculadora Sustentável</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Digite o valor que você pode gastar na conta de água no mês"
        onChangeText={(valor) => setValor(valor)}
        value={valor}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a população da cidade"
        keyboardType="number-pad"
        onChangeText={(populacao) => setPopulacao(populacao)}
        value={populacao}
      />

      <TouchableOpacity style={styles.button} onPress={() => calcularConsumo()}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

     
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.resultadoModal}>
            O consumo de água recomendado é de {resultado} litros por mês.
          </Text>
          <Button
            title="Fechar"
            onPress={() => {
              setModalVisible(false); // Fecha o modal quando o botão é pressionado
            }}
          />
        </View>
      </Modal>

      <View
        style={{
          top: 50,
          width: "80%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => limparCampos()}
        >
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f0f0f0",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "blue",
    width: "80%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  resultado: {
    fontSize: 18,
    margin: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
  // Estilos para o Modal
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  resultadoModal: {
    fontSize: 18,
    margin: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
});

export default App;
