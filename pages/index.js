import Head from 'next/head';

import { Contacts } from '@components/Contacts';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Contacts</title>
      </Head>

      <Contacts />
    </>
  );
}
