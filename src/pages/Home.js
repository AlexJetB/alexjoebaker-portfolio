import React from 'react';

import { PageOverview } from '../layout';
import profileImg from '../images/profile.png';

const Home = () => {
  return (
    <PageOverview profileImgSrc={profileImg} header="Alex Baker">
      <div>
      Welcome to my personal Portfolio! <br />
      <br />
      I am an aspiring web engineer from Provo, UT with a primary interest in data collection and analysis. I also have an eye for 
      user experience (application layout), and am hoping to develope this skill more over time. <br />
      <br />
      In fact, this portfolio was written mostly from scratch using ReactJS! Feel free to take a look at the sourcecode in the link below!
      <br />
      </div>
    </PageOverview>
  )
};

export default Home;