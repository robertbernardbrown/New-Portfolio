import React from "react";

const About = () => (
    <div className="jumbotron header-div" id="about">
        <div className="container about-me">
            <p>Hi there! My name is Bob Brown. I'm a fullstack developer looking for my next big challenge in frontend and backend design.</p>
        </div>
        <div className="container">
            <p> Here are some of my skills:</p>
            <ul className="fa-ul">
                <li><i className="fa-li fa icon-mongodb"></i>MongoDB</li>
                <li><i className="fa-li fa icon-reactjs"></i>React</li>
                <li><i className="fa-li fa icon-nodejs"></i>Node</li>
                <li><i className="fa-li fa icon-mysql-alt"></i>MySQL</li>
                <li><i className="fa-li fa icon-python"></i>Python</li>
                <li><i className="fa-li fa icon-javascript-alt"></i>Vanilla JS</li>
                <li>Digital Marketing</li>
            </ul>
        </div>
    </div>
)

export default About;