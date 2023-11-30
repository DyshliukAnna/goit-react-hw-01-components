import PropTypes from 'prop-types';
import css from './Profile.module.css';


const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return <div className={css.profile}>
        <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p class={css.tag}>@{tag}</p>
    <p class={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span class={css.label}>Views</span>
      <span class={css.quantity}>{views}</span>
    </li>
    <li>
      <span class={css.label}>Likes</span>
      <span class={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    
}

export default Profile;