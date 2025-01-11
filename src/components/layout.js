/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ type, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const notOpen = () => alert('The application deadline has passed, please check back in mid-January 2024')

  return (
    <div className="layout">
      <Header application={type} />
      <main className="main">{children}</main>
      <footer className="footer">
        <Link to={'/terms'}>Terms of Use</Link>
        <Link to={'/privacy'}>Privacy Policy</Link>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
