import React, {useEffect, useState} from 'react';
import ProjectBox from "../projectBox";
import {motion, useTransform, useViewportScroll, useAnimation} from "framer-motion";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    workSection: {
    display: 'flex',
    padding: 30,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    height: '50vh',
},

projectBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50vw',
    textDecoration: 'none',
},


projectText: {
    margin: 10,
    width: '60%',
    textDecoration: 'none'
},

})
const Work = ({theme}) => {
    const [isComplete, setIsComplete] = useState(false);
    const classes = useStyle();
    const controls = useAnimation();
    const {scrollYProgress} = useViewportScroll()
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    useEffect(() => {
        yRange.onChange(x => {
            if (!isComplete && x >= 0.3) {
                controls.start('visible');
                setIsComplete(true);
            } else if (isComplete && x < 0.3) {
                controls.start('hidden');
                setIsComplete(false);
            }
        })
    }, [yRange, controls, isComplete])

    const appear = {
        x: {
            duration: 1,
            ease: 'easeIn',
        },
    }

    return (
        <div className="workSection">
            {/*<motion.div transition={appear}*/}
            {/*            style={{*/}
            {/*                display: 'flex',*/}
            {/*                flexDirection: 'column',*/}
            {/*                alignItems: 'center',*/}
            {/*                justifyContent: 'center'*/}
            {/*            }}*/}
            {/*            initial={'hidden'}*/}
            {/*            variants={{*/}
            {/*                'visible': {x: "-1em", opacity: 1},*/}
            {/*                'hidden': {x: "-5em", opacity: 0},*/}
            {/*            }}*/}
            {/*            animate={controls}>*/}
                <ProjectBox title={"Stockholm Cafe Review"}
                            titleColor={theme.color}
                            projectPath={"https://cafe-8de15.firebaseapp.com/"}
                            description={"React Redux Firebase"}
                            imgPath={require('../../assets/images/cupPixel.png')}
                />
            {/*</motion.div>*/}
            <ProjectBox title={"Password Generator"}
                        titleColor={theme.color}
                        projectPath={"https://randompwgenerator.netlify.app"}
                        description={"React"}
                        imgPath={require('../../assets/images/padlockpixel.png')}
            />
            <ProjectBox title={"RGB Game"}
                        titleColor={theme.color}
                        projectPath={process.env.PUBLIC_URL + "/colorgame/colorgame.html"}
                        description={"HTML CSS JS"}
                        imgPath={require('../../assets/images/palettePixel.png')}
            />
        </div>
    );
};

export default Work;
