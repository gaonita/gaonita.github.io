import React from 'react';
import './App.css';
import Intro from "./Intro/Intro";
import Work from "./components/work";
import Footer from "./components/footer/footer";
import Navbar from "./Nav";

function App() {
    return (
        <div className="App">
            {/*<Navbar/>*/}
            <Intro/>
            {/*<Work/>*/}
            <Footer/>
        </div>
    );
}

export default App;
