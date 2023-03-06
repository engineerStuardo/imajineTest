import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FormSection } from '../components/FormSection';
import { SocialIconSection } from '../components/SocialIconSection';

export const SignIn = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Image
          source={require('../../assets/socialNet.png')}
          style={styles.imageTitle}
        />
        <View style={styles.container}>
          <FormSection />
          <SocialIconSection />
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
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 30.51,
  },
  imageTitle: {
    alignSelf: 'center',
    marginTop: 16.46,
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
});
