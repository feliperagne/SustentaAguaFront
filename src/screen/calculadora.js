import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import Cabecalhocalculadora from "./cabecalhocalculadora";
import Modal from "react-native-modal"; // Importe o Modal
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

function App() {
  const [valor, setValor] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [resultado, setResultado] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const consumoMedio = 110;
  const URLapi = "https://0cd9-201-49-195-24.ngrok-free.app/api/estados";
  const [estados, setEstados] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  const fetchEstados = async () => {
    try {
      const response = await axios.get(URLapi); // Use o Axios para fazer a solicitação GET
      if (response.status === 200) {
        const data = response.data;
        setEstados(data);
        console.log(data);
      } else {
        Alert.alert(
          "Erro na listagem!",
          "Não pôde ser listado os estados brasileiros!"
        );
      }
    } catch (error) {
      console.error("Erro de Listagem!", error);
    }
  };

  useEffect(() => {
    fetchEstados();
  }, []);

  
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

    const consumo =
      (valorInserido / 100 / consumoMedio) * 30 * populacaoInserida;

    const consumoFormatado = consumo.toFixed(2) * 1000;

    setResultado(consumoFormatado);
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
      <View style={styles.container2}>
      <Text style={styles.titulo}>Calculadora Sustentável</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Digite a sua meta de gastos com água para o mês"
        onChangeText={(valor) => setValor(valor)}
        value={valor}
      />

  <Picker
        style={{
          width: "80%",
          height: 40,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          marginBottom: 20,
          backgroundColor: "#fff",
        }}
        selectedValue={estadoSelecionado}
        onValueChange={(itemValue, itemIndex) => setEstadoSelecionado(itemValue)}
      >
        <Picker.Item label="Selecione o estado" value="" />
        {estados.length>0 ? estados.map((estado) => (
          <Picker.Item
            key={estado.id}
            label={estado.nome}
            value={estado.id}
          />
        )) : []}
      </Picker>


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
          top: 20,
          width: "80%",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.button} onPress={() => limparCampos()}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Felipe Silveira. Todos os direitos reservados.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container2:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center', 
    bottom:90
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '110%',
    height: '10%',
    backgroundColor: '#7885',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#000',
    marginTop: 20,
    right:10
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
