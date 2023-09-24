import { useContext } from "react";
import NasaDataContext from "../context/NasaDataContext";
import { useSearchParams } from "react-router-dom";

export function useFilteredData(filter = true) {
	const { Meteorites } = useContext(NasaDataContext);
	const [searchParams, setSearchParams] = useSearchParams();
	if (filter === true) {
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

		return Meteorites.filter((meteorite) => {
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
	} else {
		return Meteorites;
	}
}
