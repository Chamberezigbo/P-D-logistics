// ? Second last section //

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
	UilRobot,
	UilLayerGroupSlash,
	UilClock,
} from "@iconscout/react-unicons";

export default function StrategicComponet() {
	return (
		<>
			<Container className="mt-5 pt-5">
				<h2>
					We take the <br />
					<span className="bg-custom fw-border">
						burden of logistics off you.
					</span>
				</h2>
				<Row className="mt-5 pt-5">
					<Col lg md={12}>
						<UilRobot size={40} />
						<div className="mt-4 mb-4">
							<h5>Latest Technology</h5>
						</div>
						<p>
							Technology and its application are fundamental at
							L&DL. We understand the role of technology in
							providing an exceptional customer experience. For
							this reason, our processes, products and services
							are built around modern technology to help us
							deliver your shipments cheaper, safely and at the
							speed of light.
						</p>
					</Col>

					<Col lg md={12}>
						<UilLayerGroupSlash size={40} />
						<div className="mt-4 mb-4">
							<h5>Social Commerce</h5>
						</div>
						<p>
							Pivotal to successful social commerce transactions
							is the ability for the end-user to receive items
							where and when needed. With an unmatched route
							network spanning urban and rural communalities, P&DL
							is the solution to efficient last-mile delivery. As
							a merchant, you only have to think about selling
							your products while P&DL delivers to your customers
							worldwide.
						</p>
					</Col>

					<Col lg md={12}>
						<UilClock size={40} />
						<div className="mt-4 mb-4">
							<h5>Guaranteed Delivery</h5>
						</div>
						<p>
							We are conscious of the relationship between time
							and money and utilize our resources optimally to
							meet your delivery needs. Our service commitment to
							you is hassle-free delivery. We are large enough to
							efficiently handle deliveries for large corporations
							yet small enough to deploy innovative delivery
							solutions that help small businesses.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
