import React from "react";
import { Button, Card, Image } from "react-bootstrap";

export default function ServicesOfferCard(props) {
  const { name, description, image } = props.data;
  return (
    <Card className="service-card border-0 text-start px-2 py-3 rounded-2">
      <Card.Body>
        <Image
          src={require(`../../assets/${image}.png`)}
          alt={image}
          width={50}
          className="mb-3"
        />
        <h4>{name}</h4>
        <p className="mt-3 mb-3">{description}</p>
        <Button
          variant="primary"
          className="service-btn d-flex align-items-center px-3 rounded-5 py-2"
        >
          More Details{" "}
          <span className="material-symbols-rounded">chevron_right</span>
        </Button>
      </Card.Body>
    </Card>
  );
}
