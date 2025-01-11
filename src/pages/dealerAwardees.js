import React from "react"
import SEO from "../components/seo"
import "./awardees.css"
import logo from "../images/logo.png"

const DealerAwardees = () => {
  const awardees = [
    "Edmund Ackell",
    "Carleena Michelle Deforges",
    "Chloe Scharf",
    "Jayden Ainley",
    "Sophia DePaul",
    "Kali Siembor",
    "Emersen Berndt",
    "Avarie Goodwin",
    "JJ Vander Loop",
    "Brendan Birschbach",
    "Ty Hatler",
    "Rhea Warner",
    "Lily Boutelle",
    "Sydney Kokot",
    "Jenna Wildeman",
    "Reagan Broekhuizen",
    "Carollann McClelland",
    "Joshua Wilmsen",
    "Michael Ciolino",
    "Natalie Miles",
    "Evan Windorski",
    "London Phillippo",
  ];

  return (
    <div className="awardees">
      <img className="logo" src={logo} />
      <h2 className="awardee-header">We are pleased to announce the 2024 Brunswick Dealer Sons &amp; Daughters Scholarship Program Awardees</h2>
      <div className="awardee-grid">
        {awardees.map((awardee) => <span>{awardee}</span>)}
      </div>
    </div>
  );
};

export default DealerAwardees
