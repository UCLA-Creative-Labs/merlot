import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../../scss/main.scss';

// const header = {
//   background: `#fff3d9`,
//   color: `#1f4a74`,
//   marginBottom: `1.45rem`,
// };

// const headerContent = {
//   margin: `0 auto`,
//   maxWidth: 960,
//   padding: `1.45rem 1.0875rem`,
// };

// const headerLink = {
//   color: `white`,
//   textDecoration: `none`,
// };

// const styles = {
//   header,
//   headerContent,
//   headerLink,
// };

// const Header = ({ siteTitle }) => (
//   <header class='header'>
//     <div css={styles.headerContent}>
//       <h1 style={{ margin: 0 }}>
//         <Link to='/' css={styles.headerLink}>
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// );

const Header = ({ siteTitle }) => (
  <header className='header'>
    <div className='headerContent'>
      <h1>
        <Link to='/' className='headerLink' id='logoType'>
          {siteTitle}
        </Link>
      </h1>

      <div className='navBar'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/projects/'>Projects</Link>
            </li>
            <li>
              <Link to='/team/'>Team</Link>
            </li>
            <li>
              <Link to='/events/'>Events</Link>
            </li>
            <li>
              <Link to='/alumni/'>Alumni</Link>
            </li>
            <li>
              <Link to='/apply/'>Apply</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
