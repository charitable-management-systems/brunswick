import React from "react"
import SEO from "../components/seo"
import "./awardees.css"
import logo from "../images/logo.png"

const CompanyAwardees = () => {
	const awardees = [
		"Aden Anderson",
"Kayla Hernandez",
"Thomas Nagy",
"Ethan Batchelder",
"Ana Hernandez Name",
"Mira Needlman",
"Brooke Bayless",
"Elisa Hernandez-Gomez",
"Will Needlman",
"Jasmine Clark",
"Cheyenne Hulsey",
"Ruari O’Connor",
"Emerson Cotter",
"Nathaniel Ince",
"Felipe Onni",
"Justin Dahl",
"Courtney Kaufman",
"Mackenzie Ragle",
"Addison Deruyter",
"Mary Grace King",
"Aziah Richardson",
"Wyatt Draves",
"Chelsea Kinkead",
"Brianna Schelter",
"Katelyn Entenmann",
"Benjamin Kopper",
"Samantha Slonecker",
"Grace Farrell",
"Eamonn Lawhern",
"Cody Turner",
"Moriah Geiser",
"Jacob Mckinney",
"Benjamin Wald",
"Brady Hager",
"Arron Miller",
"Michael Webers",
"Stephanie Hayd",
"Dylan Moo Hernandez",
"Olivia Webers",
"Emma Mulligan",
	];

	return (
		<div className="awardees">
			<img className="logo" src={logo} />
			<h2 className="awardee-header">We are pleased to announce the 2024 Brunswick Company Sons &amp; Daughters Scholarship Program Awardees</h2>
			<div className="awardee-grid">
				{awardees.map((awardee) => <span>{awardee}</span>)}
			</div>
		</div>
	);
};

export default CompanyAwardees
