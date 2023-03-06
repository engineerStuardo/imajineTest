import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export type RootStackParamList = {
  FinalScreen: {
    friends: { id: number; imgSrc: any; username: string; selected: boolean }[];
  };
};

interface Friend {
  id: number;
  imgSrc: any;
  username: string;
  selected: boolean;
}

interface Props {
  radioButtonSelected: boolean;
  setRadioButtonSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setFriendListFiltered: React.Dispatch<React.SetStateAction<Friend[]>>;
  friendsList: Friend[];
  friendListFiltered: Friend[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const TopSection = ({
  radioButtonSelected,
  setRadioButtonSelected,
  setFriendListFiltered,
  friendsList,
  friendListFiltered,
  search,
  setSearch,
}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invite your friends</Text>
      <View style={styles.topContainer}>
        <View style={styles.checkboxContainer}>
          {radioButtonSelected ? (
            <TouchableOpacity
              onPress={() => {
                setRadioButtonSelected(!radioButtonSelected);
                setFriendListFiltered(
                  friendsList.map(item => ({
                    id: item.id,
                    imgSrc: item.imgSrc,
                    username: item.username,
                    selected: false,
                  }))
                );
              }}
            >
              <Image source={require('../../assets/radioButtonIcon.png')} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setRadioButtonSelected(!radioButtonSelected);
                setFriendListFiltered(
                  friendsList.map(item => ({
                    id: item.id,
                    imgSrc: item.imgSrc,
                    username: item.username,
                    selected: true,
                  }))
                );
              }}
            >
              <View
                style={{
                  height: 22,
                  width: 22,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.selectAllText}>Select all</Text>
          <Text style={styles.selectAllText}>
            ({friendListFiltered.filter(item => item.selected === true).length})
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={(text: string) => {
              setSearch(text);
              setFriendListFiltered(
                friendsList.filter(item =>
                  item.username.toLowerCase().includes(text.toLowerCase())
                )
              );
            }}
            value={search}
            placeholder='Search'
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => {
              setSearch('');
              setFriendListFiltered(friendsList);
              setRadioButtonSelected(false);
            }}
          >
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('FinalScreen', {
              friends: friendListFiltered.filter(
                item => item.selected === true
              ),
            })
          }
        >
          <Text style={styles.buttonText}>Send invite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 12,
    marginBottom: 11,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#808080',
    marginTop: 8,
    marginLeft: 16,
    marginBottom: 25,
  },
  topContainer: {
    marginRight: 28,
    marginLeft: 28,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  selectAllText: {
    fontSize: 16,
    marginLeft: 13,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cancel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ED572F',
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 247,
    marginRight: 20.5,
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
});
