import { SafeAreaView, StyleSheet } from 'react-native';
import { WelcomeHomeHeader } from '../components/WelcomeHomeHeader';
import { MainSection } from '../components/WelcomeHomeMainSection';

export const WelcomeHome = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <WelcomeHomeHeader />
      <MainSection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
});
