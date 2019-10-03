import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import TeamComponent from '~/src/components/team/TeamComponent.js';
import SEO from '~/src/components/monads/seo';

/*
function Team(props) {
    const data = props.data;
}
*/
function TeamPage({ data }) {
  console.log(data);
  const getExecBoard = data.allContentfulTeamMembers.edges.map(edge => {
    // console.log(node);
    return (
      <TeamComponent
        key={edge.node.name}
        name={edge.node.name}
        description={edge.node.description}
        url={edge.node.photo.file.url}
      />
    );
  });
  console.log(data, data.allContentfulTeamMembers.edges, getExecBoard);

  return (
    <Layout>
      <div className='splash_text '>
        <h1>Team.</h1>
        <h3>Meet the amazing crew working backstage to make everything Creative Labs does possible. </h3>
      </div>

      <div className='content'>
        <div className='team_executive'>
          <h2>Executive Board</h2>
          <div className='team_container'>{getExecBoard}</div>
        </div>
        <div className='team_board marginTop40'>
          <h2>Board</h2>
        </div>
      </div>
    </Layout>
  );
}

// API call to fetch data
export const query = graphql`
  query TeamQuery {
    allContentfulTeamMembers {
      edges {
        node {
          name
          description
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

export default TeamPage;
