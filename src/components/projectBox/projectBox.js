import React from 'react';

const ProjectBox = (props) => {
    return (
            <a target={"_blank"} href={props.projectPath} className={"projectBox"}>
                <div className="projectImg">
                    <img id="projectImage" height={"100"} src={props.imgPath} alt={'projectImg'}/>
                </div>
                <div className="projectText">
                    <h2>{props.title}</h2>
                    <h3>{props.description}</h3>
                </div>
            </a>
    );
};

export default ProjectBox;
