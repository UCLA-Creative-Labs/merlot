import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import SEO from '~/src/components/monads/seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`creative`, `labs`, `website`]} />
    <h1>Creative Labs</h1>
    <Link to='/page-2/'>Go to page 2</Link>
  </Layout>
);

export default IndexPage;
