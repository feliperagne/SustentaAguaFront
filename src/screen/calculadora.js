import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import Cabecalhocalculadora from "./cabecalhocalculadora";
import Modal from "react-native-modal";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

function App() {
  const navigation = useNavigation();
  const [valor, setValor] = useState("");
  const [habitante, setHabitante] = useState("");
  const [consumoMedioEstado, setConsumoMedioEstado] = useState("");
  const [resultado, setResultado] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const URLapi = "https://c655-201-63-132-162.ngrok-free.app/api/estados";
  const [estados, setEstados] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState([]);

  useEffect(() => {
    console.log("Habitantes do estado :", habitante);
    console.log("Consumo Médio Estado escolhido :", consumoMedioEstado);
  }, [habitante, consumoMedioEstado]);

  const getEstados = async () => {
    try {
      const response = await axios.get(URLapi);
      const data = response.data.data; //colocar uma data a mais para acessar o array real!
      setEstados(data);
    } catch (error) {
      console.error("Erro de Listagem!", error);
    }
  };

  useEffect(() => {
    getEstados();
  }, []);

  const handleEstadoSelecionado = async (itemValue) => {
    setEstadoSelecionado(itemValue);

    // Carregue os valores de população e consumo médio aqui
    try {
      const response = await axios.get(
        ` https://c655-201-63-132-162.ngrok-free.app/api/listarPopulacaoEConsumo/${itemValue}`
      );
      const data = response.data.data; // Retornar o array real (puro)

      setHabitante(data.populacao);
      setConsumoMedioEstado(data.consumoMedio);
    } catch (error) {
      console.error(
        "Erro ao buscar dados de população e consumo médio",
        error
      );
      Alert.alert("Erro!", "Erro ao buscar dados de população e consumo médio!");
    }
  };

  async function calcularConsumo() {
    if (!valor || !estadoSelecionado) {
      Alert.alert(
        "Há campos vazios na calculadora",
        "Por favor, preencha ambos os campos!"
      );
      return;
    }

    try {
      const valorInserido = parseFloat(valor);
      const populacaoEstado = parseFloat(habitante);
      const consumoDoEstado = parseFloat(consumoMedioEstado);
      const consumo =
        (valorInserido / 100 / consumoDoEstado) * 30 * populacaoEstado;
      /*Explicação do cálculo: 
       - valorInserido / 100 converte o valor em reais para centavos.
       - consumoDoEstado divide o valor em centavos pelo consumo médio de água do estado para obter o custo em litros por centavo.
       - multiplica o resultado por 30 para obter o custo mensal em litros por centavo.
       - multiplica o resultado pelo número de habitantes do estado para obter o consumo total em litros.
       - Portanto, o resultado final (consumo) é o consumo de água em litros necessário para atender à meta de gastos em reais.
        */
      const consumoFormatado = consumo.toFixed(2).substring(0, 4);
      setResultado(consumoFormatado);
      setModalVisible(true);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro!", "Erro ao buscar dados de população e consumo médio!");
      setModalVisible(false);
    }
  }

  function limparCampos() {
    setValor("");
    setHabitante("");
    setResultado(null);
    setEstadoSelecionado("");
  }

  return (
    <View style={styles.container}>
      <Cabecalhocalculadora />
      <View style={styles.container2}>
        <Text style={styles.titulo}>Calculadora Sustentável</Text>

        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Digite a sua meta de gastos mensais com água"
          onChangeText={(valor) => setValor(valor)}
          value={valor}
        />

        <Picker
          selectedValue={estadoSelecionado}
          style={styles.dropDownContainer}
          onValueChange={handleEstadoSelecionado}
        >
          <Picker.Item
            label="Selecione o estado que você reside"
            value=""
            style={styles.dropDownItem}
          />
          {estados.map((estado) => (
            <Picker.Item
              label={estado.nome}
              value={estado.id}
              key={estado.id}
              style={styles.dropDownItem}
            />
          ))}
        </Picker>

        <TouchableOpacity
          style={styles.button}
          onPress={() => calcularConsumo()}
        >
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContent}>
            <Text style={styles.resultadoModal}>
              O consumo de água recomendado é de, aproximadamente, {resultado} litros por mês.
            </Text>
            <Button
              title="Fechar"
              onPress={() => {
                setModalVisible(false);
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => limparCampos()}
          >
            <Text style={styles.buttonText}>Limpar Campos</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Página inicial')}
          >
            <Text style={styles.buttonText}>Voltar para a página inicial</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2023 Felipe Silveira. Todos os direitos reservados.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container2: {
    flex: 0.9,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#7885",
    paddingVertical: 15,
    alignItems: "center",
  },
  footerText: {
    color: "#000",
    textAlign: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    width: "80%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin:10
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
  // Estilos para o DropDownPicker
  dropDownContainer: {
    height: 40,
    width: "85%",
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  dropDownItem: {
    justifyContent: "flex-start",
  },
});

export default App;
