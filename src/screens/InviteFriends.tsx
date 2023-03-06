import { useState } from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';

const listItems = [
  {
    id: 0,
    imgSrc: require('../../assets/avatar.png'),
    username: 'Columbus',
    selected: false,
  },
  {
    id: 1,
    imgSrc: require('../../assets/avatar.png'),
    username: 'Test',
    selected: false,
  },
  {
    id: 2,
    imgSrc: require('../../assets/avatar.png'),
    username: 'Itastu',
    selected: false,
  },
  {
    id: 3,
    imgSrc: require('../../assets/avatar.png'),
    username: 'Alex',
    selected: false,
  },
  {
    id: 4,
    imgSrc: require('../../assets/avatar.png'),
    username: 'Prometheus',
    selected: false,
  },
  {
    id: 5,
    imgSrc: require('../../assets/avatar.png'),
    username: 'Isco',
    selected: false,
  },
  {
    id: 6,
    imgSrc: require('../../assets/avatar.png'),
    username: 'Text',
    selected: false,
  },
];

export const InviteFriends = () => {
  const [radioButtonSelected, setRadioButtonSelected] = useState(false);
  const [checkboxList, setCheckboxList] = useState(listItems);
  const [friendListFiltered, setFriendListFiltered] = useState(checkboxList);
  const [search, setSearch] = useState('');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Invite your friends</Text>
        <View style={styles.topContainer}>
          <View style={styles.checkboxContainer}>
            {radioButtonSelected ? (
              <TouchableOpacity
                onPress={() => {
                  setRadioButtonSelected(!radioButtonSelected);
                  setFriendListFiltered(
                    checkboxList.map(item => ({
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
                    checkboxList.map(item => ({
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
              (
              {friendListFiltered.filter(item => item.selected === true).length}
              )
            </Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={(text: string) => {
                setSearch(text);
                setFriendListFiltered(
                  checkboxList.filter(item =>
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
                setFriendListFiltered(checkboxList);
                setRadioButtonSelected(false);
              }}
            >
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => navigation.navigate('InviteFriends')}
          >
            <Text style={styles.buttonText}>Send invite</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={friendListFiltered}
        renderItem={({ item, index }) => (
          <View style={styles.cardContainer}>
            <Image source={item.imgSrc} />
            <Text style={styles.username}>{item.username}</Text>
            {item.selected ? (
              <TouchableOpacity
                onPress={() => {
                  setFriendListFiltered(
                    friendListFiltered.map(item =>
                      item.id === index
                        ? {
                            id: item.id,
                            imgSrc: item.imgSrc,
                            username: item.username,
                            selected: false,
                          }
                        : item
                    )
                  );
                }}
              >
                <Image source={require('../../assets/checkbox.png')} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setFriendListFiltered(
                    friendListFiltered.map(item => {
                      return item.id === index
                        ? {
                            id: item.id,
                            imgSrc: item.imgSrc,
                            username: item.username,
                            selected: true,
                          }
                        : item;
                    })
                  );
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    width: 22,
                    height: 22,
                    borderColor: 'gray',
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    backgroundColor: 'white',
    paddingBottom: 12,
    marginBottom: 11,
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
  cardContainer: {
    backgroundColor: 'white',
    marginTop: 4,
    marginLeft: 20,
    marginRight: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 4.5,
    borderRadius: 4,
  },
  username: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 12,
    width: 222,
  },
});
