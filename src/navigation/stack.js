import noticias from "../screen/noticias";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import calculadora from "../screen/calculadora";
import login from "../screen/login";
import sobremim from "../screen/sobremim";
import cadastrousuario from "../screen/cadastrousuario";
import index from "../screen/index";
import NoticiasScreen from "../screen/noticiasAPI";

export default() =>{
 const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={login}></Stack.Screen>
            <Stack.Screen name='NoticiasAPI' component={NoticiasScreen}></Stack.Screen>
            <Stack.Screen name="Calculadora Sustentável" component={calculadora}></Stack.Screen>
            <Stack.Screen name='Notícias' component={noticias}></Stack.Screen>
            <Stack.Screen name='Página inicial' component={index}></Stack.Screen>
            <Stack.Screen name="Quem sou eu?" component={sobremim}></Stack.Screen>
            <Stack.Screen name='Cadastrando Seu Usuário' component={cadastrousuario}></Stack.Screen>
        </Stack.Navigator>
    )
}