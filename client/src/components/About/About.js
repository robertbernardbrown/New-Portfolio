import React from "react";

const About = (props) => (
    <div className="header-div hero" id="about">
        <div className="container about-me">
            <h1>Hi there!</h1> 
            <hr/>
            <p>Apologies if you're looking for <a href="https://en.wikipedia.org/wiki/Bobby_Brown" target="_blank" rel="noopener noreferrer">Bobby Brown</a> (of New Edition fame) or <a href="https://en.wikipedia.org/wiki/Robert_Brown_(botanist,_born_1773)" target="_blank" rel="noopener noreferrer">Robert Brown</a> (reknowned botanist), but I'm not your guy.</p>
            <p>However, if you're looking for a fullstack developer I'm <strong>totally</strong> your guy.</p>
        </div>
        <div className="container">
            <p>Here are some of my skills:</p>
            <div id="icon-ul-div">
                <ul className="fa-ul" id="flexList">
                    {props.iconList.map((cur, i) => (
                        <li key={i}> <i className={`icon-list-item fa-li fa ${props.left} ${cur.icon}`}></i><div className={`icon-list-item ${props.right}`}> {cur.iconName}</div></li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
)

export default About;