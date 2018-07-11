import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import NavbarComp from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Portfolio from "../../components/Portfolio/Portfolio";
import projects from "../../utils/projects";

console.log(projects);

class Main extends Component{

    state = {
        place: 0
    }

    render(){
        return(
            <div className="site-container">
                    <Header/>
                <div className="container">
                    <About/>
                    <Portfolio projects={projects}/>
                    <Contact/>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default Main;