import React from 'react';

const ProjectBox = (props) => {
    return (
            <a  href={props.projectPath} className={"projectBox"} target="_blank">
                <div className="projectImg">
                    <img id="projectImage" height={"100"} src={props.imgPath} alt={'projectImg'}/>
                </div>
                <div className="projectText" style={{color:props.titleColor}}>
                    <h2>{props.title}</h2>
                    <h3>{props.description}</h3>
                </div>
            </a>
    );
};

export default ProjectBox;
