import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import SEO from '~/src/components/monads/seo';

import '../scss/main.scss';

function ProjectDescription({ data }) {
  const proj = data.allSitePage.edges[0].node.context;
  console.log(data);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
      <div
        style={{
          width: 'auto',
          height: '600px',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          'text-align': 'center',
        }}
      >
        <SEO
          title={proj.name}
          keywords={[`creative`, `labs`, `website`, `ucla`, `design`, `projects`, proj.name]}
        />
        <h1>{proj.name}</h1>
        <h3>
          <b>leads</b>
        </h3>
        <p>{proj.leads.join(', ')}</p>
        <h3>
          <b>what</b>
        </h3>
        <p>{proj.about}</p>
        <h3>
          <b>need</b>
        </h3>
        <ul>
          {proj.positions.map(need => (
            <li>{need}</li>
          ))}
        </ul>
        <br />
        <p>apply here</p>
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
          }
        }
      }
    }
  }
`;
