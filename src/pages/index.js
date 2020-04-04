import React from 'react';
import { Link, navigate } from 'gatsby';

import Layout from '~/src/components/monads/layout';
import SEO from '~/src/components/monads/seo';

import data from '~/src/temporary/data/projects.json';
import DescriptionComponent from '~/src/components/DescriptionComponent.js';
import '../scss/main.scss';
const descriptions = {
  Projects:
    "Each quarter, immerse yourself in creativity through quarter-long, hands-on, team projects. In the past, they've included photography, sustainable bean bag chairs, web applications, as well as music compositions.",
  Workshops:
    'Attend our beginner-friendly workshops to learn a variety of new skills in a wide range of creative topics, including UX/UI, Illustrations, Podcasts, and more!',
  Events:
    'Come join us at our various events, from barbecue socials to speaker and networking events led by talented professionals from different creative industries.',
};
function IndexPage(props) {
  return (
    <Layout>
      <SEO title='Home' keywords={[`creative`, `labs`, `website`, `ucla`, `design`]} />
      <div className='splash_text'>
        <h1>Bring your ideas to life.</h1>
        <a href='https://www.facebook.com/events/520866362172319/'>
          <h3 className='marginTop20'>
            <b>
              <u>🚨 Winter Demo Day is Friday Week 10 from 6-8PM! Click here to learn more.</u>
            </b>
          </h3>
        </a>
        <h3>
          Creative Labs seeks to empower students through innovation and build community on campus. We bring
          together passionate students from a variety of backgrounds to work on impactful projects and support
          students in their creative endeavors.
        </h3>
      </div>

      <div className='descriptions_container'>
        {Object.keys(descriptions).map((title, index) => {
          return (
            <DescriptionComponent title={title} index={index} description={descriptions[title]} key={index} />
          );
        })}
      </div>
    </Layout>
  );
}

// export default IndexPage;

function Home() {
  const a = { data };
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
      <SEO title='Home' keywords={[`creative`, `labs`, `website`, `ucla`, `design`]} />
      <div
        style={{
          width: '100vw',
          height: '85%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          'text-align': 'center',
        }}
      >
        <span className='hide'>
          <form
            className='meme'
            style={{ paddingBottom: '10px', display: 'inline-block' }}
            onSubmit={event => {
              event.preventDefault();
              if (event.target[0].value === '4:03') navigate('/4:03');
              else navigate('/');
            }}
          >
            <input placeholder='when was I born?' />
          </form>
        </span>
        <h3>
          we're back!
          <br />
          apply to our projects{' '}
          <a href='https://forms.gle/C275gugRpRDbVxQN9'>
            <u>here</u>
          </a>
        </h3>
        <div
          style={{
            marginTop: '32px',
            display: 'table',
            horizontalAlign: 'center',
          }}
        >
          {a.data.map((proj, index) => {
            if (proj.name != '4:03') {
              let link = '/projects/' + proj.id;
              const img = (
                <>
                  <img
                    className='gif'
                    src={proj.img}
                    onMouseOver={e => (e.currentTarget.style.opacity = '0')}
                    onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                  />
                  <img src={proj.alt} />
                </>
              );

              return (
                <>
                  <a id={proj.id} href={link}>
                    {img}
                  </a>
                  {index % 3 == 0 ? <br /> : null}
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
