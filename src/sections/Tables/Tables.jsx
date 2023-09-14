import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Search from "./Search/Search";
// import MeteoritesTable from "./MeteoritesTable/MeteoritesTable";
// import NeoTable from "./NeoTable/NeoTable";
const MeteoritesTable = React.lazy(() =>
	import("./MeteoritesTable/MeteoritesTable")
);
const NeoTable = React.lazy(() => import("./NeoTable/NeoTable"));

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `Table-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

function Tables() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container sx={{ padding: "30px 0" }}>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs value={value} onChange={handleChange} aria-label="Tables Tabs">
						<Tab label="Meteorite Landings" {...a11yProps(0)} />
						<Tab label="Near Earth Objects" {...a11yProps(1)} />
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					<React.Suspense fallback="Loading...">
						<Search />
						<MeteoritesTable />
					</React.Suspense>
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<React.Suspense fallback="Loading...">
						<NeoTable />
					</React.Suspense>
				</CustomTabPanel>
			</Box>
		</Container>
	);
}

export default Tables;
