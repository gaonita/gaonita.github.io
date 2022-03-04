import React, {useContext, useState} from 'react';
import './App.css';
import Intro from "./Intro/Intro";
import Work from "../src/components/work/Work";
import Footer from "./components/footer/footer";
import Navbar from "./Nav";
import {ThemeContext, ThemeProvider, themes} from "./ThemeProvider";
import Toggle from "./components/Toggle";
import {ReactComponent as Star} from "./assets/images/star.svg";

function App() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <div className="App">
            <div style={{marginTop:32, display:"flex", justifyContent:'flex-end', padding:'0 32px'}}>
                <Toggle onClick={toggleTheme} checkedColor={'#ffd644'}/>
            </div>
            {/*<Navbar/>*/}
            <Intro theme={theme}/>
            <Work theme={theme}/>
            <Footer/>
        </div>
    );
}

export default App;
