import React from 'react';
import './App.css';
import Nav from "./Nav/Nav";
import Intro from "./Intro/Intro";
import Work from "./components/work";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <Work/>
      <Footer/>
   </div>
  );
}
export default App;
