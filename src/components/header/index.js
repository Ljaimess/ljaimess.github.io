import React from "react";

const Header = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid titlebox">
            <div className="row">
                <div className="col">
                    <h1>{props.title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-8 ">
                    <h2>{props.subtitle}</h2>
                </div>
                <div className="col-4 picDiv">
                    <img className="picofme " src="images/me.png" alt="me"
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Header;

