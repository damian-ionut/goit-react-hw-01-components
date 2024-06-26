import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transactions/TransactionsList';

import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};