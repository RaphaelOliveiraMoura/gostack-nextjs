import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div>Hello World</div>
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </>
);

export default withAnalytics()(Home);