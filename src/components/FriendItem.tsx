import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Friend {
  id: number;
  imgSrc: any;
  username: string;
  selected: boolean;
}

interface Props {
  item: Friend;
  index: number;
  setFriendListFiltered: React.Dispatch<React.SetStateAction<Friend[]>>;
  friendListFiltered: Friend[];
}

export const FriendItem = ({
  item,
  index,
  setFriendListFiltered,
  friendListFiltered,
}: Props) => (
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
);

const styles = StyleSheet.create({
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
