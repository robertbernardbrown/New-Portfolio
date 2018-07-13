import React, {Component} from "react";
import AboutIcons from "./AboutIcons/AboutIcons";
import { Tooltip } from 'reactstrap';

class About extends Component {

    state = {
        tooltipOpen: false,
        tooltipOpen2: false
    }

    toggle = () => {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    toggle2 = () => {
        this.setState({
            tooltipOpen2: !this.state.tooltipOpen2
        });
    }

    render(){
        return(
            <div className="header-div hero" id="about">
                <div className="container about-me">
                    <h1>Hi there!</h1> 
                    <hr/>
                    <p>Apologies if you're looking for 
                        <a href="https://en.wikipedia.org/wiki/Bobby_Brown" id="TooltipExample" target="_blank" rel="noopener noreferrer"> Bobby Brown</a> (of New Edition fame) or  
                        <a href="https://en.wikipedia.org/wiki/Robert_Brown_(botanist,_born_1773)" id="TooltipExample2" target="_blank" rel="noopener noreferrer"> Robert Brown</a> (reknowned botanist), but I'm not your guy.
                    </p>
                    <p>However, if you're looking for a fullstack developer I'm <strong>totally</strong> your guy.</p>
                </div>
                <div className="container">
                    <p>Here are some of my skills:</p>
                    <div id="icon-ul-div">
                        <ul className="fa-ul" id="flexList">
                            {this.props.show ? this.props.iconList.map((cur, i) => (
                                <AboutIcons key={i} wait={i * 300} iconList={this.props.iconList} icon={cur.icon} iconName={cur.iconName}/>
                            )):
                            <div></div>
                        }
                        </ul>
                    </div>
                </div>
                <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                    <img alt="Bobby Brown" className="tooltip-img" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjM0MDk5NzYyNzAw/bobby-brown-17175746-1-402.jpg"></img>
                </Tooltip>
                <Tooltip placement="top" isOpen={this.state.tooltipOpen2} target="TooltipExample2" toggle={this.toggle2}>
                    <img alt="Robert Brown" className="tooltip-img" src="https://upload.wikimedia.org/wikipedia/commons/3/32/Robert_Brown_%28botanist%29.jpg"></img>
                </Tooltip>
            </div>
        )
    }
}

export default About;