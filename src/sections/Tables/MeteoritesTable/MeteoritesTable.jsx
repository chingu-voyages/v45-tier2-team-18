import React, { useContext } from "react";
import NasaDataContext from "../../../context/NasaDataContext";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{
		field: "name",
		headerName: "NAME",
		flex: 1,
		headerClassName: "table-header",
	},
	{ field: "id", headerName: "ID", flex: 1 },
	{ field: "nametype", headerName: "NAMETYPE", flex: 1 },
	{ field: "recclass", headerName: "RECCLASS", flex: 1 },
	{ field: "mass (g)", headerName: "MASS", flex: 1 },
	{ field: "fall", headerName: "FALL", flex: 1 },
	{ field: "year", headerName: "YEAR", flex: 1 },
	{ field: "country", headerName: "COUNTRY", flex: 1 },
];

function MeteoritesTable() {
	const { Meteorites } = useContext(NasaDataContext);
	return (
		<div style={{ height: 600, width: "100%" }}>
			<DataGrid
				rows={Meteorites}
				getRowId={(row) => row.name}
				disableColumnMenu={true}
				disableRowSelectionOnClick={true}
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
