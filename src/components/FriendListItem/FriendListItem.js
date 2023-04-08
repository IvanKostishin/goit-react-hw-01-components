import './FriendListItem.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name}) => (
  <li className="friend-list__item">
    <span className={isOnline ? 'online' : 'status'}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
