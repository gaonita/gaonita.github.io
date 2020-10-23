import React from 'react';
import ProjectBox from "../projectBox";
import GitHubIcon from "@material-ui/icons/GitHub";

const Work = () => {
    return (
        <div className="workSection">
            <ProjectBox title={"Stockholm Cafe Review"}
                        projectPath={"https://cafe-8de15.firebaseapp.com/"}
                        description={"React Redux Firebase"}
                        imgPath={require('../../assets/images/cupPixel.png')}
            />

            <ProjectBox title={"Password Generator"}
                        projectPath={"https://randompwgenerator.netlify.app"}
                        description={"random password generate machine."}
                        imgPath={require('../../assets/images/padlockpixel.png')}
            />
            <ProjectBox title={"Guess RGB Value"}
                        projectPath={"https://cafe-8de15.firebaseapp.com/"}
                        description={"Simple Guessing Game"}
                        imgPath={require('../../assets/images/palettePixel.png')}
            />
        </div>
    );
};

export default Work;
