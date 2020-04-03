import React from 'react';
import { Link } from 'gatsby';

import SEO from '~/src/components/monads/seo';

import '../scss/main.scss';
import '../scss/modules/temporary.scss';

const proj = require('../temporary/data/projects.json')[0];

function Meme() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div
        class='meme'
        style={{
          width: 'auto',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: '5%',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <SEO
          title={proj.name}
          keywords={[`creative`, `labs`, `website`, `ucla`, `design`, `projects`, proj.name]}
        />
        <h3>
          <Link to='/'>return to home</Link>
        </h3>
        <div
          style={{
            paddingTop: '5%',
            paddingBottom: '2%',
          }}
        >
          <h1 className='bouns'>{proj.name}</h1>
          <h3> who </h3>
          <p>{proj.leads.join(', ')}</p>
          <h3> what </h3>
          <p style={{ textAlign: 'center' }}>{proj.about}</p>
          <h3> need </h3>
          <ul>
            {proj.positions.map(need => (
              <li>{need}</li>
            ))}
          </ul>
        </div>
        <h3>
          <a href={proj.application}>apply here</a>
        </h3>
      </div>
    </div>
  );
}

export default Meme;