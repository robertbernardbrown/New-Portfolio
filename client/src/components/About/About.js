import React from "react";

const About = () => (
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
                <ul className="fa-ul" id="flex-list">
                    <li className="icon-list-item"> <div><i className="list-icon fa-li fa icon-mongodb"></i></div><div>MongoDB</div></li>
                    <li className="icon-list-item"> <div><i className="list-icon fa-li fa icon-reactjs"></i></div><div>React</div></li>
                    <li className="icon-list-item"> <div><i className="list-icon fa-li fa icon-nodejs"></i></div><div>Node</div></li>
                    <li className="icon-list-item"> <div><i className="list-icon fa-li fa icon-mysql-alt"></i></div><div>MySQL</div></li>
                    <li className="icon-list-item"> <div><i className="list-icon fa-li fa icon-python"></i></div><div>Python</div></li>
                    <li className="icon-list-item"> <div><i className="list-icon fa-li fa icon-javascript-alt"></i></div><div>Vanilla JS</div></li>
                    <li className="icon-list-item"> <div><i className="list-icon fa-li fa icon-bootstrap"></i></div><div>Bootstrap</div></li>
                    <li className="icon-list-item"> <div><i className="list-icon fa-li fa icon-jquery"></i></div><div>jQuery</div></li>
                    <li className="icon-list-item"> <div><i className="list-icon fa-li fa icon-line-graph"></i></div><div>Digital Marketing</div></li>
                </ul>
            </div>
        </div>
    </div>
)

export default About;