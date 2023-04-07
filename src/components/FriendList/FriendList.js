import './FriendListItem.css';
import PropTypes from 'prop-types';


const FriendListItem = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(data => {
      return (
        <li className="friend-list__item" key={data.id}>
          <span className={data.isOnline ? 'online' : 'status'}></span>
          <img
            className="avatar"
            src={data.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{data.name}</p>
        </li>
      );
    })}
  </ul>
);


FriendListItem.propTypes = {
  friends: PropTypes.array,
};

export default FriendListItem;
