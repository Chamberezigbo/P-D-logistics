import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import {
	UilArchiveAlt,
	UilCarSideview,
	UilTruckLoading,
	UilLuggageCart,
} from "@iconscout/react-unicons";

function ServiceComponent() {
	return (
		<>
			<Container className="mb-5 servicePage">
				<div className="text-center">
					<h1 className="fw-bolder">Seamless delivery services</h1>
				</div>

				<CardGroup className="mt-5">
					<Card className="service-Card">
						<Card.Body>
							<Card.Title className="mb-3">
								<UilArchiveAlt size="65" />
							</Card.Title>
							<Card.Text className="text-capitalize">
								<h4>ship now</h4>
								<p>
									request pick ups/delivery and xpress
									drop-off
								</p>
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className="service-Card">
						<Card.Body>
							<Card.Title>
								<UilCarSideview size="65" />
							</Card.Title>
							<Card.Text className="text-capitalize">
								<h4>way-billing</h4>
								<p>
									transport goods anywhere in the world [Local
									& international]
								</p>
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className="service-Card">
						<Card.Body>
							<Card.Title>
								<UilTruckLoading size="65" />
							</Card.Title>
							<Card.Text className="text-capitalize">
								<h4>V.I.P Event Errands [VEES] & </h4>
								<p>
									use our service to run all kind of errands
								</p>
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className="service-Card">
						<Card.Body>
							<Card.Title>
								<UilLuggageCart size="65" />
							</Card.Title>
							<Card.Text className="text-capitalize">
								<h4>Goods and Item Tracking</h4>
								<p>
									Track your Goods and see their exact
									location
								</p>
							</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</Container>
		</>
	);
}

export default ServiceComponent;
