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
                    <li> <i className={`icon-list-item fa-li fa ${props.left} icon-mongodb`}       ></i>  <div className={`icon-list-item ${props.right}`}> MongoDB          </div></li>
                    <li> <i className={`icon-list-item fa-li fa ${props.left} icon-reactjs`}      ></i>  <div className={`icon-list-item ${props.right}`}> React            </div></li>
                    <li> <i className={`icon-list-item fa-li fa ${props.left} icon-nodejs`}        ></i>  <div className={`icon-list-item ${props.right}`}> Node             </div></li>
                    <li> <i className={`icon-list-item fa-li fa ${props.left} icon-mysql-alt`}     ></i>  <div className={`icon-list-item ${props.right}`}> MySQL            </div></li>
                    <li> <i className={`icon-list-item fa-li fa ${props.left} icon-python`}        ></i>  <div className={`icon-list-item ${props.right}`}> Python           </div></li>
                    <li> <i className={`icon-list-item fa-li fa ${props.left} icon-javascript-alt`}></i>  <div className={`icon-list-item ${props.right}`}> Vanilla JS       </div></li>
                    <li> <i className={`icon-list-item fa-li fa ${props.left} icon-bootstrap`}     ></i>  <div className={`icon-list-item ${props.right}`}> Bootstrap        </div></li>
                    <li> <i className={`icon-list-item fa-li fa ${props.left} icon-jquery`}        ></i>  <div className={`icon-list-item ${props.right}`}> jQuery           </div></li>
                    <li> <i className={`icon-list-item fa-li fa ${props.left} icon-line-graph`}    ></i>  <div className={`icon-list-item ${props.right}`}> Digital Marketing</div></li>
                </ul>
            </div>
        </div>
    </div>
)

export default About;