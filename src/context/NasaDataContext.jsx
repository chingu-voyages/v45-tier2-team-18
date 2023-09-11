import { createContext, useEffect, useState } from "react";
import axios from "axios";
import papa from "papaparse";

const NasaDataContext = createContext({
	Meteorites: undefined,
	Neo: undefined,
});

export function NasaDataContextProvider({ children }) {
	const [meteoritesData, setMeteoritesData] = useState();
	const [NeoData, setNeoData] = useState();
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
	// Fetching the neo file and parse the data with papaparse
	function fetchNeo() {
		axios.get("./NEO Earth Close Approaches.csv").then((response) => {
			papa.parse(response.data, {
				header: true,
				complete: (parsedResponse) => {
					setNeoData(parsedResponse.data);
				},
			});
		});
	}

	useEffect(() => {
		fetchMeteorites();
		fetchNeo();
	}, []);

	return (
		<NasaDataContext.Provider
			value={{ Meteorites: meteoritesData, Neo: NeoData }}
		>
			{children}
		</NasaDataContext.Provider>
	);
}
