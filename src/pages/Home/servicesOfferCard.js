import React from 'react';
import {Button, Card, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function ServicesOfferCard(props) {
    const {name, description, image} = props.data;
    const navigateTo = useNavigate()
    return (
        <Card className="service-card border-0 text-start px-2 py-3 rounded-2">
            <Card.Body>
                <Image src={require(`../../assets/${image}.png`)} alt={image} width={50} className="mb-3"/>
                <h4>{name}</h4>
                <p className="mt-2 mb-4">{description}</p>
                <Button variant="primary" className="service-btn d-flex align-items-center px-3 rounded-5 py-2" onClick={()=>navigateTo("/web-development")}>
                    More Details{" "}
                    <span className="material-symbols-rounded">chevron_right</span>
                </Button>
            </Card.Body>
        </Card>
    );
}

