import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import Noticias from './src/screen/noticias';
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
