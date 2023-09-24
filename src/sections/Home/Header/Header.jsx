import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { Container } from "@mui/material";

function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="relative" color="secondary">
				<Container>
					<Toolbar disableGutters>
						<IconButton
							size="large"
							edge="start"
							color="primary"
							aria-label="menu"
						>
							<LanguageIcon fontSize="large" />
						</IconButton>
						<Typography variant="string" component="div" sx={{ flexGrow: 1 }}>
							NASA FIREBALL
						</Typography>
						<IconButton
							size="large"
							color="inherit"
							aria-label="search"
							onClick={() => {
								document
									.getElementById("search")
									.scrollIntoView({ behavior: "smooth" });
							}}
						>
							<SearchIcon />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}

export default Header;
