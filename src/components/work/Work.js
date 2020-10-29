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
                        description={"React"}
                        imgPath={require('../../assets/images/padlockpixel.png')}
            />
            <ProjectBox title={"RGB Game"}
                        projectPath={process.env.PUBLIC_URL + "/colorgame/colorgame.html"}
                        description={"HTML CSS JS"}
                        imgPath={require('../../assets/images/palettePixel.png')}
            />
        </div>
    );
};

export default Work;
