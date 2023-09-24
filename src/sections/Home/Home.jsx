import Header from "./Header/Header";
import Landing from "./Landing/Landing";

function Home() {
	return (
		<div className="Home" style={{ position: "relative" }}>
			<Header />
			<Landing />
		</div>
	);
}

export default Home;
