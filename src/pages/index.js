import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import SEO from '~/src/components/monads/seo';
// import HomeDescriptionComponent from '~src/components/HomeDescriptionComponent.js';
import '../scss/main.scss';

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

    <div className='home_summaries' />
  </Layout>
);

export default IndexPage;
