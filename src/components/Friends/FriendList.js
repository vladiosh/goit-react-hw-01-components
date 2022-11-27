import PropTypes from 'prop-types';
import Friends from './Friends';
import { List } from './Friends.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <Friends key={friend.id} friend={friend} />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
