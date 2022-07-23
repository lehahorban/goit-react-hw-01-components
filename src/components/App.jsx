import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics"
import FriendList from "./FriendList/FriendList"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import user from './Profile/user'
import data from "./Statistics/data"
import friends from "./FriendList/friends"
import transactions from "./TransactionHistory/transactions"
export const App = () => {
  return (
    <div className="App">
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />      
      <FriendList friends={friends} />      
      <TransactionHistory items={transactions} />
     
    </div>
  );
};
