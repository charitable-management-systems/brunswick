import React from "react"
import SEO from "../components/seo"
import "./awardees.css"
import logo from "../images/logo.png"

const DealerAwardees = () => {
  const awardees = [
    "Emma Archbold",
    "Rachel Gallegos",
    "Brooke McCarthy",
    "Samantha Benish",
    "John Hansen",
    "Sara McCormack",
    "Evan Blunt",
    "Braden Herendeen",
    "Natalie Newcombe",
    "Carley Broekhuizen",
    "Anna Huggins",
    "McKenna Reedy",
    "Mia Emberson",
    "April Knight",
    "Elena Uicker",
    "Matilyn Flanagan",
    "Carling Massel",
    "Taylor Young",
    "Nadia Flynn"
  ]
  return (
    <div className="awardees">
      <img className="logo" src={logo} />
      <h2 className="awardee-header">We are pleased to announce the 2020 Brunswick Dealer Sons &amp; Daughters Scholarship Program Awardees</h2>
      <div className="awardee-grid">
        {awardees.map((awardee) => <span>{awardee}</span>)}
      </div>
    </div>
  );
};

export default DealerAwardees
