import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { WelcomeHome } from '../screens/WelcomeHome';
import { InviteFriends } from '../screens/InviteFriends';
import { FinalScreen } from '../screens/FinalScreen';

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
        <Stack.Screen
          name='WelcomeHome'
          component={WelcomeHome}
          options={{
            headerShown: false,
            headerTransparent: false,
          }}
        />
        <Stack.Screen
          name='InviteFriends'
          component={InviteFriends}
          options={{
            headerTitle: '',
            headerStyle: { backgroundColor: '#f5f5f5' },
            headerTintColor: '#555555',
          }}
        />
        <Stack.Screen
          name='FinalScreen'
          component={FinalScreen}
          options={{
            headerTitle: '',
            headerStyle: { backgroundColor: '#f5f5f5' },
            headerTintColor: '#555555',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
