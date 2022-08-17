import type { NextPage } from 'next';
import Head from 'next/head';
import { About, Hero, Navbar } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Refaat Bitar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container font-body mx-auto min-h-full">
        <Navbar />
        <div className="px-6 lg:px-12">
          <Hero />
          <About />
        </div>
      </main>
    </>
  );
};

export default Home;
