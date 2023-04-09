import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, avatar, isOnline, name }) => {
      return (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        ></FriendListItem>
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
