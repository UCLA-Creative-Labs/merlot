import React from 'react';
import { Link } from 'gatsby';

import SEO from '~/src/components/monads/seo';

import '../scss/main.scss';

function ProjectDescription({ data }) {
  const proj = data.allSitePage.edges[0].node.context;
  console.log(data);

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
          title={proj.name}
          keywords={[`creative`, `labs`, `website`, `ucla`, `design`, `projects`, proj.name]}
        />
        <h3>
          <Link to='/'>return to home</Link>
        </h3>
        <br />
        <h1>{proj.name}</h1>
        <h3> leads </h3>
        <p>{proj.leads.join(', ')}</p>
        <h3> what </h3>
        <p>{proj.about}</p>
        <h3> need </h3>
        <ul>
          {proj.positions.map(need => (
            <li>{need}</li>
          ))}
        </ul>
        <br />
        <h3>
          <a href={proj.application}>apply here</a>
        </h3>
      </div>
    </div>
  );
}

export default ProjectDescription;

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            leads
            about
            positions
            application
          }
        }
      }
    }
  }
`;
