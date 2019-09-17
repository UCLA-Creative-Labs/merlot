import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import TeamComponent from '~/src/components/TeamComponent.js';
import SEO from '~/src/components/monads/seo';

function Team({ data }) {
  console.log(data);
  const getExecBoard = data.allContentfulTeamMembers.edges.map(edge => {
    // console.log(node);
    return (
      <TeamComponent
        key={edge.node.name}
        firstname={edge.node.name}
        lastname={edge.node.name}
        url={edge.node.photo.file.url}
      />
    );
  });
  console.log(data, data.allContentfulTeamMembers.edges, getExecBoard);

  return (
    <Layout>
      <div className='splash_text centered'>
        <h1>The Team</h1>
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

export const query = graphql`
  query TeamQuery {
    allContentfulTeamMembers {
      edges {
        node {
          name
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

export default Team;
