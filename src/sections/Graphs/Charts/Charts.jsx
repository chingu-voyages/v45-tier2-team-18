import React, { useContext } from "react";
import NasaDataContext from "../../../context/NasaDataContext";
import { Line } from "react-chartjs-2";

import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Tooltip,
} from "chart.js";
import { Grid } from "@mui/material";

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Tooltip
);

function Charts() {
	const { Meteorites } = useContext(NasaDataContext);
	const years = {};
	const recclass = {};

	const tooltipLabelCallback = (context) => {
		let label = context.dataset.label || "";

		if (label) {
			label += ": ";
		}
		label += context.parsed.y;
		return label;
	};
	const options = {
		plugins: {
			tooltip: {
				enabled: true,
				callbacks: {
					label: tooltipLabelCallback,
				},
			},
		},
	};
	// edit the years object to create a proper data to the Line component
	Meteorites()
		.sort((a, b) => a.year - b.year)
		.map((ele) => {
			if (ele.year in years) {
				years[ele.year] += 1;
			} else {
				years[ele.year] = 1;
			}
		});

	// edit the recclass object to create a proper data to the Line component
	Meteorites().map((ele) => {
		if (ele.recclass in recclass) {
			recclass[ele.recclass] += 1;
		} else {
			recclass[ele.recclass] = 1;
		}
	});

	const yearData = {
		labels: Object.keys(years),
		datasets: [
			{
				data: Object.values(years),
				fill: false,
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	};
	const recclassData = {
		labels: Object.keys(recclass),
		datasets: [
			{
				data: Object.values(recclass),
				fill: false,
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	};

	return (
		<Grid container sx={{ padding: 1 }}>
			<Grid item xs={12} md={6}>
				<Line
					data={yearData}
					options={options}
					style={{ width: "100%", height: "100%", margin: 10 }}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<Line
					data={recclassData}
					options={options}
					style={{ width: "100%", height: "100%", margin: 10 }}
				/>
			</Grid>
		</Grid>
	);
}

export default Charts;
