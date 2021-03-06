import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";
import {motion, useTransform, useViewportScroll, useAnimation} from "framer-motion";

const useStyle = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'

    },

    introImg: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        '& .tooltiptext': {
            visibility: 'hidden',
        },
        '&:hover .tooltiptext': {
            visibility: 'visible',
            backgroundColor: '#14e47cbf',
            color: '#4e4e50',
            border: 'solid 2px #14e47c',
            borderRadius: 10,
            zIndex: 1,
            textAlign: 'center',
            fontSize: '1em',
            padding: 3,
        }
    },

    introText: {
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        padding:24,
        width:'100%',
        margin:10
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
    }
})


const Intro = () => {
    const [isComplete, setIsComplete] = useState(false);
    const classes = useStyle();
    const controls = useAnimation();
    const {scrollYProgress} = useViewportScroll()
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    useEffect(() => {
        yRange.onChange(x => {
            if (!isComplete && x >= 0.1) {
                controls.start('visible');
                setIsComplete(true);
            } else if (isComplete && x < 0.1) {
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
        <div className={classes.root}>
            <div style={{ marginBottom:100, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{fontWeight: 'bold', fontSize: 60}}>Hi!</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center' }}>
               
                <motion.div transition={appear}
                            style={{display: 'flex',}}
                            initial={'hidden'}
                            variants={{
                                'visible': {x: "1em", opacity: 1},
                                'hidden': {x: "6em", opacity: 0},
                            }}
                            animate={controls}>
                    <div className={classes.introText}>
                        <p className={classes.text}>I am Gaon<span role="img" aria-label="star">??????</span> a frontend engineer</p>
                    </div>
                </motion.div>

                <motion.div transition={appear}
                            style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center' }}
                            initial={'hidden'}
                            variants={{
                                'visible': {x: "-1em", opacity: 1},
                                'hidden': {x: "-5em", opacity: 0},
                            }}
                            animate={controls}>
                    <div className={classes.introImg}>
                        <img id="profilepic" src={require('../assets/images/bigcodingme copy.png')} alt={'gaon'}/>
                        <span className="tooltiptext">Hi there!</span>
                    </div>
                    <div className={classes.introText}>
                        <p className={classes.text}> developing visually pleasing products <br/>combined with fluid user experience<span role="img" aria-label="heart">??????</span></p>
                    </div>
                </motion.div>
            </div>
            
        </div>
    )
};

export default Intro;
