import React from 'react';
import { Link, navigate } from 'gatsby';
import Typist from 'react-typist';

import SEO from '~/src/components/monads/seo';

import data from '~/src/temporary/data/words.json';
import '../scss/main.scss';

// export default IndexPage;

// function TypistGenerator(){
//   let i = Math.floor(Math.random() * a.data.length);
//   return(
//     <>
//       <Typist.Delay ms={500}/>
//       <a href='https://forms.gle/C275gugRpRDbVxQN9'>
//         <u>{a.data[i].word}</u>
//       </a>
//       <Typist.Backspace count={a.data[i].count}/>
//     </>
//   );
// }

function Home() {
  var ReactRotatingText = require('react-rotating-text');
  const a = { data };
  console.log(a.data);
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
      <SEO title='Home' keywords={[`creative`, `labs`, `website`, `ucla`, `design`]} />
      <div
        style={{
          width: '100vw',
          height: '25%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          'text-align': 'center',
        }}
      >
        <h3>
          we're back!
          <br />
          <Typist cursor={{show: false}}>
            <Typist.Delay ms={500}/>
            <span>apply to our projects <ReactRotatingText cursor={false} items={a.data} /> </span>
          </Typist>
        </h3>
      </div>
    </div>
  );
}

export default Home;