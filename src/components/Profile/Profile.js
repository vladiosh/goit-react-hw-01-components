import PropTypes from 'prop-types';

export default function Profile({
  imageUrl,
  user,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={imageUrl}
          alt="User avatar"
          className="avatar"
          width="150"
          height="150"
        />
        <p className="name">{user}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
