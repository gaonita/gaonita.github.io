import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#FFF',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-end',
        height: 50,
        zIndex: 20,
    },
    navItem: {
        marginLeft: 10,
        marginRight: 10,
        '&:hover': {
            color: 'red',
        }
    },
})

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <a className={classes.navItem}><h2>Hello</h2></a>
            <a className={classes.navItem}><h2>Works</h2></a>
            <a className={classes.navItem}><h2>Contact</h2></a>
        </div>
    )
};

export default Navbar;
