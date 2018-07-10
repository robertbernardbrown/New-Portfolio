import React from "react";

const About = () => (
    <div className="jumbotron header-div" id="about">
        <div className="container about-me">
            <p>Hi there! My name is Bob Brown. I'm a fullstack developer looking for my next big challenge in frontend and backend design.</p>
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