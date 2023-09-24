import React, { useState, useContext } from "react";
import "./Statistics.css";
import { useFilteredData } from "../../../hooks/use-filtered-data";
import { Paper, Typography, Grid } from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Statistics() {
	const [value, setValue] = useState(dayjs("2013"));
	const unFilteredMeteorites = useFilteredData(false);
	const maxYear = dayjs("2013");
	return (
		<Paper
			elevation={14}
			className="statistics-paper"
			sx={{ bgcolor: "secondary.main", color: "common.white" }}
		>
			<Grid container>
				<Grid item sm={8}>
					<div className="statistics-text">
						<Typography variant="string">Meteoritic material falls</Typography>
						<Typography variant="h2" className="meteorites-by-year">
							{
								unFilteredMeteorites.filter((ele) => ele.year == value.year())
									.length
							}
						</Typography>
						<Typography variant="string" className="source">
							Source: NASA Open Data Portal
						</Typography>
					</div>
				</Grid>
				<Grid item sm={4}>
					<div className="year-input">
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								slotProps={{
									textField: {
										InputProps: {
											sx: {
												color: "white",
												border: "0.8px solid",
												borderColor: "grey.800",
												svg: { color: "white" },
											},
										},
									},
								}}
								views={["year"]}
								maxDate={maxYear}
								value={value}
								onChange={(newValue) => setValue(newValue)}
							/>
						</LocalizationProvider>
					</div>
				</Grid>
				<Grid item sm={12}>
					<div className="statistics-numbers"></div>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default Statistics;
