import React, { Component } from "react";
import MainContainer from "../parts/main holder";
import Footer from "../parts/footer";



// import Header from "../parts/header";
// import CardLinks from "../parts/Cardlinks";
// import JumboTron from "../parts/jumbotron";


class Home extends Component {

    state = {
        title: "Laurentino's Portfolio",
        subtitle: "A command line quest",

        portfolio: "projects",
        about: "About",
        contact: "Contact",
        links: "Links",
    };




    render() {
        return (
            <div>

                <MainContainer
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                >



                </MainContainer>

                

                <Footer>

                </Footer>

            </div>
        );
    };

}

export default Home;