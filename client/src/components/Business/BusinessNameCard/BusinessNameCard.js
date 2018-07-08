import React from "react";
import "./BusinessNameCard.css";
// import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

// Business card component for List Results
const BusinessNameCard = props => (
    <div>
        <a href={props.address}>
			<h5 className="business-name-card">{props.name}</h5>
		</a>
        <h3>{props.stars}</h3>
    </div>
  );

export default BusinessNameCard;
