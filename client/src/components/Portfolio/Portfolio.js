import React from "react";

const Portfolio = (props) => (
    <div className="portfolio">
        {props.projects.map((cur, i) => (
            <div className="jumbotron header-div outline-red" key={i}>
                <div className="container">
                    <p>{cur.title}</p>
                </div>
            </div>
        ))}
    </div>
)

export default Portfolio;