import React from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
    return (
        <div className="footer">
            <img id="scooterMe" src={require('./../../assets/images/scooterme.png')} alt={'scooter'}/>
            <div className="contacts">
                <a target={"_blank"} href="https://github.com/gaonita"><GitHubIcon
                    style={{color: "white", fontSize: 50}}/> </a>
                <a target={"_blank"} href="mailto:gaon.yg@gmail.com"><EmailIcon style={{color: 'white', fontSize: 50}}/></a>
                <a target={"_blank"} href="https://www.linkedin.com/in/gaonyang/"><LinkedInIcon
                    style={{color: "white", fontSize: 55}}/></a>
            </div>
        </div>
    );
};

export default Footer;
