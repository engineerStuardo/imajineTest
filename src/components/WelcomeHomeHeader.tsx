import { Image, StyleSheet, View } from 'react-native';

export const WelcomeHomeHeader = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 64,
    alignItems: 'center',
    paddingRight: 21,
    paddingLeft: 21,
  },
  imageTitle: {
    width: 118.78,
    height: 14.39,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 26.62,
  },
});
