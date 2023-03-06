import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const SocialIconSection = () => {
  return (
    <View style={styles.socialContainer}>
      <Text style={styles.signInSubtext}>CONTINUE WITH A SOCIAL ACCOUNT</Text>
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
  );
};

const styles = StyleSheet.create({
  socialContainer: {
    marginTop: 40,
  },
  signInSubtext: {
    color: '#555555',
    fontSize: 13,
    marginBottom: 26,
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
});
