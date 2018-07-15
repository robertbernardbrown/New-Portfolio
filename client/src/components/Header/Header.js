import React from "react";
import NavbarComp from "../../components/Navbar/Navbar";

const Header = () => (
    <div>
        <div className="hero-image hero-image-text" id="jumbo-div">
        <NavbarComp className="navbar"/>
            <div className="container" id="header-container">
                <a href="/"><h1 className="header-text text-center">Robert Brown</h1></a>
            </div>
        <section id="scroll-down" className="about-scroll">
            <a href="#about"><span></span></a>
        </section>
        </div>
    </div>
)

export default Header;