import * as React from "react";
import "./Search.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const massValues = [
	"0-100",
	"100-1000",
	"1000-10000",
	"10000-100000",
	"100000-1000000",
	"1000000-10000000",
];

function Search() {
	const [selectVal, setSelectVal] = React.useState("name");
	const [fieldVal, setFieldVal] = React.useState("");
	const [massVal, setMassVal] = React.useState([""]);
	const [searchParams, setSearchParams] = useSearchParams("");

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setMassVal(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};
	const params = [];

	for (let entry of searchParams.entries()) {
		params.push(entry);
	}

	return (
		<>
			<Grid container sx={{ margin: "20px 0" }} className="grid-filter">
				<FormControl
					sx={{ minWidth: 120 }}
					size="large"
					className="filter-select"
				>
					<Select
						id="demo-simple-select-helper"
						value={selectVal}
						onChange={(e) => setSelectVal(e.target.value)}
						sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
					>
						<MenuItem value="name">
							<em>Name</em>
						</MenuItem>
						<MenuItem value={"id"}>ID</MenuItem>
						<MenuItem value={"recclass"}>Recclass</MenuItem>
						<MenuItem value={"mass-g"}>Mass (g)</MenuItem>
						<MenuItem value={"year"}>Year</MenuItem>
						<MenuItem value={"country"}>Country</MenuItem>
					</Select>
				</FormControl>
				<FormControl
					sx={{ minWidth: 120 }}
					size="large"
					className="search-field filter-select"
				>
					{selectVal !== "mass-g" ? (
						<TextField
							sx={{ borderRadius: 0, width: "100%" }}
							variant="outlined"
							placeholder="Name, Year, Meteorite composition, and Mass range"
							value={fieldVal}
							onChange={(e) => {
								setFieldVal(e.target.value);
							}}
						></TextField>
					) : (
						// <Select
						// 	id="demo-simple-select-helper"
						// 	value={massVal}
						// 	onChange={(e) => {
						// 		setMassVal(e.target.value);
						// 	}}
						// 	multiple
						// 	sx={{ borderRadius: 0, width: "100%" }}
						// >
						// 	<MenuItem value="70m-50m">
						// 		<em>70m - 50m</em>
						// 	</MenuItem>
						// 	<MenuItem value={"49m-20m"}>49m - 20m</MenuItem>
						// 	<MenuItem value={"19m-1m"}>19m - 1m</MenuItem>
						// 	<MenuItem value={"999k-500k"}>999k - 500k</MenuItem>
						// 	<MenuItem value={"499k-100k"}>499k - 100k</MenuItem>
						// 	<MenuItem value={"99k-10k"}>99k - 10k</MenuItem>
						// 	<MenuItem value={"9k-1k"}>9k - 1k</MenuItem>
						// 	<MenuItem value={"900-0"}>900 - 0</MenuItem>
						// </Select>
						<Select
							labelId="demo-multiple-checkbox-label"
							id="demo-multiple-checkbox"
							multiple
							value={massVal}
							onChange={handleChange}
							input={<OutlinedInput />}
							renderValue={(selected) => selected.join(", ")}
							MenuProps={MenuProps}
						>
							{massValues.map((value) => (
								<MenuItem key={value} value={value}>
									<Checkbox checked={massVal.indexOf(value) > -1} />
									<ListItemText primary={value} />
								</MenuItem>
							))}
						</Select>
					)}
				</FormControl>
				<Button
					variant="contained"
					size="large"
					sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
					onClick={() =>
						setSearchParams((searchParams) => {
							if (selectVal !== "mass-g" && fieldVal !== "") {
								searchParams.set(selectVal, fieldVal);
							} else {
								searchParams.set(selectVal, massVal);
							}
							return searchParams;
						})
					}
				>
					Search
				</Button>
			</Grid>
			<Typography variant="string">Filters: {params.length}</Typography>
			<Button
				variant="text"
				size="large"
				sx={{
					marginLeft: 1,
				}}
				onClick={() =>
					setSearchParams((searchParams) => {
						searchParams.delete(searchParams.entries());
						setSelectVal("name");
						setFieldVal("");
					})
				}
			>
				Clear All
			</Button>
			<div>
				<Grid container>
					{params.map(([key, value]) => (
						<Box
							key={key}
							sx={{
								bgcolor: "#eee",
								padding: "2px 10px",
								marginBottom: 1,
								display: "flex",
								alignItems: "center",
								borderRadius: "5px",
								marginLeft: 1,
							}}
						>
							<Typography variant="string" color="primary.main">
								{key}:
							</Typography>
							<Typography variant="string">{value}</Typography>
							<ClearIcon
								onClick={() => {
									searchParams.delete(key);
									setSearchParams(searchParams);
								}}
								sx={{ fontSize: "16px", cursor: "pointer", marginLeft: 1 }}
							/>
						</Box>
					))}
				</Grid>
			</div>
		</>
	);
}

export default Search;
