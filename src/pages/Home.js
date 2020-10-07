import React from 'react';

import { PageOverview } from '../layout';
import profileImg from '../images/profile.png';

const Home = () => {
  return (
    <PageOverview profileImgSrc={profileImg} header="Alex Baker">Welcome to my personal Portfolio!</PageOverview>
  )
};

export default Home;