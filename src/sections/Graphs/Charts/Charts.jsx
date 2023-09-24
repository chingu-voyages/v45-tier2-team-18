import React from "react";
import { useFilteredData } from "../../../hooks/use-filtered-data";
import { Bar, Line, Pie } from "react-chartjs-2";

import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Tooltip,
} from "chart.js";
import { Grid } from "@mui/material";

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Tooltip
);

function Charts() {
	const Meteorites = useFilteredData();
	const years = {};
	const recclass = {};
	const mass = {
		"0-100": 0,
		"100-1000": 0,
		"1000-10000": 0,
		"10000-100000": 0,
		"100000-1000000": 0,
		"1000000-10000000": 0,
	};

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
	Meteorites.sort((a, b) => a.year - b.year).map((ele) => {
		if (ele.year in years) {
			years[ele.year] += 1;
		} else {
			years[ele.year] = 1;
		}
	});

	// edit the recclass object to create a proper data to the Line component
	Meteorites.map((ele) => {
		if (ele.recclass in recclass) {
			recclass[ele.recclass] += 1;
		} else {
			recclass[ele.recclass] = 1;
		}
	});

	Meteorites.map((ele) => {
		Object.keys(mass).map((key) => {
			if (
				ele["mass (g)"] >= Number(key.split("-")[0]) &&
				ele["mass (g)"] <= Number(key.split("-")[1])
			) {
				mass[key] += 1;
			}
		});
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
				backgroundColor: ["rgb(75, 192, 192)", "#eee"],
				tension: 0.1,
			},
		],
	};
	const massData = {
		labels: Object.keys(mass),
		datasets: [
			{
				data: Object.values(mass),
				fill: false,
				backgroundColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	};

	return (
		<Grid container sx={{ padding: 1, alignItems: "center" }}>
			<Grid item xs={12}>
				<Line
					data={yearData}
					options={options}
					style={{ width: "100%", height: "100%", margin: 10 }}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<Pie
					data={recclassData}
					style={{ width: "100%", height: "100%", margin: 10 }}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<Bar
					data={massData}
					options={options}
					style={{ width: "100%", height: "100%", margin: 10 }}
				/>
			</Grid>
		</Grid>
	);
}

export default Charts;
