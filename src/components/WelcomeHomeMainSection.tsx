import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type RootStackParamList = {
  InviteFriends: undefined;
};

export const MainSection = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.contentContainer}>
      <View>
        <Text style={styles.title}>Connect with your friends</Text>
        <Text style={styles.subTitle}>
          Invite your friends and grow your followers!
        </Text>
        <Image
          source={require('../../assets/inviteFriends.png')}
          style={styles.friendsImage}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('InviteFriends')}
      >
        <Text style={styles.buttonText}>Invite friends</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginRight: 16,
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    color: '#ED572F',
    fontWeight: '700',
    marginTop: 42,
    marginBottom: 36,
  },
  subTitle: {
    color: '#555555',
    fontSize: 16,
    fontWeight: '400',
  },
  friendsImage: {
    width: 343,
    height: 292,
    alignSelf: 'center',
    marginTop: 76,
  },
  button: {
    backgroundColor: '#ED572F',
    width: '100%',
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
