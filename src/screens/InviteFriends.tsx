import { useState } from 'react';
import { FlatList } from 'react-native';
import { listItems } from '../lib/friendList';
import { TopSection } from '../components/InviteFriendsTopSection';
import { FriendItem } from '../components/FriendItem';

export const InviteFriends = () => {
  const [radioButtonSelected, setRadioButtonSelected] = useState(false);
  const [friendsList] = useState(listItems);
  const [friendListFiltered, setFriendListFiltered] = useState(friendsList);
  const [search, setSearch] = useState('');

  return (
    <>
      <TopSection
        radioButtonSelected={radioButtonSelected}
        setRadioButtonSelected={setRadioButtonSelected}
        setFriendListFiltered={setFriendListFiltered}
        friendsList={friendsList}
        friendListFiltered={friendListFiltered}
        search={search}
        setSearch={setSearch}
      />
      <FlatList
        data={friendListFiltered}
        renderItem={({ item, index }) => (
          <FriendItem
            item={item}
            index={index}
            setFriendListFiltered={setFriendListFiltered}
            friendListFiltered={friendListFiltered}
          />
        )}
      />
    </>
  );
};
