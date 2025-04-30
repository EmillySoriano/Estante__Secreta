import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './telas/telaInicial';
import TelaBusca from './telas/telaBusca';
import TelaFavoritos from './telas/telaFavoritos';
import TelaResultados from './telas/telaResultados';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Busca"
          component={TelaBusca}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favoritos"
          component={TelaFavoritos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Resultados"
          component={TelaResultados}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}