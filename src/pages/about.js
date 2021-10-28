import React from "react";
import NavBar from "../components/navbar";

const About = props => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container">
                <div className="about">
                    <p>Hello and welcome to my Portfolio. <br></br>
                        My name is Laurentino Jaimes and I'm a 28 year old Full Stack Developer in the programming field who went to The UCF BOOT CAMP,
                        as of right now I am knowledgeable in JavaScript, HTML, CSS, JQuery, MySQL, MongoDB and React. <br></br> <br></br>
                        There are many more to come as I am just starting this adventure in the massive world of Software Developing. <br></br>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;



// const items = ["hi", "hello"]

// const list = () => {
//     items.map(item => <div className="things"></div>)
// }


