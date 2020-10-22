import React from 'react';

import { PageOverview } from '../layout';
import Item from '../partials/item';

import JSLogo from '../images/logos/javascriptLogo.svg';
import JavaLogo from '../images/logos/javaLogo.png';
import HTMLLogo from '../images/logos/html5Logo.svg';

// TODO: Place animated meters for expiernece
const Skillset = () => {
  return (
    <PageOverview header="Skillset">
      <h2>Languages</h2>
      <Item imgSrc={JSLogo} imgType="logo-small">
          <p>JavaScript (ES6) : Extensive Experience</p>
      </Item>
      <Item imgSrc={HTMLLogo} imgType="logo-small">
          <p>PHP : Extensive Experience</p>
      </Item>
      <Item imgSrc={HTMLLogo} imgType="logo-small">
          <p>C++ : Extensive Experience</p>
      </Item>
      <Item imgSrc={JavaLogo} imgType="logo-small">
          <p>Java : Proficient</p>
      </Item>
      <h2>JS Frameworks</h2>
      <Item>
          <p>React Native</p>
      </Item>
      <Item>
          <p>React.JS</p>
      </Item>
      <Item>
          <p>EJS</p>
      </Item>
      <Item>
          <p>Vue.JS</p>
      </Item>

    </PageOverview>
  );
}
export default Skillset;