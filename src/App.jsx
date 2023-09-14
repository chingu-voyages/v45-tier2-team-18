import "./App.css";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Home from "./sections/Home/Home";
import Tables from "./sections/Tables/Tables";

// edit the primary color of the theme
const theme = createTheme({
	palette: {
		primary: {
			main: "#2A8B8D",
		},
		secondary: {
			main: "#222222",
		},
	},
	typography: {
		fontFamily: `"Manrope", sans-serif`,
	},
});

function App() {
	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>
			<Home />
			<Tables />
		</ThemeProvider>
	);
}

export default App;
