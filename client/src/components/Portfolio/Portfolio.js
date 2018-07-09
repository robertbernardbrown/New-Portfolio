import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardColumns } from 'reactstrap';

const Portfolio = (props) => (
    <div className="portfolio">
        <CardColumns>
        {props.projects.map((cur, i) => (
            <Card inverse key={i}>
                <CardImg width="100%" src={cur.picture} alt="Card image cap"/>
                <CardImgOverlay>
                <CardTitle>{cur.title}</CardTitle>
                <CardText>{cur.description}</CardText>
                </CardImgOverlay>
            </Card>
        ))}
        </CardColumns>
    </div>
)

export default Portfolio;