import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import SEO from '~/src/components/monads/seo';
import ApplyComponent from '../components/applying/position';
import '../scss/main.scss';

const descriptions = {
  1: 'As a project lead, you will be in charge of managing the overall direction of your project--don’t worry if you’re new to this, we will have a seminar just for you. ',
  2: 'As a project member, you will assist a lead with whatever tasks you are assigned. What you do depends on the specific  project you apply to.',
  3: 'Join the team behind everything! There are different categories you can apply to: business, design, dev, marketing, and more',
};

const links = {
  1: '',
  2: 'https://forms.gle/vGWgzdzuYfYWABCEA',
  3: '',
};

function ApplyPage(props) {
  return (
    <Layout>
      <div className='splash_text'>
        <h1>Join us.</h1>
        <h3>
          No matter your major, you can be a part of the club. After applying you will recieve an email and a
          possible interview.
        </h3>
        <br />
        <br />
        <h4>Project member apps are now open! Due on Tuesday, January 14 at 1:00 PM.</h4>
      </div>

      <div className='positionContainer'>
        <ApplyComponent
          title='Project Lead'
          index='1'
          description={descriptions[1]}
          key='1'
          appLink={links[1]}
        />
        <ApplyComponent
          title='Project Member'
          index='2'
          description={descriptions[2]}
          key='2'
          appLink={links[2]}
        />
        <ApplyComponent
          title='Board Member'
          index='3'
          description={descriptions[3]}
          key='3'
          appLink={links[3]}
        />
      </div>
    </Layout>
  );
}
export default ApplyPage;
