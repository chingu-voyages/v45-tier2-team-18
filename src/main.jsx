import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NasaDataContextProvider } from "./context/NasaDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NasaDataContextProvider>
			<App />
		</NasaDataContextProvider>
	</React.StrictMode>
);
