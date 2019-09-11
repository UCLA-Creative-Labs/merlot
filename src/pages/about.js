import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import SEO from '~/src/components/monads/seo';
import '../scss/main.scss';

const AboutPage = () => (
  <Layout>
    <SEO title='Projects' />
    <h2>Hi from the second page</h2>
    <h3>Welcome to page 2</h3>
    <Link to='//'>Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
