// ? my footer //

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
	UilWhatsapp,
	UilInstagramAlt,
	UilTwitter,
} from "@iconscout/react-unicons";

export default function FooterComponet() {
	return (
		<div className="bg-dark text-light mt-5 pt-5">
			<Container>
				<Row className="text-capitalize">
					<Col lg sm={12} className="pt-3">
						<h5>© 2022 P&GL Logistics</h5>
					</Col>

					<Col lg sm={12} className="pt-3">
						<h4>Company</h4>
						<h6>service portfolio</h6>
						<h6>blog</h6>
						<h6>about us</h6>
						<h6>Terms and condition</h6>
					</Col>

					<Col lg sm={12} className="pt-3">
						<h4>Other Services</h4>
						<h6>get a quote</h6>
						<h6>p&dl alpha</h6>
						<h6>schedule pick up</h6>
						<h6>shipping</h6>
						<h6>report issues</h6>
					</Col>

					<Col lg sm={12} className="pt-3">
						<h4 text-center>Connect with us</h4>
						<span className="d-flex justify-content-center pe-5">
							<UilWhatsapp />
							<UilInstagramAlt />
							<UilTwitter />
						</span>
					</Col>
				</Row>
			</Container>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#F3594F"
					fill-opacity="1"
					d="M0,32L1440,320L1440,320L0,320Z"
				></path>
			</svg>
		</div>
	);
}
