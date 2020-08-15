import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import { Menu } from 'grommet-icons';
import "./header.css"

const Header = ({ siteTitle, onMenuClick }) => (
<>
  <header className="header">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img className="logo" src={logo} />
      </Link>
      <div className="icon" onClick={onMenuClick}>
        Apply
      </div>
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  onMenuClick: PropTypes.func
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
