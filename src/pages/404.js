import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/monads/layout';
import SEO from '../components/monads/seo';

export default () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return null;
};
