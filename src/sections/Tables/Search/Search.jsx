import * as React from "react";
import "./Search.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, TextField, Button } from "@mui/material";
function Search() {
	const [selectVal, setSelectVal] = React.useState("name");
	const [massVal, setMassVal] = React.useState("70m-50m");

	const handleChange = (event) => {
		setSelectVal(event.target.value);
	};

	return (
		<Grid container sx={{ margin: "20px 0" }} className="grid-filter">
			<FormControl
				sx={{ minWidth: 120 }}
				size="large"
				className="filter-select"
			>
				<Select
					id="demo-simple-select-helper"
					value={selectVal}
					onChange={handleChange}
					sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
				>
					<MenuItem value="name">
						<em>Name</em>
					</MenuItem>
					<MenuItem value={"id"}>ID</MenuItem>
					<MenuItem value={"recclass"}>Recclass</MenuItem>
					<MenuItem value={"mass"}>Mass</MenuItem>
					<MenuItem value={"year"}>Year</MenuItem>
					<MenuItem value={"country"}>Country</MenuItem>
				</Select>
			</FormControl>
			<FormControl
				sx={{ minWidth: 120 }}
				size="large"
				className="search-field filter-select"
			>
				{selectVal !== "mass" ? (
					<TextField
						sx={{ borderRadius: 0, width: "100%" }}
						variant="outlined"
						placeholder="Name, Year, Meteorite composition, and Mass range"
					></TextField>
				) : (
					<Select
						id="demo-simple-select-helper"
						value={massVal}
						// onChange={}

						sx={{ borderRadius: 0, width: "100%" }}
					>
						<MenuItem value="70m-50m">
							<em>70m - 50m</em>
						</MenuItem>
						<MenuItem value={"49m-20m"}>49m - 20m</MenuItem>
						<MenuItem value={"19m-1m"}>19m - 1m</MenuItem>
						<MenuItem value={"999k-500k"}>999k - 500k</MenuItem>
						<MenuItem value={"499k-100k"}>499k - 100k</MenuItem>
						<MenuItem value={"99k-10k"}>99k - 10k</MenuItem>
						<MenuItem value={"9k-1k"}>9k - 1k</MenuItem>
						<MenuItem value={"900-0"}>900 - 0</MenuItem>
					</Select>
				)}
			</FormControl>
			<Button
				variant="contained"
				type="primary"
				size="large"
				sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
			>
				Search
			</Button>
		</Grid>
	);
}

export default Search;
