import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import user from '../../data/user.json';
import data from '../../data/data.json';
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

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </Container>
  );
}
