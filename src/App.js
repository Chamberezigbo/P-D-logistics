import "./App.css";
import AboutComponent from "./Components/AboutComponent";
import LandingSection from "./Components/LandingSection";
import NavbarComponent from "./Components/NavbarComponet";
import ServiceComponent from "./Components/ServiceComponent";

function App() {
	return (
		<frameElement>
			<NavbarComponent />
			<LandingSection />
			<ServiceComponent />
			<AboutComponent />
		</frameElement>
	);
}

export default App;
