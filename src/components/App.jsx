import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics"
import FriendList from "./FriendList/FriendList"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import user from '../../src/user.json'
import data from "../../src/data.json"
import friends from "../../src/friends.json"
import transactions from "../../src/transactions.json"
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
      <Statistics stats={data} />
      <FriendList friends={friends} />
      {/* <FriendList
      avatar={friends.avatar}
  name={friends.name}
  isOnline={friends.isOnline}
        id={friends.id}
      /> */}
      <TransactionHistory items={transactions} />
      {/* id = {transactions.id}
      type = {transactions.type}
      amount = {transactions.amount}
      currency ={ transactions.currency} */}
    </div>
  );
};
