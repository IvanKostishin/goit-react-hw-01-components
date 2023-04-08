import Profile from './Profile/Profile.js';
import Statistics from './Statistics/Statistics.js';
import TransactionHistory from './TransactionHistory/TransactionHistory.js';
import FriendList from './FriendList/FriendList.js';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendListItem/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
