import React from "react";
import "./MeteoritesTable.css";
import { useFilteredData } from "../../../hooks/use-filtered-data";
import { DataGrid } from "@mui/x-data-grid";
import useLocation from "../../../hooks/use-location";
const columns = [
	{
		field: "name",
		headerName: "NAME",
		flex: 1,
		headerClassName: "table-header",
		sortable: false,
		description: "Name",
	},
	{
		field: "id",
		headerName: "ID",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
		sortable: false,
		description: "ID",
	},
	{
		field: "nametype",
		headerName: "NAMETYPE",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
		sortable: false,
		description: "Nametype",
	},
	{
		field: "recclass",
		headerName: "RECCLASS",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
		sortable: false,
		description: "Recclass",
	},
	{
		field: "mass (g)",
		headerName: "MASS",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
		sortable: false,
		description: "Mass",
	},
	{
		field: "fall",
		headerName: "FALL",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
		sortable: false,
		description: "Fall",
	},
	{
		field: "year",
		headerName: "YEAR",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "" : params.value),
		sortable: false,
		description: "Year",
	},
	{
		field: "GeoLocation",
		headerName: "COUNTRY",
		flex: 1,
		renderCell: (params) => {
			let location = params.value.replace(/(\(|\))/g, "").split(", ");
			return useLocation(location[0], location[1]);
		},
		sortable: false,
		description: "Country",
	},
	{
		field: "reclat",
		headerName: "RECLAT",
		flex: 1,
		sortable: false,
		description: "Reclat",
	},
	{
		field: "reclong",
		headerName: "RECLONG",
		flex: 1,
		sortable: false,
		description: "Reclong",
	},
];

function MeteoritesTable() {
	const Meteorites = useFilteredData();
	return (
		<div
			style={{
				height: 600,
				width: "100%",
			}}
		>
			<DataGrid
				rows={Meteorites}
				getRowId={(row) => row.name}
				disableColumnMenu={true}
				disableRowSelectionOnClick={true}
				G
				columns={columns}
				autoHeight
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 10 },
					},
				}}
				pageSizeOptions={[5, 10]}
			/>
		</div>
	);
}

export default MeteoritesTable;
