import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import ProjectQuarter from '~/src/components/projects/ProjectQuarter.js';
import ProjectQuarterSelector from '~/src/components/projects/ProjectQuarterSelector.js';

import SEO from '~/src/components/monads/seo';

function ProjectsPage({ data }) {
  const [selectState, setSelectState] = React.useState('spring2019');

  const quarters = { spring2019: 'Spring 2019', winter2019: 'Winter 2019' };

  return (
    <Layout>
      <div className='splash_text'>
        <h1>We make things.</h1>
        <br />
        <h3>We thrive on creativity — check out the drip our community has created.</h3>
      </div>

      <div>
        <ProjectQuarterSelector
          quarters={quarters}
          selectedValue={selectState}
          setSelectedValue={setSelectState}
        />
      </div>
      <div>
        <ProjectQuarter
          quarter={selectState}
          projects={data.allContentfulProjects.edges.filter(edge => edge.node.projectQuarter === selectState)}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsQuery {
    allContentfulProjects {
      edges {
        node {
          id
          projectTitle
          projectQuarter
          description {
            json
          }
          photo {
            __typename
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
