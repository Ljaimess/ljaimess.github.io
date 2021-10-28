import React from "react";
import { Link } from "react-router-dom";

const Menu = props => (
    <div className="container menu">
        <div className="bttns projectBttn">
            < Link to="/projects"> <h3 className="homeLinks">{props.bttn1}</h3 > </Link>
        </div>
        <div className="bttns aboutBttn">
            < Link to="/about"> <h3 className="homeLinks">{props.bttn2}</h3 > </Link>
        </div>
        <div className="bttns contactBttn">
            < Link to="/contact"> <h3 className="homeLinks">{props.bttn3}</h3 > </Link>
        </div>
        <div className="bttns contactBttn">
            < Link to="/links"> <h3 className="homeLinks">{props.bttn4}</h3 > </Link>
        </div>
    </div>
);

export default Menu;