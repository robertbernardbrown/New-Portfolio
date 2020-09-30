import React, { useState, useEffect } from "react";
import anime from "animejs";

const AboutIcons = (props) => {

    const left = useState('left');
    const right = useState('right');

    const animationRef = React.useRef(null);

    React.useEffect(() => {
        animationRef.current = anime({
          targets: ".el",
          translateX: 500,
          delay: function(el, i) {
            return i * 100;
          },
          loop: true,
          direction: "alternate",
          easing: "easeInOutSine"
        });
      }, []);

    return (
        <li>
            <i style={{ left: '-600px' }} className={`icon-list-item fa-li fa el ${left} ${props.icon}`}></i>
            <div style={{ right: '600px' }} className={`icon-list-item el ${right}`}> {props.iconName}</div>  
        </li>
    );
}


// class AboutIcons extends Component {

//     state = {
//         left: "left",
//         right: "right",
//     }

//     componentDidMount(){
//         var that = this
//         setTimeout( function(){
//             that.slideIn();
//         }, that.props.wait);
//     }

//     slideIn = () => {
//         this.setState({
//             left:"list-icon",
//             right:""
//         });
//     }

//     render(){
//         return(
//             <li>
//                 <i style={{ left: '-600px' }} className={`icon-list-item fa-li fa ${this.state.left} ${this.props.icon}`}></i>
//                 <div style={{ right: '600px' }} className={`icon-list-item ${this.state.right}`}> {this.props.iconName}</div>
//             </li>
//         )
//     }
// }

export default AboutIcons;