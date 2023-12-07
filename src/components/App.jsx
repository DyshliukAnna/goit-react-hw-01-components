import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import dataUser from 'data/user.json';
import dataStats from 'data/data.json';
import dataFriends from 'data/friends.json';
import dataTransactions from 'data/transactions.json';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <Profile
        key={dataUser.tag}
        username={dataUser.username}
        tag={dataUser.tag}
        location={dataUser.location}
        avatar={dataUser.avatar}
        followers={dataUser.stats.followers}
        views={dataUser.stats.views}
        likes={dataUser.stats.views}
      />
      <Statistics title={dataStats.title} stats={dataStats} />
      <FriendList friends={dataFriends} />
      <TransactionHistory items={dataTransactions} />
    </div>
  );
};

export default App;
