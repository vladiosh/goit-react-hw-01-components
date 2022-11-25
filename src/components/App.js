import Profile from './Profile';
import user from '../user';

export default function App() {
  return (
    <div>
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
    </div>
  );
}
