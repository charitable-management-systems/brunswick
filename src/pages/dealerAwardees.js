import React from "react"
import SEO from "../components/seo"
import "./awardees.css"
import logo from "../images/logo.png"

const DealerAwardees = () => {
  const awardees = [
    "Savannah Adamski",
    "Julia Ellis",
    "McKenna Reedy",
    "Hannah Altman",
    "Olivia Francisco",
    "Chloe Scharf",
    "Ellyson Bradford",
    "Rachel Gallegos",
    "Kali Siembor",
    "Carley Broekhuizen",
    "Victor Gelfuso",
    "Jenna Taylor",
    "Reagan Broekhuizen",
    "Ryan Hazelton",
    "Kelsie Vann",
    "Triton Chandler",
    "Cassidy Maneval",
    "Tabitha Varnell",
    "Michael Ciolino",
    "Carling Massel",
    "Rhea Warner",
    "Maria Dehn",
    "Cheyanne Mihalinec",
    "Matthew Watts",
    "",
    "Payton Neubauer",
    "",
  ]
  return (
    <div className="awardees">
      <img className="logo" src={logo} />
      <h2 className="awardee-header">We are pleased to announce the 2022 Brunswick Dealer Sons &amp; Daughters Scholarship Program Awardees</h2>
      <div className="awardee-grid">
        {awardees.map((awardee) => <span>{awardee}</span>)}
      </div>
    </div>
  );
};

export default DealerAwardees
