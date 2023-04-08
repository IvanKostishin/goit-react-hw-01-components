import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(data => {
      return (
        <FriendListItem
          key={data.id}
          avatar={data.avatar}
          isOnline={data.isOnline}
          id={data.id}
          name={data.name}
        ></FriendListItem>
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
