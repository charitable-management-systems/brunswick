import React from "react"
import SEO from "../components/seo"
import "./awardees.css"
import logo from "../images/logo.png"

const CompanyAwardees = () => {
	const awardees = [
		"Brooke Bayless",
		"Jessica Glaszczak",
		"Mario Cesar Moreno Melo",
		"Nevaeh Beeching",
		"Karl Hahn",
		"Paul Mundra",
		"Mikayla Cooper",
		"Harrison Hall",
		"Erik Nygaard",
		"Alexander Dahl",
		"Lauren Halpin",
		"Justin Padron",
		"Hannah Doyle",
		"Melissa Hammer",
		"Saira Perez-Rodriguez",
		"Sean Druck II",
		"Daneyshka Hernandez",
		"Lucas Rohrbeck",
		"McKayla Entenmann",
		"Andrea Hernandez-Gomez",
		"Tristen Rouse",
		"Myriam Faille",
		"Nicholas Hively",
		"Emily Scherer",
		"Daisy Ferleger",
		"Madison Hofmann",
		"Katrina Schmidt",
		"Sara Freeman",
		"Jenna Huskey",
		"Mackenzie Schmidt",
		"Brady Freund",
		"Abigail Jason",
		"Rebecca Schmitz",
		"Daniel Funk",
		"Anna Kloostra",
		"LeAnn Stinemates",
		"Mason Galler",
		"Emily Kollmann",
		"Alex Turner",
		"Matthew Galler",
		"Dallas Kreisa",
		"Megan Van Ruiswyk",
		"Grace Gammon",
		"Cormac Madigan",
		"Grant Webb",
		"Bridget Garter",
		"Luke Matasek"
	];

  return (
    <div className="awardees">
      <img className="logo" src={logo} />
      <h2 className="awardee-header">We are pleased to announce the 2020 Brunswick Company Sons &amp; Daughters Scholarship Program Awardees</h2>
      <div className="awardee-grid">
        {awardees.map((awardee) => <span>{awardee}</span>)}
      </div>
    </div>
  );
};

export default CompanyAwardees
