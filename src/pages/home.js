import React, { Component } from "react";
import Header from "../components/header";
import Menu from "../components/menu";


class Home extends Component {
    state = {
        title: "Laurentino's Portfolio",
        subtitle: "A command line quest",
        bttn1: "Projects",
        bttn2: "About",
        bttn3: "Contact",
        bttn4: "Links",

    }
    render() {
        return (
            <div className="App">
                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                />

                <Menu
                    bttn1={this.state.bttn1}
                    bttn2={this.state.bttn2}
                    bttn3={this.state.bttn3}
                    bttn4={this.state.bttn4}
                />

            </div>
        )
    }
}

export default Home;