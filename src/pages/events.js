import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import SEO from '~/src/components/monads/seo';
import '../scss/main.scss';

function EventsPage(props) {
  return (
    <Layout>
      <div className='splash_text'>
        <h1>Learn something new.</h1>
        <h3>
          No matter your major, you can be a part of the club. After applying you will recieve an email and a
          possible interview.
        </h3>
        <br />
      </div>
      <div className='eventsContent'>
        <h1>Upcoming Events</h1>
        <a href='https://www.facebook.com/events/405285813515890/'>
          <h3>
            <u>Friday 10/4: First General Meeting 🤠</u>
          </h3>
        </a>
        <h3>Wednesday 10/16: Careers in Design Student Panel</h3>
        <h3>Wednesday 10/23: Adobe XD: Case Study Workshop Series</h3>
      </div>
    </Layout>
  );
}
export default EventsPage;
