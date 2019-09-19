import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import TeamComponent from '~/src/components/TeamComponent.js';
import SEO from '~/src/components/monads/seo';

function ProjectsPage(props) {
  console.log(props);
  return (
    <Layout>
      <div className='splash_text'>
        <h1>We make things.</h1>
        <h3>We thrive on creativity — check out the drip our community has created.</h3>
      </div>
    </Layout>
  );
}
export default ProjectsPage;
