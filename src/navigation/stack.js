import principal from "../screen/principal";
import tela3 from "../screen/tela3";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import calculadora from "../screen/calculadora";
import login from "../screen/login";



export default() =>{
 const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={login}></Stack.Screen>
            <Stack.Screen name="Calculadora Sustentável" component={calculadora}></Stack.Screen>
            <Stack.Screen name="Quem sou eu?" component={tela3}></Stack.Screen>
            <Stack.Screen name='principal' component={principal}></Stack.Screen>
        </Stack.Navigator>
    )
}