/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import company_col_checklist from "../images/pdf/Company/College_Forms/College_Checklist.pdf"
import company_col_reference from "../images/pdf/Company/College_Forms/College_Reference_Form.pdf"
import company_col_transcript from "../images/pdf/Company/College_Forms/College_Transcript_Form.pdf"
import company_col_hs_fresh_transcript from "../images/pdf/Company/College_Forms/HS_Transcript_Form.pdf"
import company_col_employee from "../images/pdf/Company/College_Forms/Employee_Verification_Form.pdf"
import company_col_release from "../images/pdf/Company/College_Forms/Release_Form.pdf"
import company_hs_employee from "../images/pdf/Company/HS_Forms/Employee_Verification_Form.pdf"
import company_hs_checklist from "../images/pdf/Company/HS_Forms/HighSchool_Checklist.pdf"
import company_hs_reference from "../images/pdf/Company/HS_Forms/HighSchool_Reference_Form.pdf"
import company_hs_transcript from "../images/pdf/Company/HS_Forms/HS_Transcript_Form.pdf"
import company_hs_release from "../images/pdf/Company/HS_Forms/Release_Form.pdf"
import dealer_col_checklist from "../images/pdf/Dealer/College_Forms/College_Checklist.pdf"
import dealer_col_reference from "../images/pdf/Dealer/College_Forms/College_Reference_Form.pdf"
import dealer_col_transcript from "../images/pdf/Dealer/College_Forms/College_Transcript_Form.pdf"
import dealer_col_hs_fresh_transcript from "../images/pdf/Dealer/College_Forms/HS_Transcript_Form.pdf"
import dealer_col_employee from "../images/pdf/Dealer/College_Forms/Employee_Verification_Form.pdf"
import dealer_col_release from "../images/pdf/Dealer/College_Forms/Release_Form.pdf"
import dealer_hs_employee from "../images/pdf/Dealer/HS_Forms/Employee_Verification_Form.pdf"
import dealer_hs_checklist from "../images/pdf/Dealer/HS_Forms/HighSchool_Checklist.pdf"
import dealer_hs_reference from "../images/pdf/Dealer/HS_Forms/HighSchool_Reference_Form.pdf"
import dealer_hs_transcript from "../images/pdf/Dealer/HS_Forms/HS_Transcript_Form.pdf"
import dealer_hs_release from "../images/pdf/Dealer/HS_Forms/Release_Form.pdf"

import Header from "./header"
import "./layout.css"

const Layout = ({type, children }) => {
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

  const notOpen = () => alert('Applications will be accepted beginning January 10, 2022.')

  return (
    <div className="layout">
      <Header siteTitle={data.site.siteMetadata.title} onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
      <div>
        <div className={isMenuOpen ? 'menu menu--active' : 'menu'}>
          {type === 'company' ? (
            <>
            {/*<a className="application" target="_blank" href="https://apply.brunswickscholarships.com/application/login">Application</a> */}
              <a className="application" href="" onClick={notOpen}>Application</a>
              <span>Current High School Seniors</span>
              <a target="_blank" href={company_hs_checklist}>Check List</a>
              <a target="_blank" href={company_hs_transcript}>Transcript Form</a>
              <a target="_blank" href={company_hs_employee}>Employee Verification Form</a>
              <a target="_blank" href={company_hs_reference}>Reference Form</a>
              <a target="_blank" href={company_hs_release}>Release Form</a>
              <span>Current College Students</span>
              <a target="_blank" href={company_col_checklist}>Check List</a>
              <a target="_blank" href={company_col_transcript}>Transcript Form</a>
              <a target="_blank" href={company_col_employee}>Employee Verification Form</a>
              <a target="_blank" href={company_col_reference}>Reference Form</a>
              <a target="_blank" href={company_col_release}>Release Form</a>
              <a target="_blank" href={company_col_hs_fresh_transcript}>High School Transcript Form (freshmen only)</a>
            </>
          ) : (
            <>
              {/*<a className="application" target="_blank" href="https://apply.brunswickscholarships.com/application/login">Application</a> */}
              <a className="application" href="" onClick={notOpen}>Application</a>
              <span>Current High School Seniors</span>
              <a target="_blank" href={dealer_hs_checklist}>Check List</a>
              <a target="_blank" href={dealer_hs_transcript}>Transcript Form</a>
              <a target="_blank" href={dealer_hs_employee}>Employee Verification Form</a>
              <a target="_blank" href={dealer_hs_reference}>Reference Form</a>
              <a target="_blank" href={dealer_hs_release}>Release Form</a>
              <span>Current College Students</span>
              <a target="_blank" href={dealer_col_checklist}>Check List</a>
              <a target="_blank" href={dealer_col_transcript}>Transcript Form</a>
              <a target="_blank" href={dealer_col_employee}>Employee Verification Form</a>
              <a target="_blank" href={dealer_col_reference}>Reference Form</a>
              <a target="_blank" href={dealer_col_release}>Release Form</a>
              <a target="_blank" href={dealer_col_hs_fresh_transcript}>High School Transcript Form (freshmen only)</a>
            </>
          )}
        </div>
        <main className="main">{children}</main>
        <footer className="footer">
          <Link to={'/terms'}>Terms of Use</Link>
          <Link to={'/privacy'}>Privacy Policy</Link>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
