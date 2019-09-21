import { Link } from 'gatsby';
import React from 'react';
import '../scss/main.scss';
import Layout from '~/src/components/monads/layout';

import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

function ProjectModalComponent(props) {
  return (
    <ModalRoutingContext>
      {({ modal, closeTo }) => (
        <div>
          {modal ? (
            <Link to='/projects/'>Close</Link>
          ) : (
            <header>
              <h1>Website Title</h1>
            </header>
          )}
          <Layout>
            <h2>Modal Page</h2>

            <Link to='/'>Go back to the homepage</Link>
          </Layout>
        </div>
      )}
    </ModalRoutingContext>
  );
}
export default ProjectModalComponent;
