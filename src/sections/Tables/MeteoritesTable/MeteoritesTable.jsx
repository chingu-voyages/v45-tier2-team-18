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
	},
	{
		field: "id",
		headerName: "ID",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
	},
	{
		field: "nametype",
		headerName: "NAMETYPE",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
	},
	{
		field: "recclass",
		headerName: "RECCLASS",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
	},
	{
		field: "mass (g)",
		headerName: "MASS",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
	},
	{
		field: "fall",
		headerName: "FALL",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
	},
	{
		field: "year",
		headerName: "YEAR",
		flex: 1,
		renderCell: (params) => (params.value === "" ? "-" : params.value),
	},
	{
		field: "GeoLocation",
		headerName: "COUNTRY",
		flex: 1,
		renderCell: (params) => {
			let location = params.value.replace(/(\(|\))/g, "").split(", ");
			return useLocation(location[0], location[1]);
		},
	},
	{ field: "reclat", headerName: "RECLAT", flex: 1 },
	{ field: "reclong", headerName: "RECLONG", flex: 1 },
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
