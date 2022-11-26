import Profile from '../Profile/Profile';
import user from '../../user';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        imageUrl={user.avatar}
        user={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      ;
    </Container>
  );
}
