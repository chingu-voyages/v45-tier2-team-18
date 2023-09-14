import "./Landing.css";
import Earth from "../../../assets/Ourspaceship-Africa-2k-2.png";
import Statistics from "../Statistics/Statistics";
import { Container, Typography, Button } from "@mui/material";
function Landing() {
	return (
		<div className="landing">
			<Container className="landing-container">
				<div className="text-box">
					<Typography variant="h2" className="text-title">
						Meteors and Meteorites
					</Typography>
					<Typography variant="string" className="text-paragraph">
						Data on over 45k meteorites strikes and events research
					</Typography>
				</div>
				<Button variant="contained" className="custom-Button-styling">
					Meteorite Landings
				</Button>
				<Button
					variant="contained"
					sx={{
						margin: 1,
						bgcolor: "secondary.main",
						borderWidth: 0.1,
						borderStyle: "solid",
						borderColor: "grey.800",
						"&:hover": {
							bgcolor: "secondary.dark",
						},
					}}
					className="custom-Button-styling"
				>
					Near Earth Objects
				</Button>
				<Statistics />
			</Container>
			<div className="image-container">
				<img src={Earth} alt="" />
			</div>
		</div>
	);
}

export default Landing;
