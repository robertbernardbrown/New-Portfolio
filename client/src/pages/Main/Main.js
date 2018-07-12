import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import Portfolio from "../../components/Portfolio/Portfolio";
import projects from "../../utils/projects";

class Main extends Component{

    state = {
        left: "left",
        right: "right"
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        const aboutHeight = e.target.body.clientHeight <= window.scrollY
        console.log(aboutHeight);
        if (aboutHeight) {
            this.setState({
                left: "",
                right: ""
            })
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    render(){
        return(
            <div className="site-container">
                <Header/>
                <About onScroll={this.handleScroll} left={this.state.left} right={this.state.right}/>
                <Portfolio projects={projects}/>
                <Footer/>
            </div>
        )
    }
}

export default Main;