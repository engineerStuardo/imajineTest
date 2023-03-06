import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export type RootStackParamList = {
  WelcomeHome: undefined;
};

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function isWithoutError() {
    if (email.length === 0) {
      setErrors({ ...errors, email: "Email can't be blank" });
      return false;
    }
    if (email.length < 6) {
      setErrors({ ...errors, email: 'Email must be at least 6 characters' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ ...errors, email: 'Email must be valid email address' });
      return false;
    }

    if (password.length === 0) {
      setErrors({ email: '', password: "Password can't be blank" });
      return false;
    }
    if (password.length < 6) {
      setErrors({
        email: '',
        password: 'Password must be at least 6 characters',
      });
      return false;
    }

    setErrors({ email: '', password: '' });
    return true;
  }

  const handlePress = () => {
    if (isWithoutError()) {
      navigation.navigate('WelcomeHome');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Image
          source={require('../../assets/socialNet.png')}
          style={styles.imageTitle}
        />
        <View style={styles.container}>
          <View>
            <Text style={styles.signInText}>Sign In</Text>
            <Text style={styles.signInSubtext}>
              SIGN IN WITH YOUR EMAIL ADDRESS
            </Text>
            <TextInput
              onChangeText={(text: string) => setEmail(text)}
              value={email}
              placeholder='Email'
              style={styles.input}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
            <View style={styles.input}>
              <TextInput
                onChangeText={(text: string) => setPassword(text)}
                value={password}
                placeholder='Password'
                secureTextEntry={!showPassword}
              />
              {showPassword ? (
                <TouchableOpacity onPress={() => setShowPassword(false)}>
                  <Image
                    source={require('../../assets/showPassword.png')}
                    style={{ width: 32, height: 32 }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setShowPassword(true)}>
                  <Image source={require('../../assets/hidePassword.png')} />
                </TouchableOpacity>
              )}
            </View>
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialContainer}>
            <Text style={styles.signInSubtext}>
              CONTINUE WITH A SOCIAL ACCOUNT
            </Text>
            <View style={styles.buttonSection}>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/facebook.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/twitter.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/reddit.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/google.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.appleContainer}>
              <TouchableOpacity style={styles.appleIcon}>
                <Image source={require('../../assets/apple.png')} />
                <Text> Apple ID</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Don’t have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageTitle: {
    alignSelf: 'center',
    marginTop: 16.46,
  },
  button: {
    backgroundColor: '#ED572F',
    width: '100%',
    height: 48,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: '#FBECE8',
    fontWeight: '700',
  },
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 30.51,
  },
  signInText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 26.5,
  },
  signInSubtext: {
    color: '#555555',
    fontSize: 13,
    marginBottom: 26,
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialContainer: {
    marginTop: 40,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appleContainer: {
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: '#FDFDFD',
    borderWidth: 1,
    borderColor: '#808080',
    width: 79.75,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleIcon: {
    width: '100%',
    backgroundColor: '#FDFDFD',
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 8,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  linkContainer: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
  },
  link: {
    color: '#ED572F',
    fontWeight: '700',
    fontSize: 17,
  },
  errorText: {
    color: 'red',
    paddingBottom: 20,
  },
});
