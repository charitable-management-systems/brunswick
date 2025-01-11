import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import "./header.css"

const Header = ({ application }) => (
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
      <a className="application" target="_blank" href={ application === 'dealers' ? 'https://apply-dealer.brunswickscholarships.com/application/login' : 'https://apply.brunswickscholarships.com/application/login'}>
        <div className="icon">
          Apply
        </div>
      </a>
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
