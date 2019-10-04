import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import ProjectQuarter from '~/src/components/projects/ProjectQuarter.js';
import ProjectQuarterSelector from '~/src/components/projects/ProjectQuarterSelector.js';

import alumni from '~/src/images/alumni.jpg';

import SEO from '~/src/components/monads/seo';

function AlumniPage() {
  return (
    <Layout>
      <div className='splash_text'>
        <h1>Alumni.</h1>
        <br />
        <h3>EST.2016</h3>
      </div>
      <img src={alumni} width='100%' />
      <p>
        Creative labs was started as a place on campus where anyone interested in design or creative work
        could come together to learn new skills and work on projects together. It was the first creative
        community on campus.
      </p>
    </Layout>
  );
}

export default AlumniPage;
