import Friends from './Friends';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <Friends key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
