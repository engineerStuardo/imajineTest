import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
            headerTransparent: false,
          }}
        />
        <Stack.Screen
          name='SignIn'
          component={SignIn}
          options={{
            headerShown: false,
            headerTransparent: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
