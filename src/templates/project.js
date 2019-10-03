import { Link, graphql } from 'gatsby';
import React from 'react';
import '../scss/main.scss';
import Layout from '~/src/components/monads/layout';
import Header from '~/src/components/monads/header';
import Footer from '~/src/components/monads/footer';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

function ProjectModalComponent({ data }) {
  console.log(data);
  function getContent() {
    return (
      <div className='project_content'>
        <div className='project_img'>
          <img src={data.contentfulProjects.photo.file.url} />
        </div>
        <div className='project_text'>
          <h1>{data.contentfulProjects.projectTitle}</h1>
        </div>
      </div>
    );
  }

  return (
    <ModalRoutingContext>
      {({ modal, closeTo }) => (
        <div>
          {modal ? <div /> : <Header siteTitle='Creative Labs' />}
          {getContent()}
          {modal ? <div /> : <Footer />}
        </div>
      )}
    </ModalRoutingContext>
  );
}

export const query = graphql`
  query($id: String!) {
    contentfulProjects(id: { eq: $id }) {
      id
      slug
      projectTitle
      photo {
        __typename
        title
        file {
          url
        }
      }
    }
  }
`;
export default ProjectModalComponent;

// contentfulProject(id: { eq: $id }) {

//     }
