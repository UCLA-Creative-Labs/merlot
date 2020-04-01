import React from 'react';

import Layout from '../components/monads/layout';
import SEO from '../components/monads/seo';
import { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

// export default NotFoundPage;

export default () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return null;
}