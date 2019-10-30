import React from 'react';
import axios from 'axios';

import Link from 'next/link';

const User = ({ users }) => (
  <div>
    {users.map(user => (
      <li key={user.id}>{user.login}</li>
    ))}

    <Link href="/">
      <a>Voltar</a>
    </Link>
  </div>
);

User.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  );

  console.log(response.data);

  return { users: response.data };
};

export default User;
