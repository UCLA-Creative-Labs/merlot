import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import SEO from '~/src/components/monads/seo';

import DescriptionComponent from '~/src/components/DescriptionComponent.js';
import '../scss/main.scss';
const descriptions = {
  Projects:
    "Each quarter, immerse yourself in creativity through quarter-long, hands-on team projects. In the past, they've included photography, sustainable bean bag chairs, web applications, as well as music compositions.",
  Workshops:
    'Attend our beginner-friendly workshops to learn a variety of new skills in a wide range of creative topics, including UX/UI, Illustrations, Podcasts, and more!',
  Events:
    'Come join us at our various events, from barbecue socials to speaker and networking events led by talented professionals from different creative industries.',
};
const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`creative`, `labs`, `website`, `ucla`, `design`]} />
    <div className='home content'>
      <h1>Bring your ideas to life.</h1>
      <h3 className='marginTop20'>
        Creative Labs seeks to empower students through innovation and build community on campus. We bring
        together passionate students from a variety of backgrounds to work on impactful projects and support
        students in their creative endeavors.
      </h3>
    </div>

    <div className='home_descriptions'>{console.log(descriptions)}</div>
  </Layout>
);

export default IndexPage;
