import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({friends }) => {
    return <ul className ={css.friendList}>
  {friends.map(({id, avatar, name, isOnline}) => <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}
</ul>
}
export default FriendList;
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
    })).isRequired
}