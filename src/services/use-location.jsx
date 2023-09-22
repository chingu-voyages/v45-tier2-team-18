import React, { useEffect, useState } from "react";
import axios from "axios";
function useLocation(lat, lon) {
	const [country, setCountry] = useState("Country Is");
	var config = {
		method: "get",
		url: `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${
			import.meta.env.VITE_GEOAPIFY_API_KEY
		}`,
		headers: {},
	};

	axios(config)
		.then((response) => {
			setCountry(response.data.features[0].properties.country);
		})
		.catch(() => {
			setCountry("FAILED");
		});
	return country;
}
export default useLocation;
