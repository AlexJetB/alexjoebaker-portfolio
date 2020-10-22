import React from 'react';

import { PageOverview } from '../layout';
import Item from '../partials/item';
import profileImg from '../images/profile.png';
import github_logo from '../images/GitHub-Mark-32px.png';

const Home = () => {
  return (
    <PageOverview header="Alexander J. Baker">  
      <Item imgSrc={profileImg} imgType="profileImg">
        <div>
          Welcome to my personal Portfolio! <br />
        <br />
          I am an aspiring web engineer from Provo, UT with a primary interest in data collection and analysis. I also 
          have an eye for user experience (application layout), and am hoping to develope this skill more over time. <br />
        <br />
          In fact, this portfolio was written mostly from scratch using ReactJS! Feel free to take a look at the sourcecode in 
          the link below! <br />
        <br /> 
          <img src={github_logo}/><a href="https://github.com/AlexJetB/alexjoebaker-portfolio.git">github.com/AlexJetB/alexjoebaker-portfolio.git</a>
        </div>
      </Item>
    </PageOverview>
  )
};

export default Home;