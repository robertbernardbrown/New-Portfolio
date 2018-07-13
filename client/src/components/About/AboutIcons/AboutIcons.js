import React, {Component} from "react";

class AboutIcons extends Component {

    state = {
        left: "left",
        right: "right",
    }

    componentDidMount(){
        var that = this
        setTimeout( function(){
            that.slideIn();
        }, that.props.wait);
    }

    slideIn = () => {
        this.setState({
            left:"list-icon",
            right:""
        });
    }

    render(){
        return(
            <li> <i className={`icon-list-item fa-li fa ${this.state.left} ${this.props.icon}`}></i><div className={`icon-list-item ${this.state.right}`}> {this.props.iconName}</div></li>
        )
    }
}

export default AboutIcons;