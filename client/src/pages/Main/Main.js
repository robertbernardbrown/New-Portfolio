import React, { Component } from "react";
import "bootstrap";
import "./Main.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


class Main extends Component{

    state = {
        place: 0
    }

    render(){
        return(
            <div>
                <div className="container">
                    <Header/>
                    <div className="jumbotron header-div outline-red">
                        <div className="container">
                            <h1 className="header-text text-center">CONTENT</h1>
                        </div>
                    </div>
                </div>
                    <Footer/>
            </div>

        )
    }
}

export default Main;