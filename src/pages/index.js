import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import SEO from '~/src/components/monads/seo';
import '../scss/main.scss';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`creative`, `labs`, `website`, `ucla`, `design`]} />
    <div class='home_description'>
      <h2>Bring your ideas to life.</h2>
      <h3 class='marginTop20'>
        Creative Labs seeks to empower students through innovation and build community on campus. <br />
        By creating a collaborative environment, we bring together passionate students from a variety of
        backgrounds to work on impactful projects and support students in their creative endeavors.
      </h3>
    </div>

    <div class='home_summaries' />
  </Layout>
);

export default IndexPage;
