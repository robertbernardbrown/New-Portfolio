import React from "react";

const About = () => (
    <div className="header-div hero" id="about">
        <div className="container about-me">
            <h1>Hi there!</h1> 
            <p>Apologies if you were looking for <a href="https://en.wikipedia.org/wiki/Bobby_Brown" target="_blank">Bobby Brown</a> (of New Edition fame) or <a href="https://en.wikipedia.org/wiki/Robert_Brown_(botanist,_born_1773)" target="_blank">Robert Brown</a> (reknowned botanist), but I'm not your guy.</p>
            <p>However, if you're looking or a fullstack developer I'm totally your guy.</p>
        </div>
        <div className="container">
            <p>Here are some of my skills:</p>
            <div id="icon-ul-div">
                <ul className="fa-ul" id="flex-list">
                    <li className="icon-list-item"> <i className="list-icon fa-li fa icon-mongodb"></i>MongoDB</li>
                    <li className="icon-list-item"> <i className="list-icon fa-li fa icon-reactjs"></i>React</li>
                    <li className="icon-list-item"> <i className="list-icon fa-li fa icon-nodejs"></i>Node</li>
                    <li className="icon-list-item"> <i className="list-icon fa-li fa icon-mysql-alt"></i>MySQL</li>
                    <li className="icon-list-item"> <i className="list-icon fa-li fa icon-python"></i>Python</li>
                    <li className="icon-list-item"> <i className="list-icon fa-li fa icon-javascript-alt"></i>Vanilla JS</li>
                    <li className="icon-list-item"> <i className="list-icon fa-li fa icon-bootstrap"></i>Bootstrap</li>
                    <li className="icon-list-item"> <i className="list-icon fa-li fa icon-jquery"></i>jQuery</li>
                    <li className="icon-list-item"> <i className="list-icon fa-li fa icon-line-graph"></i>Digital Marketing</li>
                </ul>
            </div>
        </div>
    </div>
)

export default About;