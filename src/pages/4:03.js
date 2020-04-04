import React from 'react';
import { Link } from 'gatsby';

import SEO from '~/src/components/monads/seo';

import '../scss/main.scss';
import '../scss/modules/temporary.scss';

import arjun from '~/static/arjun.jpg';
import bryan from '~/static/bryan.png';

const proj = require('../temporary/data/projects.json')[0];

function Meme() {
  return (
      <Link to='/'>
    <div style={{ width: '100vw', height: '100vh' }}>
      <div>
        <img style={{ float: 'left', width: '10%', margin: '0px' }} src={arjun}></img>
        <img style={{ float: 'right', width: '10%', margin: '0px' }} src={bryan}></img>
        <br />
        <p style={{ float: 'left' }}>this beautiful man is arjun</p>
        <p style={{ float: 'right' }}>this wonderful man is bryan</p>
      </div>
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
          <h3> who did this</h3>
          <p>{proj.leads.join(', ')}</p>
          <h3> what </h3>
          <p style={{ textAlign: 'center' }}>{proj.about}</p>
          <br />
          <p style={{ textAlign: 'center' }}>
            <b>Mitochondria are known as the powerhouses of the cell.</b> They are organelles that act like a
            digestive system which takes in nutrients, breaks them down, and creates energy rich molecules for
            the cell. The biochemical processes of the cell are known as cellular respiration. Many of the
            reactions involved in cellular respiration happen in the mitochondria. Mitochondria are the
            organelles that keep the cell full of energy.
          </p>
          <h3> need </h3>
          <ul>
            {proj.positions.map(need => (
              <li>{need}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
</Link>
  );
}

export default Meme;
