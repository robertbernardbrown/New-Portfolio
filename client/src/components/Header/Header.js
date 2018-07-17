import React, { Component } from "react";
import NavbarComp from "../../components/Navbar/Navbar";
import smoothScroll from "../../utils/smoothscroll";

class Header extends Component {

    handleScrollClick = () => {
        smoothScroll.scrollTo("about");
    }
    
    render() {
        return(
            <div>
                <div className="hero-image hero-image-text">
                <NavbarComp className="navbar"/>
                    <div className="container" id="header-container">
                        <a href="/"><h1 className="header-text text-center">Robert Brown</h1></a>
                    </div>
                <section id="scroll-down" className="about-scroll">
                    <a href="#about"><span onClick={this.handleScrollClick}></span></a>
                </section>
                </div>
            </div>
        )
    }
}

export default Header;