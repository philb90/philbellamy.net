import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <div className='prose max-w-none'>
        <p>👋 Welcome to my website!</p>
        <p>
          I'm a full-stack web developer, currently working at FATMAP as well as
          running my side-hussle Summit Bag.
        </p>
        <p>
          I'll be honest - my main motivation for putting this site live is to
          test the NextJS / TypeScript / Tailwind CSS stack, so you won't find a
          whole load of interesting stuff here right now.
        </p>
      </div>
    </>
  );
};

export default Home;
