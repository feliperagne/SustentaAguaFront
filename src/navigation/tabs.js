import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tela3 from "../screen/tela3";
import principal from "../screen/principal";
import login from "../screen/login";
import calculadora from "../screen/calculadora";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default() => {
    const nav = createBottomTabNavigator()
    return(
        <nav.Navigator
            screenOptions={{
                tabBarActiveTintColor:'#fff',
                tabBarActiveBackgroundColor: '#000',
                tabBarInactiveBackgroundColor:'#fff',
                tabBarInactiveTintColor:'#000',
                tabBarLabelStyle:{
                    fontSize:30
                }
            }} initialRouteName="principal"
        >
        <nav.Screen name="login" component={login}
        options={{
            tabBarLabel: 'Login',
            tabBarLabelStyle : {fontSize:20},
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            tabBarBadge: 1,
          }}
        ></nav.Screen>
        <nav.Screen name="Calculadora Sustentável" component={calculadora}
        options={{
            tabBarLabel: 'Calculadora',
            tabBarLabelStyle : {fontSize:20},
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calculator" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        ></nav.Screen>
        <nav.Screen name="Quem sou eu?" component={tela3}
        options={{
            tabBarLabel: 'Sobre mim',
            tabBarLabelStyle : {fontSize:20},
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        ></nav.Screen>
        <nav.Screen name='principal' component={principal}
        options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle : {fontSize:20},
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        ></nav.Screen>
    </nav.Navigator>

    )
}