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
        <a href='https://www.facebook.com/events/1021174994885372/'>
          <h3>
            <u>Friday 1/10: First General Meeting</u>
          </h3>
        </a>
      </div>
    </Layout>
  );
}
export default EventsPage;
