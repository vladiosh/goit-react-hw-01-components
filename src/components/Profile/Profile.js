import PropTypes from 'prop-types';

import {
  Card,
  Description,
  UserPhoto,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

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
    <Card>
      <Description>
        <UserPhoto src={imageUrl} alt="User avatar" width="150" height="150" />
        <UserName>{user}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <StatsList>
        <Stats>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Stats>
        <Stats>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Stats>
        <Stats>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Stats>
      </StatsList>
    </Card>
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
