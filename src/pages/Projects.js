import React from 'react';

import { PageOverview } from '../layout';
import Item from '../partials/item';

const Projects= () => {
  return (
    <PageOverview header="Projects">
      <Item>
        <li>Item 1</li>
      </Item>
      <Item>
        <li>Item 2</li>
      </Item>
    </PageOverview>
  )
}

export default Projects;