import { createContext, useEffect, useState } from "react";
import axios from "axios";
import papa from "papaparse";
import { useSearchParams } from "react-router-dom";

const NasaDataContext = createContext({
	Meteorites: undefined,
	unfilteredData: undefined,
});

export function NasaDataContextProvider({ children }) {
	const [meteoritesData, setMeteoritesData] = useState([]);
	// setting unfiltered data to use it in the statistics componenet
	// without being filtered with the search componenet filters
	const [unfilteredData, setUnfilteredData] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	// Fetching the meteorites file and parse the data with papaparse
	async function fetchMeteorites() {
		const response = await axios.get("./Meteorite_Landings.csv");
		papa.parse(response.data, {
			header: true,
			complete: (parsedResponse_1) => {
				setMeteoritesData(parsedResponse_1.data);
				setUnfilteredData(parsedResponse_1.data);
			},
		});
	}

	function filteredData() {
		// put the search params in object to get more control
		const filters = {};

		if (searchParams.get("name")) {
			filters.name = searchParams.get("name");
		}

		if (searchParams.get("id")) {
			filters.id = searchParams.get("id");
		}

		if (searchParams.get("recclass")) {
			filters.recclass = searchParams.get("recclass");
		}

		if (searchParams.get("mass (g)")) {
			filters["mass (g)"] = searchParams.get("mass (g)");
		}

		if (searchParams.get("year")) {
			filters.year = searchParams.get("year");
		}

		if (searchParams.get("mass-g")) {
			// formatting the range to make it proper to comparison
			const range = searchParams
				.get("mass-g")
				.replace(/,/g, "-")
				.split("-")
				.sort((a, b) => a - b)
				.map(Number);
			filters["mass (g)"] = {
				min: range[1],
				max: range[2],
			};
		}

		return meteoritesData.filter((meteorite) => {
			return Object.keys(filters).every((key) => {
				if (typeof filters[key] === "object") {
					return (
						meteorite[key] >= filters[key].min &&
						meteorite[key] <= filters[key].max
					);
				} else {
					return meteorite[key]?.toLowerCase() === filters[key]?.toLowerCase();
				}
			});
		});
	}

	useEffect(() => {
		fetchMeteorites();
	}, []);

	return (
		<NasaDataContext.Provider
			value={{ Meteorites: filteredData, unfilteredData: unfilteredData }}
		>
			{children}
		</NasaDataContext.Provider>
	);
}
export default NasaDataContext;
