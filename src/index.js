import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from '../src/user';

const profile = (
  <div class="profile">
    <div class="description">
      <img
        src={user.avatar}
        alt="User avatar"
        class="avatar"
        width="150"
        height="150"
      />
      <p class="name">{user.username}</p>
      <p class="tag">{user.tag}</p>
      <p class="location">{user.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{user.stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{user.stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(profile);

//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
