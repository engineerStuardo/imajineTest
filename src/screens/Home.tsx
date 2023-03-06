import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export type RootStackParamList = {
  SignIn: undefined;
};

export const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../assets/homeImage.png')}
    >
      <View style={styles.transparency} />
      <Image
        style={styles.titleImage}
        source={require('../../assets/socialNetTitle.png')}
      />
      <Text style={styles.subtitle}>Welcome</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  transparency: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  titleImage: {
    top: 182.35,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  subtitle: {
    fontSize: 28,
    top: 200,
    color: '#FDFDFD',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ED572F',
    width: 167,
    height: 48,
    borderRadius: 8,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: '#FBECE8',
    fontWeight: '700',
  },
});
