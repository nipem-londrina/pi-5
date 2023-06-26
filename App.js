import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login/index'
import ListaJogosJogador from './src/pages/ListaJogosJogador/index'
import Perfil from './src/pages/Perfil/index'
import Cadastro from './src/pages/CadastroConta/index'
import ListaJogos from './src/pages/ListaJogos/index'
import RegistroPartida from './src/pages/RegistroPartida/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ListaJogosJogador" component={ListaJogosJogador} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="ListaJogos" component={ListaJogos} />
        <Stack.Screen name="RegistroPartida" component={RegistroPartida}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
