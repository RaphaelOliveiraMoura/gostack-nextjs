import React from 'react';
import axios from 'axios';

const User = ({ users }) => (
  <div>
    {users.map(user => (
      <li key={user.id}>{user.login}</li>
    ))}
  </div>
);

User.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  );

  return { users: response.data };
};

export default User;
