import React from 'react';
import Link from 'next/link';

const Home = () => (
  <>
    <div>Hello World</div>
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </>
);

export default Home;
