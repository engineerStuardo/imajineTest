import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export type RootStackParamList = {
  InviteFriends: undefined;
};

export const WelcomeHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.menuContainer}>
        <Image
          source={require('../../assets/socialNet.png')}
          style={styles.imageTitle}
        />
        <View style={styles.iconsContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/search.png')}
          />
          <Image
            style={styles.icon}
            source={require('../../assets/notification.png')}
          />
          <Image source={require('../../assets/menu.png')} />
        </View>
      </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginRight: 16,
    marginLeft: 16,
  },
  imageTitle: {
    width: 118.78,
    height: 14.39,
  },
  menuContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 64,
    alignItems: 'center',
    paddingRight: 21,
    paddingLeft: 21,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 26.62,
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
});
