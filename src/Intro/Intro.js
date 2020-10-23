import React from "react";

const Intro = () => {
    return (
        <div>
            <div className="intro">
                <div className="introImg">
                 <span className="tooltiptext">Hi there!</span>
                    <img id="profilepic" src={require('../assets/images/bigcodingme copy.png')} alt={'gaon'}/>
                </div>
                <h1>Gaon Yang</h1>
            </div>
        </div>

    )
};

export default Intro;
