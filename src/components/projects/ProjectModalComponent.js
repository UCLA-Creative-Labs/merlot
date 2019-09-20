import { Link } from 'gatsby';
import React from 'react';
import '../../scss/projects.scss';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

function ProjectModalComponent(props) {
  return (
    <ModalRoutingContext>
      {({ modal, closeTo }) => (
        <div>
          {modal ? (
            <Link to='/'>Close</Link>
          ) : (
            <header>
              <h1>Website Title</h1>
            </header>
          )}

          <h2>Modal Page</h2>

          <Link to='/'>Go back to the homepage</Link>
        </div>
      )}
    </ModalRoutingContext>
  );
}
export default ProjectModalComponent;
