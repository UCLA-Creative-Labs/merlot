import React from 'react';
import { Link } from 'gatsby';

import SEO from '~/src/components/monads/seo';

import '../scss/main.scss';
import '../scss/modules/temporary.scss';
import EggComponent from '../components/eggs/eggs.js';
import SpecialYolk from '../components/eggs/special.js';
import { navigate } from '@reach/router';
//import {withRouter, BrowserRouter} from "react-router-dom"

function Egg({ data }) {
  const egg = data.allSitePage.edges[0].node.context;
  console.log(egg.id);
  return (
    <div style={{ width: '100vw', height: '80vh' }}>
      <EggComponent egg={egg} />
      <SpecialYolk egg={egg} />
    </div>
  );
}
export default Egg;

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            level
            id
            title
            img
            caption
            password
            hint
            nextLevel
          }
        }
      }
    }
  }
`;
