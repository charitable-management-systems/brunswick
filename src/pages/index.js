import React from "react"
import { Link } from "gatsby"

import "./index.css"
import heroImg from "../images/hero.png";
import logo from "../images/logo.png";

const IndexPage = () => {
  return (
    <>
    <div className="landing-container">
      <div className="logo" style={{backgroundImage: `url(${logo})`}}>
      </div>
      <div className="Hero" style={{backgroundImage: `url(${heroImg})`}}>
        <div className="Hero-text">For more than 50 years, The Brunswick Foundation has supported causes and programs that complement the business interests of Brunswick Corporation and enhance the interest of the Company's employees and the communities in which they live and work. The Sons &amp; Daughters scholarship program provides annual scholarships to children of employees of Brunswick and to children of qualified Mercury Marine and Brunswick Boat Group dealer employees. The Foundation* is pleased to support these educational opportunities.</div>
      </div>
      <div className="apply">
        <div className="apply-section">
          <strong>Company Employees</strong>
          <p>Brunswick Employee Sons &amp; Daughters
          <br/>(Direct employees of Brunswick Corporation)</p>
          <p>Application period:<br/>January 10 – March 14, 2022 </p>
          <Link to="/companyAwardees">Awardees</Link>
          <Link to="/company">Learn more here</Link>
        </div>
        <div className="apply-section">
          <strong>Dealership Locations</strong>
          <p>Brunswick Dealer Sons &amp; Daughters
          <br/>(Selling Mercury Marine or Brunswick Boat Brands)</p>
          <p>Application period:<br/>January 10 – March 14, 2022</p>
          <Link to="/dealerAwardees">Awardees</Link>
          <Link to="/dealers">Learn more here</Link>
        </div>
      </div>
    </div>
    <footer className="footer">
      <Link to={'/terms'}>Terms of Use</Link>
      <Link to={'/privacy'}>Privacy Policy</Link>
      <p><sub>* In all non-U.S. locations, The Sons &amp; Daughters Scholarship Program is administered through Brunswick Corporation.</sub></p>
    </footer>
    </>
  )
}

export default IndexPage
