import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardColumns } from 'reactstrap';

const Portfolio = (props) => (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <CardColumns>
        {props.projects.map((cur, i) => (
            <a href={cur.url} target="_blank" rel="noopener noreferrer" key={i} className="portfolio-container">
                <Card inverse>
                    <CardImg width="100%" src={cur.picture} alt="Card image cap"/>
                        <CardImgOverlay>
                            <CardTitle>{cur.title}</CardTitle>
                        </CardImgOverlay>
                    <div className="portfolio-overlay">
                        <CardImgOverlay>
                            <CardText className="text">{cur.description}</CardText>
                        </CardImgOverlay>
                    </div>
                </Card>
            </a>
        ))}
        </CardColumns>
    </div>
)

export default Portfolio;