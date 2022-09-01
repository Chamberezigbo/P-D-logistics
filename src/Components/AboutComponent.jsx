//?> This section is for about //

import { Col, Container, Row } from "react-bootstrap";

export default function AboutComponent() {
	return (
		<div className="wave-container mt-5">
			<Container>
				<Row>
					<Col className="text-capitalize">
						<h5>
							watch small click about our business and how we
							operate
						</h5>
					</Col>
				</Row>
			</Container>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#F3594F"
					fill-opacity="1"
					d="M0,192L80,208C160,224,320,256,480,272C640,288,800,288,960,293.3C1120,299,1280,309,1360,314.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
				></path>
			</svg>
		</div>
	);
}
