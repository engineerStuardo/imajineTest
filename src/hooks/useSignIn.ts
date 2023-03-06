import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  WelcomeHome: undefined;
};

export const useSignIn = () => {
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

  return {
    email,
    setEmail,
    errors,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handlePress,
  };
};
