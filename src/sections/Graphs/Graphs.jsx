import Charts from "./Charts/Charts";

function Graphs() {
	const mapIsReadyCallback = (map) => {
		console.log(map);
	};
	return (
		<>
			<Charts />
		</>
	);
}
export default Graphs;
