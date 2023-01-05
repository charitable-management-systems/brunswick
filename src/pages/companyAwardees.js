import React from "react"
import SEO from "../components/seo"
import "./awardees.css"
import logo from "../images/logo.png"

const CompanyAwardees = () => {
	const awardees = [
		"Joshua Abello",
		"Katelyn Entenmann",
		"Daunte Leiran",
		"Marie-Catherine Alain",
		"Mason Galler",
		"David Mats",
		"Grace Baker",
		"Moriah Geiser",
		"Jackson Mckinney",
		"Sabastian Barton",
		"Aliya Gerber",
		"Mario Cesar Moreno Melo",
		"Ethan Batchelder",
		"Jessica Glaszczak",
		"Fernando Moreno Melo",
		"Brooke Bayless",
		"Ana Hernandez Name",
		"Jesse Oloski",
		"Julia Bettley",
		"Elisa Hernandez-Gomez",
		"Justin Padron",
		"Hannah Bhaskaran",
		"Larissa Iacobescu",
		"Marghret Race",
		"Mia Burge",
		"Jayda Janeczko",
		"Kaitlyn Radavich",
		"Emerson Cotter",
		"Abigail Jason",
		"Madison Rempalski",
		"Alexander Dahl",
		"Courtney Kaufman",
		"Jenna Roth",
		"Shayley Dauphinee",
		"Lindsey Keller",
		"Saayda Sajid",
		"Mckenzie Davis",
		"Makena Kenyon",
		"Max Springer",
		"Wyatt Draves",
		"Aleczander Krack",
		"Ella Webb",
		"",
		"Dallas Kreisa",
		"",
	];

	return (
		<div className="awardees">
			<img className="logo" src={logo} />
			<h2 className="awardee-header">We are pleased to announce the 2022 Brunswick Company Sons &amp; Daughters Scholarship Program Awardees</h2>
			<div className="awardee-grid">
				{awardees.map((awardee) => <span>{awardee}</span>)}
			</div>
		</div>
	);
};

export default CompanyAwardees
