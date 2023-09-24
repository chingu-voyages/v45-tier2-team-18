import React, { useContext } from "react";
import NasaDataContext from "../../../context/NasaDataContext";
import { Bar, Line } from "react-chartjs-2";

import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Tooltip,
} from "chart.js";
import { useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Tooltip
);

// Chart.register(LinearScale);

// Chart.register(PointElement);

// Chart.register(LineElement);
// Chart.register(Tooltip);
function Charts() {
	const { Meteorites } = useContext(NasaDataContext);
	const [searchParams, setSearchParams] = useSearchParams();
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

	Meteorites(searchParams)
		.sort((a, b) => a.year - b.year)
		.map((ele) => {
			if (ele.year in years) {
				years[ele.year] += 1;
			} else {
				years[ele.year] = 1;
			}
		});
	Meteorites(searchParams).map((ele) => {
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

	const massData = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				label: "Revenue",
				backgroundColor: "rgba(75,192,192,1)",
				borderWidth: 2,
				data: [10, 20, 30],
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
