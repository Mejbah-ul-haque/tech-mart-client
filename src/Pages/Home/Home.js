import React from 'react';
import FontEnds from '../FrontEnd/FontEnds';
import Children from '../Kids/Children';
import Services from '../Service/Services';
import Banner from './Banner';
import Kids from './Kids';
import Stat from './Stat';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Kids></Kids>
      <Children></Children>
      <FontEnds></FontEnds>
      <Stat></Stat>
    </div>
  );
};

export default Home;