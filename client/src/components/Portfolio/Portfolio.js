import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardColumns, Button } from 'reactstrap';

const Portfolio = (props) => (
    <div className="portfolio header-div" id="portfolio" style={{paddingTop: "0"}}>
        <h1>Portfolio</h1>
        <CardColumns>
        {props.projects.map((cur, i) => (
            <div className="portfolio-container" key={i}>
                <a href={cur.url} target="_blank" rel="noopener noreferrer">
                    <Card inverse>
                        <CardImg width="100%" src={`${cur.picture}`} alt="Card image cap"/>
                        <CardImgOverlay>
                            <CardTitle className="portfolio-title">{cur.title}</CardTitle>
                        </CardImgOverlay>
                        <div className="portfolio-overlay">
                            <CardImgOverlay>
                                <div className="portfolio-overlay-info">
                                    <CardText>{cur.description}</CardText>
                                    <Button aria-label="Visit code" aria-labelledby="portfolio" size="sm" className="btn btn-primary">Visit Code</Button>
                                </div>
                            </CardImgOverlay>
                        </div>
                    </Card>
                </a>
            </div>
        ))}
        </CardColumns>
    </div>
)

export default Portfolio;