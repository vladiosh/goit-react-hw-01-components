import Profile from './Profile/Profile';
import user from '../user';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.app}>
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
