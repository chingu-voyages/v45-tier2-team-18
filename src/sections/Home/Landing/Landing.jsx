import React from "react";
import "./Landing.css";
import Earth from "../../../assets/Ourspaceship-Africa-2k-2.png";
const Statistics = React.lazy(() => import("../Statistics/Statistics"));
import { Container, Typography } from "@mui/material";
function Landing() {
	return (
		<div className="landing" id="landing">
			<Container className="landing-container" sx={{ padding: 10 }}>
				<div className="text-box">
					<Typography variant="h2" className="text-title">
						Meteors and Meteorites
					</Typography>
					<Typography variant="string" className="text-paragraph">
						Data on over 45k meteorites strikes and events research
					</Typography>
				</div>
				<Statistics />
			</Container>
			<div className="image-container">
				<img src={Earth} alt="" />
			</div>
		</div>
	);
}

export default Landing;
