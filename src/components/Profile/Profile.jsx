import React from 'react';
import user from '../../../src/user.json'

const userPtofile = user;
console.log(userPtofile)


function Profile({username, tag, location, avatar, stats}) {
   
    return  <div className="profile">
  <div class="description">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">{stats.followers}</span>
      <span className="quantity">1000</span>
    </li>
    <li>
      <span className="label">{stats.views}</span>
      <span className="quantity">2000</span>
    </li>
    <li>
      <span className="label">{stats.likes}</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
</div>
}


export default Profile