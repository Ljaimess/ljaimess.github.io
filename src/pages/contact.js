import React from "react";
import NavBar from "../components/navbar";
const Contact = props => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className=" contactInfo container"><p>I you wish to contact me I can be reached at Ljaimes92@gmail.com </p>
                <div className="iconList">
                    <a href="https://github.com/Ljaimess"><img className="linkIcon" src="images/github.png" alt="Github"
                    /></a>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Contact;