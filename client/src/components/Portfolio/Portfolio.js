import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardColumns } from 'reactstrap';

const Portfolio = (props) => (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <CardColumns>
        {props.projects.map((cur, i) => (
            <a href={cur.url} target="_blank" rel="noopener noreferrer">
                <Card inverse key={i}>
                    <CardImg width="100%" src={cur.picture} alt="Card image cap"/>
                    <CardImgOverlay>
                    <CardTitle>{cur.title}</CardTitle>
                    <CardText>{cur.description}</CardText>
                    </CardImgOverlay>
                </Card>
            </a>
        ))}
        </CardColumns>
    </div>
)

export default Portfolio;