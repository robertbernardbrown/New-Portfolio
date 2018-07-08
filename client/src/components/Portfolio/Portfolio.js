import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardColumns } from 'reactstrap';

const Portfolio = (props) => (
    <div className="portfolio">
        <CardColumns>
        {props.projects.map((cur, i) => (
            <Card inverse>
                <CardImg width="100%" src={cur.picture} alt="Card image cap" />
                <CardImgOverlay>
                <CardTitle>{cur.title}</CardTitle>
                <CardText>{cur.description}</CardText>
                {/* <CardText>
                    <small className="text-muted">{cur.technology}</small>
                </CardText> */}
                </CardImgOverlay>
            </Card>
        ))}
        </CardColumns>
    </div>
)

export default Portfolio;