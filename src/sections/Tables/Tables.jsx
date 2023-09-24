import * as React from "react";
import { Container } from "@mui/material";
import Search from "./Search/Search";

const MeteoritesTable = React.lazy(() =>
	import("./MeteoritesTable/MeteoritesTable")
);

function Tables() {
	return (
		<Container sx={{ padding: "70px auto", margin: "40px auto" }}>
			<React.Suspense fallback="Loading...">
				<Search />
				<MeteoritesTable />
			</React.Suspense>
		</Container>
	);
}

export default Tables;
