import React from 'react';
import { Link } from 'gatsby';

import SEO from '~/src/components/monads/seo';

import '../scss/main.scss';
import '../scss/modules/temporary.scss';

function Egg({ data }) {


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div
        style={{
          width: 'auto',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: '5%',
          margin: 'auto',
          'text-align': 'center',
        }}
      >
        <SEO
          title='egg'
          keywords={[`creative`, `labs`, `website`, `ucla`, `design`, `projects`]}
        />
      </div>
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
              name
          }
        }
      }
    }
  }
`;
