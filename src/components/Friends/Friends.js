import PropTypes from 'prop-types';
import { Avatar, Item, Name, Status } from './Friends.styled';

export default function Friends({ friend: { isOnline, avatar, name } }) {
  return (
    <Item>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

Friends.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }).isRequired,
};
