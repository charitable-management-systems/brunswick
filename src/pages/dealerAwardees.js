import React from "react"
import SEO from "../components/seo"
import "./awardees.css"
import logo from "../images/logo.png"

const DealerAwardees = () => {
  const awardees = [
    "Angelica Bochurka",
    "John Hansen",
    "Lily Perry",
    "Dawson Cook",
    "Ryan Hazelton",
    "Drew Polk",
    "Brennen David",
    "Reinhold Hekeler, III",
    "Fayth Rakes",
    "Cameron Evans",
    "Braden Herendeen",
    "Raylee Rich",
    "Rachel Gallegos",
    "Kristen Houser",
    "Chloe Scharf",
    "Olivia Golden",
    "Leiloni James",
    "Shannon Stevens",
    "Katherine Gudzik",
    "Payton Neubauer",
    "Gabrielle Taylor",
  ]
  return (
    <div className="awardees">
      <img className="logo" src={logo} />
      <h2 className="awardee-header">We are pleased to announce the 2021 Brunswick Dealer Sons &amp; Daughters Scholarship Program Awardees</h2>
      <div className="awardee-grid">
        {awardees.map((awardee) => <span>{awardee}</span>)}
      </div>
    </div>
  );
};

export default DealerAwardees
