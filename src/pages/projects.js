import React, { Component } from "react";
import NavBar from "../components/navbar";
import ProjectsCard from "../components/projectsBox";
import Apps from "../theapps.json";


class Projects extends Component {

    state = {

    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container projectsContainer">
                    <div className="projectsApp" > {
                        Apps.map(Card => (
                            <ProjectsCard id={Card.id}
                                link={Card.url}
                                name={Card.name} />
                        ))
                    }
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Projects;