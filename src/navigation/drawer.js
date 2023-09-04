import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tela3 from "../screen/tela3";
import principal from "../screen/principal";
import Login from "../screen/login";
import { createDrawerNavigator } from "@react-navigation/drawer";
import calculadora from "../screen/calculadora";

export default () =>{
    const drawer = createDrawerNavigator()
    return (
        <drawer.Navigator>
            <drawer.Screen name="login" component={Login}></drawer.Screen>
            <drawer.Screen name="Calculadora Sustentável" component={calculadora}></drawer.Screen>
            <drawer.Screen name="Quem sou eu?" component={tela3}></drawer.Screen>
            <drawer.Screen name='principal' component={principal}></drawer.Screen>
        </drawer.Navigator>
    )

}