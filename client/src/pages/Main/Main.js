import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavbarComp from "../../components/Navbar/Navbar";
import About from "../../components/About/About";


class Main extends Component{

    state = {
        place: 0
    }

    render(){
        return(
            <div>
                <NavbarComp/>
                <div className="container">
                    <Header/>
                    <About/>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default Main;