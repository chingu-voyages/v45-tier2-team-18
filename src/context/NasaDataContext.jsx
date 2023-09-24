import { createContext, useEffect, useState } from "react";
import axios from "axios";
import papa from "papaparse";

const NasaDataContext = createContext({
	Meteorites: undefined,
});

export function NasaDataContextProvider({ children }) {
	const [meteoritesData, setMeteoritesData] = useState([]);

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

	useEffect(() => {
		fetchMeteorites();
	}, []);

	return (
		<NasaDataContext.Provider value={{ Meteorites: meteoritesData }}>
			{children}
		</NasaDataContext.Provider>
	);
}
export default NasaDataContext;
