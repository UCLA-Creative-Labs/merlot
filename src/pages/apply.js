import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import SEO from '~/src/components/monads/seo';
import PositionComponent from '../components/applying/position';
import '../scss/main.scss';

function ApplyPage(props) {
  return (
    <Layout>
      <div className='splash_text'>
        <h1>Join us.</h1>
        <h3>
          No matter your major, you can be a part of the club. After applying you will recieve an email and a
          possible interview.
        </h3>
      </div>
      <div className='positionContainer'>
        <div className='container'>
          
          
            <div className='projectLead'>
            <img className="projectLeadBG" src= {require('../images/circles.png')}></img>
            <PositionComponent 
              title='Project Lead'
              deadline='September 27'
              description='As a project lead, you will be in charge of managing the overall direction of your project--don’t worry if you’re new to this, we will have a seminar just for you. '
              appLink = "https://tinyurl.com/y3lavrw9"

            />
            </div>

          
          
          
          <div className='projectMember'>
            <img className="projectMemberBG" src= {require('../images/cylinders.png')}></img>
            <PositionComponent
              title='Project Member'
              deadline='September 27'
              description='As a project member, you will assist a lead with whatever tasks you are assigned. What you do depends on the specific  project you apply to.'
              appLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </div>

          <div className='boardMember'>
            <img className="boardMemberBG" src= {require('../images/stars.png')}></img>
            <PositionComponent
              title='Board Member'
              deadline='September 27'
              description='Join the team behind everything! There are different categories you can apply to: business, design, dev, marketing,, idk what else sorry omf'
              appLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ApplyPage;
