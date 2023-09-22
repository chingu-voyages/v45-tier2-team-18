import { createContext, useEffect, useState } from "react";
import axios from "axios";
import papa from "papaparse";
import useLocation from "../services/use-location";
const NasaDataContext = createContext({
	Meteorites: undefined,
});

export function NasaDataContextProvider({ children }) {
	const [meteoritesData, setMeteoritesData] = useState([]);
	const [dataFiltering, setDataFiltering] = useState([]);
	const [country, setCountry] = useState("Country Is");
	const [location, setLocation] = useState(null);

	// Fetching the meteorites file and parse the data with papaparse
	async function fetchMeteorites() {
		const response = await axios.get("./Meteorite_Landings.csv");
		papa.parse(response.data, {
			header: true,
			complete: (parsedResponse_1) => {
				setMeteoritesData(parsedResponse_1.data);
			},
		});
	}

	function filteredData(searchParams) {
		if (searchParams.get("name")) {
			return meteoritesData.filter(
				(ele) => ele.name === searchParams.get("name")
			);
		} else if (searchParams.get("id")) {
			return meteoritesData.filter((ele) => ele.id === searchParams.get("id"));
		} else if (searchParams.get("recclass")) {
			return meteoritesData.filter(
				(ele) => ele.recclass === searchParams.get("recclass")
			);
		} else if (searchParams.get("mass (g)")) {
			return meteoritesData.filter(
				(ele) => ele["mass (g)"] === searchParams.get("mass (g)")
			);
		} else if (searchParams.get("year")) {
			return meteoritesData.filter(
				(ele) => ele.year == searchParams.get("year")
			);
		}
		//  else if (searchParams.get("country")) {
		// 	return meteoritesData.filter((ele) => {
		// 		let location = ele.GeoLocation.replace(/(\(|\))/g, "").split(", ");
		// 		var config = {
		// 			method: "get",
		// 			url: `https://api.geoapify.com/v1/geocode/reverse?lat=${
		// 				location[0]
		// 			}&lon=${location[1]}&apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`,
		// 			headers: {},
		// 		};
		// 		axios(config).then((res) =>
		// 			setCountry(response.data.features[0].properties.country)
		// 		);
		// 		country === searchParams.get("country");
		// 	});
		// }
		else if (searchParams.get("mass-g")) {
			const range = searchParams
				.get("mass-g")
				.replace(/,|-/g, "|")
				.split("|")
				.sort((a, b) => a - b);

			setDataFiltering(
				meteoritesData.filter(
					(ele) =>
						ele["mass (g)"] >= range[1] &&
						ele["mass (g)"] <= range[range.length - 1]
				)
			);
		} else {
			return meteoritesData;
		}
		return dataFiltering;
	}

	useEffect(() => {
		fetchMeteorites();
	}, []);

	return (
		<NasaDataContext.Provider value={{ Meteorites: filteredData }}>
			{children}
		</NasaDataContext.Provider>
	);
}
export default NasaDataContext;
