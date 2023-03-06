import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSignIn } from '../hooks/useSignIn';

export const FormSection = () => {
  const {
    email,
    setEmail,
    errors,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handlePress,
  } = useSignIn();
  return (
    <View>
      <Text style={styles.signInText}>Sign In</Text>
      <Text style={styles.signInSubtext}>SIGN IN WITH YOUR EMAIL ADDRESS</Text>
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
  );
};

const styles = StyleSheet.create({
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
  errorText: {
    color: 'red',
    paddingBottom: 20,
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
});
