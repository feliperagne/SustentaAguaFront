import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import Principal from './src/screen/principal';
import Stack from './src/navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pagina Inicial</Text>
    </View>
  );
}
const stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
   
      <Stack></Stack>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  titleContainer: {
    flexDirection: 'row', // Alinha o ícone e o título na mesma linha
    alignItems: 'center', // Alinha verticalmente o ícone e o título
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10, // Espaço entre o ícone e o título
  },
  buttonContainer:{
   marginTop:50,
  },
  buttonRow:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignContent: 'center',
    width:250,
    height:47,
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  inputLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInputContainer: {
    flexDirection: 'row', // Alinha os TextInput lado a lado
  },
  textInput: {
    flex: 1, // Ocupa o espaço disponível na horizontal
    fontSize: 25,
    marginRight: 10, // Espaço entre os TextInput
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
});
