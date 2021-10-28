import React from "react"; 

let ProjectsCard = (props) => {
    return (
        <div className="projectsCard" id={props.id}>
            <a href={props.link}><h3 className="projectNames">{props.name}</h3></a>
        </div>
    )
}

export default ProjectsCard;