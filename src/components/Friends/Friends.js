import PropTypes from 'prop-types';
import { Avatar, Item, Name, Status } from './Friends.styled';

export default function Friends({ friend: { isOnline, avatar, name } }) {
  return (
    <Item>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

Friends.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  }).isRequired,
};
