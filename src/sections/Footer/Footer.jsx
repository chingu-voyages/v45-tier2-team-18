import { Box, Link } from "@mui/material";

function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: "secondary.main",
				padding: 1,
				textAlign: "center",
			}}
		>
			<Link
				href="https://github.com/chingu-voyages/v45-tier2-team-18"
				sx={{ color: "common.white", textDecoration: "none" }}
			>
				Github Repo
			</Link>
		</Box>
	);
}
export default Footer;
