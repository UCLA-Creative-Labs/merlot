import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const header = {
  background: `rebeccapurple`,
  marginBottom: `1.45rem`,
}

const headerContent = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `1.45rem 1.0875rem`,
}

const headerLink = {
  color: `white`,
  textDecoration: `none`,
}

const styles = {
  header,
  headerContent,
  headerLink,
}

const Header = ({ siteTitle }) => (
  <header css={styles.header}>
    <div css={styles.headerContent}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" css={styles.headerLink}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
