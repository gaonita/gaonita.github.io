import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'

const Intro = () => {
    return (

        <div>
            <div className="intro">
                <div className="introImg">
                 <span className="tooltiptext">
                Hi there!<br/>안녕하세요?
                 </span>
                    <img id="profilepic" src={require('../assets/images/bigcodingme copy.png')} alt={'gaon'}/>
                </div>
                <h1>Gaon Yang</h1>
            </div>

            <div className="container">
                <img id="scooterMe" src={require("../assets/images/scooterme.png")} alt={'scooter'}/>
                <div className="contacts">
                    <a target={"_blank"} href="https://github.com/gaonita"><GitHubIcon style={{color:"white", fontSize:50}}/> </a>
                    <a target={"_blank"} href="mailto:gaon.yg@gmail.com"><EmailIcon style={{color:'white', fontSize:50}}/></a>
                    <a target={"_blank"} href="https://www.linkedin.com/in/gaonyang/"><LinkedInIcon style={{color:"white", fontSize:55}}/></a>
                </div>
            </div>



        </div>

    )
};

export default Intro;
