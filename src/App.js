import "./App.css";
import AboutComponent from "./Components/AboutComponent";
import FooterComponet from "./Components/FooterComponet";
import LandingSection from "./Components/LandingSection";
import NavbarComponent from "./Components/NavbarComponet";
import ServiceComponent from "./Components/ServiceComponent";
import StrategicComponet from "./Components/StrategicComponet";

function App() {
	return (
		<div id="App">
			<NavbarComponent />
			<LandingSection />
			<ServiceComponent />
			<AboutComponent />
			<StrategicComponet />
			<FooterComponet />
		</div>
	);
}

export default App;
