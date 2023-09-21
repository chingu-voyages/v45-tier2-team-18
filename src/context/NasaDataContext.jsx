import { createContext, useEffect, useState } from "react";
import axios from "axios";
import papa from "papaparse";

const NasaDataContext = createContext({
	Meteorites: undefined,
});

export function NasaDataContextProvider({ children }) {
	const [meteoritesData, setMeteoritesData] = useState();
	// Fetching the meteorites file and parse the data with papaparse
	function fetchMeteorites() {
		axios.get("./Meteorite_Landings.csv").then((response) => {
			papa.parse(response.data, {
				header: true,
				complete: (parsedResponse) => {
					setMeteoritesData(parsedResponse.data);
				},
			});
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
