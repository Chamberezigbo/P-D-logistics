//?> Landing page component //

import { Container } from "react-bootstrap";

export default function LandingSection() {
	return (
		<div className="landingPage">
			<Container>
				<div className="text-center fw-bolder">
					<h1>E-commerce is nothing without logistics</h1>
					<p>Send. Track. Receive.</p>
					<div className="d-flex justify-content-center">
						<form className="example" action="/action_page.php">
							<input
								type="text"
								placeholder="Search.."
								name="search"
							/>
							<button type="submit">Search</button>
						</form>
					</div>
				</div>
			</Container>
		</div>
	);
}
