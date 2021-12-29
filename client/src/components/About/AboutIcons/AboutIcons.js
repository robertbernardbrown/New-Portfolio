import React, { useState, useEffect } from "react";
import anime from "animejs";

const AboutIcons = (props) => {

    const left = useState('left');
    const right = useState('right');

    const animationRef = React.useRef(null);

    React.useEffect(() => {
        animationRef.current = anime({
          targets: ".icon-tech-pair",
          translateX: [-100, 100, 0],
          delay: anime.stagger(100),
          loop: true
        });
      }, []);

    return (
        <li>
            <i className={`icon-list-item fa-li fa icon-tech-pair ${left} ${props.icon}`}></i>
            <div className={`icon-list-item ${right} icon-tech-pair`}> {props.iconName}</div>  
        </li>
    );
}

export default AboutIcons;