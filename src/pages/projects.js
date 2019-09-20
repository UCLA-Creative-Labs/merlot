import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import ProjectQuarter from '~/src/components/projects/ProjectQuarter.js';
import ProjectQuarterSelector from '~/src/components/projects/ProjectQuarterSelector.js';

import SEO from '~/src/components/monads/seo';

function ProjectsPage({ data }) {
  return (
    <Layout>
      <div className='splash_text'>
        <h1>We make things.</h1>
        <h3>We thrive on creativity — check out the drip our community has created.</h3>
      </div>
      <div>
        <ProjectQuarterSelector />
      </div>
      <div>
        <ProjectQuarter quarter='Spring 2019' />
      </div>
    </Layout>
  );
}

// export const query = graphql`
//   query ProjectsQuery {
//     allContentfulProjects {
//       edges {
//         node {
//           name
//           photo {
//             __typename
//             title
//             file {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default ProjectsPage;
