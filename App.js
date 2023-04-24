import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/TelaInicial';
import Results from './src/screens/Resultados';
import Details from './src/screens/Detalhes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen name="Resultados" component={Results}
          options={{ headerShown: false }} />
        <Stack.Screen name="Detalhes" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;