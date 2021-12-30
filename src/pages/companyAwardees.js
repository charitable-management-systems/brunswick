import React from "react"
import SEO from "../components/seo"
import "./awardees.css"
import logo from "../images/logo.png"

const CompanyAwardees = () => {
	const awardees = [
		"Luca Andersen",
		"Jaden Gosse",
		"Rachel Nackers",
		"Grace Baker",
		"Jaden Hackbarth",
		"Cashel O’Connor",
		"Sebastian Barton",
		"Karl Hahn",
		"Luke Overton",
		"Julia Bettley",
		"Isabella Hanmann",
		"Justin Padron",
		"Mikayla Brainard",
		"Megan Henker",
		"Saira Perez-Rodriguez",
		"Matthew Bringle",
		"Andrea Hernandez-Gomez",
		"Thomas Pyle",
		"Alexia Brown",
		"Jayda Janeczko",
		"Seth Raber",
		"Sara Chemi",
		"Jaiden Kasaval",
		"Emma Reid",
		"Emily Cunningham",
		"Lindsey Keller",
		"Lana Rummel",
		"Alexander Dahl",
		"Benjamin Kopper",
		"Alexandria Trajkovski",
		"Sean Druck II",
		"Dallas Kreisa",
		"Alex Turner",
		"Alexis Evans",
		"Daunte Leiran",
		"Paige Vandegrift",
		"Mason Galler",
		"Cormac Madigan",
		"Grant Webb",
		"Jessica Glaszczak",
		"Grace Marchello",
		"Noah Wood",
		"",
		"Mario Cesar Moreno Melo",
		"",
	];

  return (
    <div className="awardees">
      <img className="logo" src={logo} />
      <h2 className="awardee-header">We are pleased to announce the 2021 Brunswick Company Sons &amp; Daughters Scholarship Program Awardees</h2>
      <div className="awardee-grid">
        {awardees.map((awardee) => <span>{awardee}</span>)}
      </div>
    </div>
  );
};

export default CompanyAwardees
