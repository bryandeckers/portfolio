import HomePage from "./HomePage";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home - Bryan Deckers',
}

const Home = () => {
  return (
    <HomePage />
  );
};

export default Home;
