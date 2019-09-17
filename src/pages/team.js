import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import TeamComponent from '~/src/components/TeamComponent.js';
import SEO from '~/src/components/monads/seo';

class Team extends Component {
  render() {
    const execBoardList = [
      {
        firstname: 'Emmy',
        lastname: 'Cao',
        title: 'Director',
        description: '',
        website: '',
        twitter: '',
        linkedin: '',
        instagram: '',
      },
      {
        firstname: 'Justine',
        lastname: 'Du',
        title: 'Director',
        description: '',
        website: '',
        twitter: '',
        linkedin: '',
        instagram: '',
      },
    ];
    const getExecBoard = execBoardList.map((elem, index) => {
      return <TeamComponent firstname={elem.firstname} lastname={elem.lastname} title={elem.title} />;
    });
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
}

export default Team;
